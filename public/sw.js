const CACHE_NAME = 'mov-to-mp4-pwa-v2';

const CORE_ROUTES = [
  '/',
  '/es/',
  '/pt/',
  '/de/',
  '/fr/',
  '/ja/',
  '/zh/',
  '/ru/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icon-192.svg',
  '/icon-512.svg',
  '/og-image.svg',
];

const FFMPEG_WASM_ASSETS = [
  'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.js',
  'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.wasm',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        await cache.addAll(CORE_ROUTES);
      } catch (err) {
        // Fallback individual pre-caching
        for (const url of CORE_ROUTES) {
          try {
            await cache.add(url);
          } catch {}
        }
      }

      // Pre-warm FFmpeg WASM core in background for 100% offline conversion
      for (const wasmUrl of FFMPEG_WASM_ASSETS) {
        try {
          await cache.add(wasmUrl);
        } catch {}
      }
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Do not cache Google Analytics hits
  if (url.hostname.includes('googletagmanager.com') || url.hostname.includes('google-analytics.com')) {
    return;
  }

  // Cache-first for static _astro bundles, icons, and FFmpeg WASM core
  if (
    url.pathname.startsWith('/_astro/') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.wasm') ||
    url.pathname.endsWith('.webmanifest') ||
    url.hostname.includes('cdn.jsdelivr.net') ||
    url.hostname.includes('unpkg.com')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request)
          .then((networkResp) => {
            if (networkResp && networkResp.status === 200) {
              const copy = networkResp.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            }
            return networkResp;
          })
          .catch(() => cached);
      })
    );
    return;
  }

  // Stale-while-revalidate for HTML navigation routes
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((networkResp) => {
          if (networkResp && networkResp.status === 200) {
            const copy = networkResp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return networkResp;
        })
        .catch(() => cached || caches.match('/'));

      return cached || fetchPromise;
    })
  );
});
