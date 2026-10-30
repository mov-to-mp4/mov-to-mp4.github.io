export const languages = {
  en: { name: 'English', flag: '🇺🇸', short: 'EN' },
  es: { name: 'Español', flag: '🇪🇸', short: 'ES' },
  pt: { name: 'Português', flag: '🇧🇷', short: 'PT' },
  de: { name: 'Deutsch', flag: '🇩🇪', short: 'DE' },
  fr: { name: 'Français', flag: '🇫🇷', short: 'FR' },
  ja: { name: '日本語', flag: '🇯🇵', short: 'JA' },
  zh: { name: '中文', flag: '🇨🇳', short: 'ZH' },
  ru: { name: 'Русский', flag: '🇷🇺', short: 'RU' },
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'en';
export const localeList = Object.keys(languages) as Locale[];

export const MANDATORY_SEO_KEYWORDS = [
  'mp4 converter',
  'mov to mp4 converter',
  'mov converter to mp4',
  'converter mov to mp4',
  'mp4 converter to mov',
  'converter mp4 to mov',
  'mov converter',
  'mp4 to mov converter',
  'mp4 convert to mov',
  'convert mov to mp4',
  'mov 轉 mp4 windows',
  'แปลง ไฟล์ mov to mp4',
  'cloudconvert mov to mp4',
] as const;

export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogLocale: string;
  };
  nav: {
    brandTitle: string;
    brandSubtitle: string;
    languageLabel: string;
    themeToggleLabel: string;
    themeLight: string;
    themeDark: string;
    installPwa: string;
    installPwaInstalled: string;
    installPwaTooltip: string;
    supportDeveloper: string;
  };
  pwaModal: {
    title: string;
    subtitle: string;
    iosStepTitle: string;
    iosStepDesc: string;
    desktopStepTitle: string;
    desktopStepDesc: string;
    offlineBadge: string;
    closeBtn: string;
  };
  breadcrumbs: {
    home: string;
    converter: string;
  };
  hero: {
    badgePrivacy: string;
    badgeSpeed: string;
    title: string;
    subtitle: string;
    step1Indicator: string;
    step2Indicator: string;
    step3Indicator: string;
    step4Indicator: string;
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    dropzoneFormats: string;
    selectFilesBtn: string;
    sampleBtn: string;
    sampleGenerating: string;
    addMoreFilesBtn: string;
    clearQueueBtn: string;
    filesSelectedLabel: string;
    directionLabel: string;
    directionMovToMp4: string;
    directionMovToMp4Desc: string;
    directionMp4ToMov: string;
    directionMp4ToMovDesc: string;
    modeLabel: string;
    modeLossless: string;
    modeLosslessBadge: string;
    modeLosslessDesc: string;
    modeCompat: string;
    modeCompatBadge: string;
    modeCompatDesc: string;
    resolutionLabel: string;
    resOriginal: string;
    res1080p: string;
    res720p: string;
    muteAudioLabel: string;
    muteAudioDesc: string;
    convertNowBtn: string;
    convertingTitle: string;
    convertingSubtitle: string;
    loadingEngineStatus: string;
    remuxingStatus: string;
    encodingStatus: string;
    fallbackEncodingStatus: string;
    elapsedTimeLabel: string;
    currentFileLabel: string;
    cancelBtn: string;
    resultTitle: string;
    resultSubtitle: string;
    originalSizeLabel: string;
    convertedSizeLabel: string;
    savedBadge: string;
    losslessBadge: string;
    durationLabel: string;
    downloadMp4Btn: string;
    downloadMovBtn: string;
    downloadAllBtn: string;
    convertAnotherBtn: string;
    previewVideoLabel: string;
    workspaceInstallBtn: string;
  };
  toasts: {
    offlineReady: string;
    pwaInstallPrompt: string;
    sampleLoaded: string;
    conversionComplete: string;
    fallbackTriggered: string;
    unsupportedFile: string;
  };
  howTo: {
    sectionTitle: string;
    sectionSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  cloudComparison: {
    badge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    cardTitle: string;
    cardDesc: string;
    localHeader: string;
    cloudHeader: string;
    rows: Array<{
      feature: string;
      localValue: string;
      cloudValue: string;
    }>;
    keywordCalloutTitle: string;
    keywordCalloutBody: string;
  };
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
  };
  faq: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  footer: {
    tagline: string;
    privacyNote: string;
    copyright: string;
  };
}

const commonKeywordString = MANDATORY_SEO_KEYWORDS.join(', ');

export const ui: Record<Locale, TranslationSchema> = {
  en: {
    meta: {
      title: 'MOV to MP4 Converter Free — Instant, 100% Offline & Private (No Upload)',
      description:
        'Free MOV to MP4 converter and bidirectional MP4 to MOV converter directly in your browser. Convert MOV to MP4 in 1 second with lossless stream copy (-c copy) — faster and safer than CloudConvert MOV to MP4 with zero upload limits on Windows & Mac.',
      keywords: `${commonKeywordString}, free video converter, lossless mov to mp4, iphone mov to mp4`,
      ogLocale: 'en_US',
    },
    nav: {
      brandTitle: 'MOV to MP4',
      brandSubtitle: 'Local WASM Studio',
      languageLabel: 'Select Language',
      themeToggleLabel: 'Toggle Light / Dark Theme',
      themeLight: 'Light Mode',
      themeDark: 'Dark Mode',
      installPwa: 'Add to Home Screen',
      installPwaInstalled: 'App Ready Offline',
      installPwaTooltip: 'Install MOV to MP4 Converter as an offline desktop or mobile app',
      supportDeveloper: 'Support the Developer',
    },
    pwaModal: {
      title: 'Install MOV to MP4 Converter (100% Offline App)',
      subtitle: 'Add this converter to your Home Screen or Desktop for instant offline video conversion anytime.',
      iosStepTitle: 'On iPhone / iPad (iOS Safari):',
      iosStepDesc: '1. Tap the "Share" icon at the bottom of Safari → 2. Select "Add to Home Screen" and tap Add.',
      desktopStepTitle: 'On Desktop Chrome / Edge / Android:',
      desktopStepDesc: 'Click the "Install App" icon in your browser address bar or tap "Add to Home Screen" in the browser menu.',
      offlineBadge: 'Works 100% Offline via WebAssembly Service Worker',
      closeBtn: 'Got It, Close',
    },
    breadcrumbs: {
      home: 'Home',
      converter: 'MOV to MP4 Converter',
    },
    hero: {
      badgePrivacy: '100% Client-Side Privacy • Zero Server Uploads',
      badgeSpeed: '1-Second Lossless Stream Copy',
      title: 'MOV to MP4 Converter',
      subtitle:
        'Convert iPhone, Mac & QuickTime .MOV videos to universal .MP4 instantly in your browser.',
      step1Indicator: '1. Select Video',
      step2Indicator: '2. Settings',
      step3Indicator: '3. Converting',
      step4Indicator: '4. Preview & Download',
      dropzoneTitle: 'Drop your .MOV or .MP4 video files here',
      dropzoneSubtitle: 'Or click anywhere inside this box to browse from your device (Batch supported)',
      dropzoneFormats: 'Supports .MOV, .MP4, .M4V, .WEBM, .MKV • No Cloud Upload • Unlimited Size',
      selectFilesBtn: 'Choose Video Files',
      sampleBtn: 'Instant Sample MOV Video',
      sampleGenerating: 'Creating HD Sample MOV...',
      addMoreFilesBtn: '+ Add More Videos',
      clearQueueBtn: 'Clear All',
      filesSelectedLabel: 'Selected Video Queue',
      directionLabel: 'Conversion Direction',
      directionMovToMp4: 'MOV to MP4 (Default)',
      directionMovToMp4Desc: 'Universal MP4 converter for Windows, Android, Web & Social Media',
      directionMp4ToMov: 'MP4 to MOV (Reverse)',
      directionMp4ToMovDesc: 'Apple QuickTime MOV converter for Final Cut Pro, iMovie & macOS',
      modeLabel: 'Processing Speed & Quality Mode',
      modeLossless: 'Instant Lossless Copy (1-Second Remux - No Quality Loss)',
      modeLosslessBadge: '⚡ 1-SEC REMUX',
      modeLosslessDesc:
        'Copies video/audio streams directly (-c copy) without re-encoding. Zero quality loss and instant completion.',
      modeCompat: 'Max Compatibility (H.264 + AAC Compression)',
      modeCompatBadge: '🛡️ UNIVERSAL H.264',
      modeCompatDesc:
        'Re-encodes video to universal H.264 MP4. Best when converting HEVC/H.265 iPhone clips or resizing resolution.',
      resolutionLabel: 'Output Resolution',
      resOriginal: 'Original',
      res1080p: '1080p Full HD',
      res720p: '720p HD',
      muteAudioLabel: 'Mute Audio Track',
      muteAudioDesc: 'Strip all audio streams (-an) for silent web video',
      convertNowBtn: 'Convert Video Now',
      convertingTitle: 'Processing Video Locally in Browser...',
      convertingSubtitle: 'Your video never leaves your device. Powered by WebAssembly FFmpeg.',
      loadingEngineStatus: 'Initializing WebAssembly Video Engine...',
      remuxingStatus: 'Performing Instant Lossless Stream Remux (-c copy)...',
      encodingStatus: 'Transcoding Video Frames to H.264 + AAC...',
      fallbackEncodingStatus: 'Auto-switching to H.264 Compatibility Transcode...',
      elapsedTimeLabel: 'Elapsed Time',
      currentFileLabel: 'Processing File',
      cancelBtn: 'Cancel Conversion',
      resultTitle: 'Conversion Complete!',
      resultSubtitle: 'Preview your converted video below or download it immediately to your device.',
      originalSizeLabel: 'Original',
      convertedSizeLabel: 'Converted',
      savedBadge: 'Size Optimized',
      losslessBadge: '100% Bit-Exact Lossless',
      durationLabel: 'Processed in',
      downloadMp4Btn: 'Download MP4',
      downloadMovBtn: 'Download MOV',
      downloadAllBtn: 'Download All Videos',
      convertAnotherBtn: 'Convert Another Video',
      previewVideoLabel: 'Instant HTML5 Video Preview',
      workspaceInstallBtn: 'Install Offline App (Add to Home Screen)',
    },
    toasts: {
      offlineReady: 'Offline mode ready! You can convert MOV & MP4 videos without internet.',
      pwaInstallPrompt: 'Tap Share → Add to Home Screen to install this offline converter.',
      sampleLoaded: 'Sample Apple QuickTime .MOV video generated and loaded!',
      conversionComplete: 'Video converted locally with zero data uploaded!',
      fallbackTriggered: 'Codec required transcoding — automatically converted with H.264 compatibility mode.',
      unsupportedFile: 'Please select a valid video file (.mov, .mp4, .m4v, .webm, .mkv).',
    },
    howTo: {
      sectionTitle: '3-Step Visual Guide: How to Convert MOV to MP4 & MP4 to MOV',
      sectionSubtitle:
        'Use our fast mov to mp4 converter and bidirectional mp4 to mov converter with zero server uploads.',
      step1Title: '1. Select or Drop Your Video File',
      step1Desc:
        'Drop your QuickTime .MOV or .MP4 clips into the mov converter box, or test right away with the Instant Sample MOV Video button.',
      step2Title: '2. Choose Direction & 1-Second Lossless Mode',
      step2Desc:
        'Select "MOV to MP4" (converter mov to mp4) or "MP4 to MOV" (mp4 converter to mov), and pick Instant Lossless Copy (-c copy) or Max Compatibility H.264.',
      step3Title: '3. Instant HTML5 Preview & Download',
      step3Desc:
        'Preview your video in the built-in player and save your converted file immediately with our local mp4 converter.',
    },
    cloudComparison: {
      badge: 'BENCHMARK COMPARISON',
      sectionTitle: 'Why Local Browser Conversion Beats CloudConvert MOV to MP4 (Zero Upload Limits)',
      sectionSubtitle:
        'When searching for cloudconvert mov to mp4, mov 轉 mp4 windows, or แปลง ไฟล์ mov to mp4, traditional cloud tools force you to upload gigabytes of private footage. Our WebAssembly engine runs 100% on your device.',
      cardTitle: '100% Client-Side WebAssembly Engine vs. CloudConvert MOV to MP4 Uploaders',
      cardDesc:
        'Whether you need a mov converter to mp4 on Windows 11 (`mov 轉 mp4 windows`), macOS, or mobile (`แปลง ไฟล์ mov to mp4`), local stream remuxing finishes in 1 second without daily conversion caps or 1GB file size paywalls.',
      localHeader: 'MOV-to-MP4.github.io (Local WASM)',
      cloudHeader: 'CloudConvert MOV to MP4 & Cloud Tools',
      rows: [
        {
          feature: 'Upload & Download Wait Time',
          localValue: '0 Seconds (Instant Local RAM Access)',
          cloudValue: 'Slow (Must upload & re-download large 4K files)',
        },
        {
          feature: 'File Size & Daily Minute Limits',
          localValue: 'Unlimited Free (No 1GB cap or 25/day quota)',
          cloudValue: 'Restricted (25 conversions/day or file size paywalls)',
        },
        {
          feature: '1-Second Lossless Stream Copy (-c copy)',
          localValue: 'Built-In Default (Bit-Exact Zero Quality Loss)',
          cloudValue: 'Often re-encodes & degrades video bitrate',
        },
        {
          feature: 'Privacy & Offline Capability',
          localValue: '100% Private & Works Offline as PWA',
          cloudValue: 'Files uploaded to remote third-party servers',
        },
        {
          feature: 'Bidirectional Support (MP4 Convert to MOV)',
          localValue: 'Instant MOV ↔ MP4 & MP4 to MOV Converter',
          cloudValue: 'Requires separate upload & queue cycle',
        },
      ],
      keywordCalloutTitle: 'Universal Cross-Platform Support: Windows, Mac, iOS & Android',
      keywordCalloutBody:
        'Engineered for global creators searching for a reliable mp4 converter, mov to mp4 converter, mov converter to mp4, converter mov to mp4, mp4 converter to mov, converter mp4 to mov, mov converter, mp4 to mov converter, mp4 convert to mov, convert mov to mp4, mov 轉 mp4 windows, แปลง ไฟล์ mov to mp4, or a private alternative to cloudconvert mov to mp4.',
    },
    features: {
      sectionTitle: 'Why Professionals Choose Our MOV Converter & MP4 Converter',
      sectionSubtitle: 'Engineered for 1-second lossless remuxing, H.264 compatibility, and 100% on-device privacy.',
      f1Title: '1-Second Lossless Stream Remuxing (-c copy)',
      f1Desc:
        'Our mov to mp4 converter copies video and audio packets directly from the QuickTime .MOV container into .MP4 without re-encoding a single pixel.',
      f2Title: 'Bidirectional MP4 to MOV Converter',
      f2Desc:
        'Need to mp4 convert to mov for Final Cut Pro or iMovie? Switch to our converter mp4 to mov mode to package MP4 streams into Apple QuickTime MOV.',
      f3Title: 'Zero Cloud Uploads (Beats CloudConvert MOV to MP4)',
      f3Desc:
        'Unlike cloudconvert mov to mp4 services, your confidential footage never leaves your computer or phone. Works 100% offline once installed.',
      f4Title: 'Windows & Global Format Support (mov 轉 mp4 windows)',
      f4Desc:
        'Whether you need mov 轉 mp4 windows compatibility or แปลง ไฟล์ mov to mp4 on mobile, our H.264 + AAC mode guarantees playback on every device.',
    },
    faq: {
      sectionTitle: 'Frequently Asked Questions (MOV to MP4 & MP4 to MOV Converter)',
      sectionSubtitle: 'Everything you need to know about converting MOV and MP4 video files in your browser.',
      items: [
        {
          q: 'How does this free MOV to MP4 converter work without uploading files?',
          a: 'Our mov to mp4 converter (and mov converter to mp4) runs FFmpeg compiled to WebAssembly directly inside your browser. When you convert mov to mp4, your computer processes the video in local memory with zero server uploads.',
        },
        {
          q: 'Why is this converter mov to mp4 faster than CloudConvert MOV to MP4?',
          a: 'When using cloudconvert mov to mp4, you must wait to upload multi-gigabyte video files to a remote server, wait in a queue, and download the result. Our local mp4 converter uses instant lossless stream copy (-c copy) to remux your file in 1 second with no upload limits.',
        },
        {
          q: 'Can I use this tool as an MP4 to MOV converter (mp4 convert to mov)?',
          a: 'Yes! Our engine is a full bidirectional mp4 to mov converter and converter mp4 to mov. Simply select "MP4 to MOV (Reverse)" in Step 2 to use it as an mp4 converter to mov for Apple QuickTime and Final Cut Pro.',
        },
        {
          q: 'How do I convert iPhone MOV videos on Windows (mov 轉 mp4 windows)?',
          a: 'For users searching for mov 轉 mp4 windows, drop your iPhone QuickTime .mov clip into the workspace. Use Instant Lossless Copy for H.264 clips, or choose Max Compatibility (H.264 + AAC) if your iPhone recorded in HEVC/H.265 so it plays smoothly on Windows Media Player.',
        },
        {
          q: 'Does this mov converter support mobile devices and international workflows (แปลง ไฟล์ mov to mp4)?',
          a: 'Absolutely! Whether you are looking to แปลง ไฟล์ mov to mp4 on iOS/Android or need an offline desktop mov converter, you can click "Add to Home Screen" to install the Progressive Web App and convert videos 100% offline.',
        },
      ],
    },
    footer: {
      tagline: '100% Client-Side WebAssembly MOV to MP4 Converter & MP4 to MOV Converter.',
      privacyNote: 'Zero uploads. All video processing happens locally on your device.',
      copyright: '© 2026 MOV to MP4 Converter. Built for speed & privacy.',
    },
  },

  es: {
    meta: {
      title: 'Convertidor MOV a MP4 Gratis — Instantáneo, 100% Offline y Privado (Sin Subir)',
      description:
        'Convertidor MOV a MP4 (mov to mp4 converter) y MP4 a MOV (mp4 to mov converter) en 1 segundo en tu navegador. Mejor que cloudconvert mov to mp4: 100% privado, sin pérdida (-c copy) y sin límites en Windows y Mac.',
      keywords: `${commonKeywordString}, convertir mov a mp4, conversor mov a mp4 gratis, pasar mov a mp4 sin perder calidad`,
      ogLocale: 'es_ES',
    },
    nav: {
      brandTitle: 'MOV a MP4',
      brandSubtitle: 'Estudio WASM Local',
      languageLabel: 'Seleccionar idioma',
      themeToggleLabel: 'Cambiar tema claro / oscuro',
      themeLight: 'Modo Claro',
      themeDark: 'Modo Oscuro',
      installPwa: 'Añadir a Inicio',
      installPwaInstalled: 'App Lista Offline',
      installPwaTooltip: 'Instalar el convertidor MOV a MP4 como aplicación sin conexión',
      supportDeveloper: 'Apoyar al Desarrollador',
    },
    pwaModal: {
      title: 'Instalar Convertidor MOV a MP4 (App 100% Offline)',
      subtitle: 'Añade este convertidor a tu pantalla de inicio o escritorio para convertir videos sin conexión.',
      iosStepTitle: 'En iPhone / iPad (Safari iOS):',
      iosStepDesc: '1. Toca el icono "Compartir" en la barra de Safari → 2. Selecciona "Añadir a pantalla de inicio".',
      desktopStepTitle: 'En Escritorio Chrome / Edge / Android:',
      desktopStepDesc: 'Haz clic en el icono "Instalar aplicación" en la barra de direcciones o en el menú del navegador.',
      offlineBadge: 'Funciona 100% Sin Internet mediante Service Worker WebAssembly',
      closeBtn: 'Entendido, Cerrar',
    },
    breadcrumbs: {
      home: 'Inicio',
      converter: 'Convertidor MOV a MP4',
    },
    hero: {
      badgePrivacy: '100% Privado en tu Dispositivo • Sin Subidas a Servidores',
      badgeSpeed: 'Copia Sin Pérdida en 1 Segundo',
      title: 'Convertidor MOV a MP4',
      subtitle:
        'Convierte videos .MOV de iPhone, Mac y QuickTime a .MP4 universal al instante en tu navegador.',
      step1Indicator: '1. Elegir Video',
      step2Indicator: '2. Ajustes',
      step3Indicator: '3. Convirtiendo',
      step4Indicator: '4. Vista Previa y Descarga',
      dropzoneTitle: 'Arrastra y suelta tus videos .MOV o .MP4 aquí',
      dropzoneSubtitle: 'O haz clic en cualquier parte del recuadro para buscar en tu dispositivo (Soporta lotes)',
      dropzoneFormats: 'Soporta .MOV, .MP4, .M4V, .WEBM, .MKV • Sin Subir a la Nube • Sin Límite',
      selectFilesBtn: 'Seleccionar Videos',
      sampleBtn: 'Video MOV de Prueba Instantáneo',
      sampleGenerating: 'Generando MOV de Muestra...',
      addMoreFilesBtn: '+ Añadir Más Videos',
      clearQueueBtn: 'Limpiar Todo',
      filesSelectedLabel: 'Cola de Videos Seleccionados',
      directionLabel: 'Dirección de Conversión',
      directionMovToMp4: 'MOV a MP4 (Predeterminado)',
      directionMovToMp4Desc: 'Contenedor MP4 universal para Windows, Android, Web y Redes Sociales',
      directionMp4ToMov: 'MP4 a MOV (Inverso)',
      directionMp4ToMovDesc: 'Contenedor Apple QuickTime MOV para Final Cut Pro, iMovie y macOS',
      modeLabel: 'Modo de Velocidad y Calidad',
      modeLossless: 'Copia Instantánea Sin Pérdida (Remux en 1s - Calidad 100%)',
      modeLosslessBadge: '⚡ REMUX 1 SEG',
      modeLosslessDesc:
        'Copia las pistas de video y audio directamente (-c copy) sin recodificar. Cero pérdida de calidad.',
      modeCompat: 'Máxima Compatibilidad (Compresión H.264 + AAC)',
      modeCompatBadge: '🛡️ H.264 UNIVERSAL',
      modeCompatDesc:
        'Recodifica a H.264 MP4 universal. Ideal para clips HEVC/H.265 de iPhone o cambiar la resolución.',
      resolutionLabel: 'Resolución de Salida',
      resOriginal: 'Original',
      res1080p: '1080p Full HD',
      res720p: '720p HD',
      muteAudioLabel: 'Silenciar Audio',
      muteAudioDesc: 'Eliminar la pista de audio (-an) para obtener un video silencioso',
      convertNowBtn: 'Convertir Video Ahora',
      convertingTitle: 'Procesando Video Localmente en el Navegador...',
      convertingSubtitle: 'Tu video nunca sale de tu dispositivo. Impulsado por WebAssembly FFmpeg.',
      loadingEngineStatus: 'Inicializando motor de video WebAssembly...',
      remuxingStatus: 'Ejecutando copia directa sin pérdida (-c copy)...',
      encodingStatus: 'Codificando fotogramas de video a H.264 + AAC...',
      fallbackEncodingStatus: 'Cambiando automáticamente a modo compatible H.264...',
      elapsedTimeLabel: 'Tiempo Transcurrido',
      currentFileLabel: 'Procesando Archivo',
      cancelBtn: 'Cancelar Conversión',
      resultTitle: '¡Conversión Completada!',
      resultSubtitle: 'Reproduce la vista previa de tu video o descárgalo al instante en tu dispositivo.',
      originalSizeLabel: 'Original',
      convertedSizeLabel: 'Convertido',
      savedBadge: 'Tamaño Optimizado',
      losslessBadge: '100% Idéntico Sin Pérdida',
      durationLabel: 'Procesado en',
      downloadMp4Btn: 'Descargar MP4',
      downloadMovBtn: 'Descargar MOV',
      downloadAllBtn: 'Descargar Todos',
      convertAnotherBtn: 'Convertir Otro Video',
      previewVideoLabel: 'Vista Previa Instantánea HTML5',
      workspaceInstallBtn: 'Instalar App Offline (Añadir a Inicio)',
    },
    toasts: {
      offlineReady: '¡Modo sin conexión listo! Puedes convertir videos sin internet.',
      pwaInstallPrompt: 'Toca Compartir → Añadir a pantalla de inicio para instalar la app.',
      sampleLoaded: '¡Video de muestra Apple QuickTime .MOV generado y cargado!',
      conversionComplete: '¡Video convertido localmente sin subir datos!',
      fallbackTriggered: 'Se aplicó conversión H.264 automática para máxima compatibilidad.',
      unsupportedFile: 'Por favor selecciona un archivo de video válido (.mov, .mp4, .m4v, .webm, .mkv).',
    },
    howTo: {
      sectionTitle: 'Guía Visual en 3 Pasos: Convertir MOV a MP4 y MP4 a MOV',
      sectionSubtitle:
        'Utiliza nuestro rápido mov to mp4 converter y mp4 to mov converter sin subir archivos a ningún servidor.',
      step1Title: '1. Arrastra tu Archivo MOV o MP4',
      step1Desc:
        'Suelta tus videos en el recuadro de nuestro mov converter o prueba la herramienta con el botón de Video MOV de Prueba Instantáneo.',
      step2Title: '2. Elige Dirección y Modo Sin Pérdida en 1s',
      step2Desc:
        'Selecciona "MOV a MP4" (converter mov to mp4) o "MP4 a MOV" (mp4 converter to mov) con copia directa (-c copy) o H.264.',
      step3Title: '3. Vista Previa HTML5 y Descarga',
      step3Desc:
        'Reproduce el video al instante y guárdalo en tu equipo con nuestro mp4 converter 100% local.',
    },
    cloudComparison: {
      badge: 'COMPARATIVA TÉCNICA',
      sectionTitle: 'Por Qué la Conversión Local Supera a CloudConvert MOV to MP4 (Sin Límites de Subida)',
      sectionSubtitle:
        'Al buscar cloudconvert mov to mp4, mov 轉 mp4 windows o แปลง ไฟล์ mov to mp4, las webs tradicionales te obligan a subir gigabytes a la nube. Nuestro motor WebAssembly procesa todo en tu dispositivo.',
      cardTitle: 'Motor WebAssembly 100% Local vs. CloudConvert MOV to MP4',
      cardDesc:
        'Tanto si necesitas un mov converter to mp4 en Windows (`mov 轉 mp4 windows`), Mac o móvil (`แปลง ไฟล์ mov to mp4`), el remuxing local tarda 1 segundo sin límites diarios.',
      localHeader: 'MOV-to-MP4.github.io (WASM Local)',
      cloudHeader: 'CloudConvert MOV to MP4 y Nube',
      rows: [
        {
          feature: 'Tiempo de Subida y Descarga',
          localValue: '0 Segundos (Lectura instantánea en RAM)',
          cloudValue: 'Lento (Subida y descarga de archivos pesados)',
        },
        {
          feature: 'Límite de Tamaño y Cuota Diaria',
          localValue: 'Ilimitado y Gratis (Sin tope de 1GB)',
          cloudValue: 'Limitado a 25 minutos/día o pago',
        },
        {
          feature: 'Copia Sin Pérdida en 1s (-c copy)',
          localValue: 'Incluido por defecto (100% calidad original)',
          cloudValue: 'Suele recodificar y tardar minutos',
        },
        {
          feature: 'Privacidad y Modo Offline PWA',
          localValue: '100% Privado y Funciona Sin Internet',
          cloudValue: 'Tus videos se suben a servidores externos',
        },
      ],
      keywordCalloutTitle: 'Soporte Universal Multiplataforma: Windows, macOS, iOS y Android',
      keywordCalloutBody:
        'Optimizado para quienes buscan mp4 converter, mov to mp4 converter, mov converter to mp4, converter mov to mp4, mp4 converter to mov, converter mp4 to mov, mov converter, mp4 to mov converter, mp4 convert to mov, convert mov to mp4, mov 轉 mp4 windows, แปลง ไฟล์ mov to mp4 y una alternativa privada a cloudconvert mov to mp4.',
    },
    features: {
      sectionTitle: 'Por Qué Elegir Nuestro Motor MOV Converter y MP4 Converter',
      sectionSubtitle: 'Diseñado para máxima velocidad, fidelidad sin pérdida y privacidad absoluta.',
      f1Title: 'Remuxing Sin Pérdida en 1 Segundo (-c copy)',
      f1Desc: 'Nuestro mov to mp4 converter copia los paquetes de audio y video directamente sin recodificar.',
      f2Title: 'Conversión Bidireccional MP4 to MOV Converter',
      f2Desc: '¿Necesitas mp4 convert to mov? Usa el modo converter mp4 to mov para edición en Final Cut Pro.',
      f3Title: 'Superior a CloudConvert MOV to MP4 en Privacidad',
      f3Desc: 'A diferencia de cloudconvert mov to mp4, tus grabaciones personales nunca se suben a internet.',
      f4Title: 'Compatible con Windows y Móvil (mov 轉 mp4 windows)',
      f4Desc: 'Soporte completo para mov 轉 mp4 windows y แปลง ไฟล์ mov to mp4 con modo H.264 universal.',
    },
    faq: {
      sectionTitle: 'Preguntas Frecuentes (FAQ — MOV to MP4 Converter)',
      sectionSubtitle: 'Todo lo que necesitas saber para convert mov to mp4 y mp4 convert to mov.',
      items: [
        {
          q: '¿Convertir con este mov to mp4 converter reduce la calidad del video?',
          a: '¡No! Nuestro mov converter to mp4 (converter mov to mp4) utiliza copia de flujo sin pérdida (-c copy) para transferir el video exacto a MP4 en 1 segundo.',
        },
        {
          q: '¿En qué supera esta herramienta a CloudConvert MOV to MP4?',
          a: 'A diferencia de cloudconvert mov to mp4, nuestro mp4 converter procesa todo localmente en tu navegador sin subir archivos, sin esperas y sin límite de 1GB.',
        },
        {
          q: '¿Cómo funciona el mp4 to mov converter (mp4 convert to mov)?',
          a: 'En el Paso 2 elige la dirección "MP4 a MOV (Inverso)" para usar nuestro mp4 converter to mov (converter mp4 to mov) y obtener un archivo QuickTime .mov.',
        },
        {
          q: '¿Sirve para Windows y otros idiomas (mov 轉 mp4 windows / แปลง ไฟล์ mov to mp4)?',
          a: 'Sí, este mov converter permite convert mov to mp4 tanto en PC Windows (mov 轉 mp4 windows) como en móviles (แปลง ไฟล์ mov to mp4) funcionando incluso sin conexión.',
        },
      ],
    },
    footer: {
      tagline: 'Convertidor de Video WebAssembly 100% en el Navegador. Rápido, Sin Pérdida, Privado.',
      privacyNote: 'Cero subidas. Todo el procesamiento ocurre localmente en tu dispositivo.',
      copyright: '© 2026 MOV to MP4 Converter. Creado para velocidad y privacidad.',
    },
  },

  pt: {
    meta: {
      title: 'Conversor MOV para MP4 Grátis — Instantâneo, 100% Offline e Privado (Sem Upload)',
      description:
        'Conversor MOV para MP4 (mov to mp4 converter) e MP4 para MOV (mp4 to mov converter) em 1 segundo no navegador. Mais rápido que cloudconvert mov to mp4, sem upload e sem perda (-c copy).',
      keywords: `${commonKeywordString}, converter mov para mp4, conversor de video gratis, transformar mov em mp4`,
      ogLocale: 'pt_BR',
    },
    nav: {
      brandTitle: 'MOV para MP4',
      brandSubtitle: 'Estúdio WASM Local',
      languageLabel: 'Selecionar Idioma',
      themeToggleLabel: 'Alternar Tema Claro / Escuro',
      themeLight: 'Modo Claro',
      themeDark: 'Modo Escuro',
      installPwa: 'Adicionar à Tela Inicial',
      installPwaInstalled: 'App Pronto Offline',
      installPwaTooltip: 'Instalar o Conversor MOV para MP4 como aplicativo offline',
      supportDeveloper: 'Apoie o Desenvolvedor',
    },
    pwaModal: {
      title: 'Instalar Conversor MOV para MP4 (App 100% Offline)',
      subtitle: 'Adicione à tela inicial ou área de trabalho para converter vídeos mesmo sem internet.',
      iosStepTitle: 'No iPhone / iPad (Safari iOS):',
      iosStepDesc: '1. Toque no ícone "Compartilhar" no Safari → 2. Escolha "Adicionar à Tela de Início".',
      desktopStepTitle: 'No Computador Chrome / Edge / Android:',
      desktopStepDesc: 'Clique no ícone de instalação na barra de endereços ou use o menu do navegador.',
      offlineBadge: 'Funciona 100% Offline com Service Worker WebAssembly',
      closeBtn: 'Entendi, Fechar',
    },
    breadcrumbs: {
      home: 'Início',
      converter: 'Conversor MOV para MP4',
    },
    hero: {
      badgePrivacy: '100% Privado no Navegador • Zero Upload para Servidores',
      badgeSpeed: 'Cópia Sem Perda em 1 Segundo',
      title: 'Conversor MOV para MP4',
      subtitle:
        'Converta vídeos .MOV do iPhone, Mac e QuickTime para .MP4 universal instantaneamente no seu navegador.',
      step1Indicator: '1. Selecionar Vídeo',
      step2Indicator: '2. Ajustes',
      step3Indicator: '3. Convertendo',
      step4Indicator: '4. Prévia e Download',
      dropzoneTitle: 'Arraste e solte seus arquivos .MOV ou .MP4 aqui',
      dropzoneSubtitle: 'Ou clique em qualquer lugar desta caixa para escolher do dispositivo (Suporta lote)',
      dropzoneFormats: 'Suporta .MOV, .MP4, .M4V, .WEBM, .MKV • Sem Upload na Nuvem • Sem Limite',
      selectFilesBtn: 'Escolher Vídeos',
      sampleBtn: 'Vídeo MOV de Exemplo Instantâneo',
      sampleGenerating: 'Criando MOV de Exemplo...',
      addMoreFilesBtn: '+ Adicionar Mais Vídeos',
      clearQueueBtn: 'Limpar Tudo',
      filesSelectedLabel: 'Fila de Vídeos Selecionados',
      directionLabel: 'Direção da Conversão',
      directionMovToMp4: 'MOV para MP4 (Padrão)',
      directionMovToMp4Desc: 'Contêiner MP4 universal para Windows, Android, Web e Redes Sociais',
      directionMp4ToMov: 'MP4 para MOV (Reverso)',
      directionMp4ToMovDesc: 'Contêiner Apple QuickTime MOV para Final Cut Pro, iMovie e macOS',
      modeLabel: 'Modo de Velocidade e Qualidade',
      modeLossless: 'Cópia Instantânea Sem Perda (Remux em 1s - Sem Perda de Qualidade)',
      modeLosslessBadge: '⚡ REMUX 1 SEG',
      modeLosslessDesc:
        'Copia os fluxos de vídeo/áudio diretamente (-c copy) sem recodificar. Zero perda de qualidade.',
      modeCompat: 'Máxima Compatibilidade (Compressão H.264 + AAC)',
      modeCompatBadge: '🛡️ H.264 UNIVERSAL',
      modeCompatDesc:
        'Recodifica o vídeo para H.264 MP4 universal. Ideal para vídeos HEVC/H.265 do iPhone ou redimensionamento.',
      resolutionLabel: 'Resolução de Saída',
      resOriginal: 'Original',
      res1080p: '1080p Full HD',
      res720p: '720p HD',
      muteAudioLabel: 'Silenciar Áudio',
      muteAudioDesc: 'Remover faixa de áudio (-an) para vídeo silencioso',
      convertNowBtn: 'Converter Vídeo Agora',
      convertingTitle: 'Processando Vídeo Localmente no Navegador...',
      convertingSubtitle: 'Seu vídeo nunca sai do seu aparelho. Tecnologia WebAssembly FFmpeg.',
      loadingEngineStatus: 'Inicializando motor de vídeo WebAssembly...',
      remuxingStatus: 'Executando remux instantâneo sem perdas (-c copy)...',
      encodingStatus: 'Transcodificando quadros de vídeo para H.264 + AAC...',
      fallbackEncodingStatus: 'Alternando automaticamente para modo compatível H.264...',
      elapsedTimeLabel: 'Tempo Decorrido',
      currentFileLabel: 'Processando Arquivo',
      cancelBtn: 'Cancelar Conversão',
      resultTitle: 'Conversão Concluída!',
      resultSubtitle: 'Assista à prévia do vídeo abaixo ou baixe imediatamente no seu dispositivo.',
      originalSizeLabel: 'Original',
      convertedSizeLabel: 'Convertido',
      savedBadge: 'Tamanho Otimizado',
      losslessBadge: '100% Fiel Sem Perdas',
      durationLabel: 'Processado em',
      downloadMp4Btn: 'Baixar MP4',
      downloadMovBtn: 'Baixar MOV',
      downloadAllBtn: 'Baixar Todos',
      convertAnotherBtn: 'Converter Outro Vídeo',
      previewVideoLabel: 'Prévia Instantânea de Vídeo HTML5',
      workspaceInstallBtn: 'Instalar App Offline (Tela Inicial)',
    },
    toasts: {
      offlineReady: 'Modo offline pronto! Você pode converter vídeos MOV e MP4 sem internet.',
      pwaInstallPrompt: 'Toque em Compartilhar → Adicionar à Tela de Início para instalar.',
      sampleLoaded: 'Vídeo de amostra Apple QuickTime .MOV gerado e carregado!',
      conversionComplete: 'Vídeo convertido localmente com zero envio de dados!',
      fallbackTriggered: 'Transcodificação H.264 ativada automaticamente para compatibilidade total.',
      unsupportedFile: 'Selecione um arquivo de vídeo válido (.mov, .mp4, .m4v, .webm, .mkv).',
    },
    howTo: {
      sectionTitle: 'Guia Visual em 3 Passos: Converter MOV para MP4 e MP4 para MOV',
      sectionSubtitle: 'Use nosso mov to mp4 converter e mp4 to mov converter sem enviar arquivos para a nuvem.',
      step1Title: '1. Solte seu Vídeo MOV ou MP4',
      step1Desc: 'Arraste seus arquivos .MOV para o nosso mov converter ou clique no botão de Vídeo MOV de Exemplo.',
      step2Title: '2. Escolha a Direção e Modo Sem Perdas',
      step2Desc: 'Selecione converter mov to mp4 ou mp4 converter to mov com cópia instantânea (-c copy) em 1 segundo.',
      step3Title: '3. Prévia HTML5 e Download Imediato',
      step3Desc: 'Assista ao resultado no player integrado e salve com nosso mp4 converter local.',
    },
    cloudComparison: {
      badge: 'COMPARATIVO DE DESEMPENHO',
      sectionTitle: 'Por Que a Conversão Local no Navegador Supera o CloudConvert MOV to MP4 (Zero Limites)',
      sectionSubtitle:
        'Ao procurar por cloudconvert mov to mp4, mov 轉 mp4 windows ou แปลง ไฟล์ mov to mp4, serviços em nuvem exigem uploads demorados. Nosso motor WebAssembly converte instantaneamente no seu aparelho.',
      cardTitle: 'Motor WebAssembly 100% Local vs. CloudConvert MOV to MP4',
      cardDesc:
        'Seja como mov converter to mp4 no Windows (`mov 轉 mp4 windows`), Mac ou celular (`แปลง ไฟล์ mov to mp4`), você converte sem filas e sem limites.',
      localHeader: 'MOV-to-MP4.github.io (WASM Local)',
      cloudHeader: 'CloudConvert MOV to MP4 e Nuvem',
      rows: [
        {
          feature: 'Tempo de Upload e Download',
          localValue: '0 Segundos (Processamento direto na RAM)',
          cloudValue: 'Lento (Precisa enviar e baixar gigabytes)',
        },
        {
          feature: 'Limites de Tamanho e Cota Diária',
          localValue: 'Ilimitado e 100% Grátis',
          cloudValue: 'Restrito a 25 conversões/dia',
        },
        {
          feature: 'Cópia Sem Perda em 1s (-c copy)',
          localValue: 'Padrão Nativo (Qualidade 100% idêntica)',
          cloudValue: 'Reprocessamento demorado na nuvem',
        },
        {
          feature: 'Privacidade e Suporte Offline',
          localValue: '100% Privado + App PWA Offline',
          cloudValue: 'Arquivos enviados a servidores remotos',
        },
      ],
      keywordCalloutTitle: 'Compatibilidade Total: Windows, macOS, iOS e Android',
      keywordCalloutBody:
        'Criado para quem busca mp4 converter, mov to mp4 converter, mov converter to mp4, converter mov to mp4, mp4 converter to mov, converter mp4 to mov, mov converter, mp4 to mov converter, mp4 convert to mov, convert mov to mp4, mov 轉 mp4 windows, แปลง ไฟล์ mov to mp4 e alternativa rápida ao cloudconvert mov to mp4.',
    },
    features: {
      sectionTitle: 'Por Que Usar Nosso MOV Converter e MP4 Converter',
      sectionSubtitle: 'Projetado para velocidade extrema, qualidade original e privacidade.',
      f1Title: 'Remux Sem Perdas em 1 Segundo (-c copy)',
      f1Desc: 'Nosso mov to mp4 converter copia os pacotes de áudio e vídeo diretamente sem recodificar.',
      f2Title: 'Suporte Bidirecional MP4 to MOV Converter',
      f2Desc: 'Precisa de mp4 convert to mov? Use o modo converter mp4 to mov para edição no Final Cut Pro.',
      f3Title: 'Mais Rápido que CloudConvert MOV to MP4',
      f3Desc: 'Diferente do cloudconvert mov to mp4, seus vídeos pessoais nunca saem do seu computador.',
      f4Title: 'Suporte Windows e Internacional (mov 轉 mp4 windows)',
      f4Desc: 'Ideal para quem busca mov 轉 mp4 windows ou แปลง ไฟล์ mov to mp4 com compatibilidade H.264.',
    },
    faq: {
      sectionTitle: 'Perguntas Frequentes (FAQ — MOV to MP4 Converter)',
      sectionSubtitle: 'Tudo sobre como convert mov to mp4 e mp4 convert to mov direto no navegador.',
      items: [
        {
          q: 'Converter com este mov to mp4 converter diminui a qualidade do vídeo?',
          a: 'Não! Nosso mov converter to mp4 (converter mov to mp4) usa -c copy para transferir exatamente os mesmos dados de vídeo e áudio para MP4 sem perda.',
        },
        {
          q: 'Por que esta ferramenta é melhor que o CloudConvert MOV to MP4?',
          a: 'Ao contrário do cloudconvert mov to mp4, nosso mp4 converter roda 100% localmente no navegador via WebAssembly, sem tempo de upload e sem limite de arquivos.',
        },
        {
          q: 'Posso usar como mp4 to mov converter (mp4 convert to mov)?',
          a: 'Sim! Basta selecionar "MP4 para MOV (Reverso)" no Passo 2 para usar o mp4 converter to mov (converter mp4 to mov) e gerar um arquivo QuickTime .mov.',
        },
        {
          q: 'Funciona no Windows e celular (mov 轉 mp4 windows / แปลง ไฟล์ mov to mp4)?',
          a: 'Sim! Este mov converter permite convert mov to mp4 em PCs Windows (mov 轉 mp4 windows) e celulares (แปลง ไฟล์ mov to mp4) com suporte 100% offline.',
        },
      ],
    },
    footer: {
      tagline: 'Conversor de Vídeo WebAssembly 100% Client-Side. Rápido, Sem Perdas, Privado.',
      privacyNote: 'Zero uploads. Todo o processamento ocorre localmente no seu dispositivo.',
      copyright: '© 2026 MOV to MP4 Converter. Feito para velocidade e privacidade.',
    },
  },

  de: {
    meta: {
      title: 'MOV to MP4 Converter Kostenlos — Sofort, 100% Offline & Privat (Ohne Upload)',
      description:
        'Kostenloser MOV to MP4 Converter und bidirektionaler MP4 to MOV Converter in 1 Sekunde im Browser. Schneller & sicherer als CloudConvert MOV to MP4 dank verlustfreiem Stream-Copy (-c copy) ohne Upload-Limits.',
      keywords: `${commonKeywordString}, mov in mp4 umwandeln, kostenloser video konverter, ohne upload`,
      ogLocale: 'de_DE',
    },
    nav: {
      brandTitle: 'MOV zu MP4',
      brandSubtitle: 'Lokales WASM Studio',
      languageLabel: 'Sprache wählen',
      themeToggleLabel: 'Hell- / Dunkelmodus umschalten',
      themeLight: 'Heller Modus',
      themeDark: 'Dunkler Modus',
      installPwa: 'Zum Startbildschirm',
      installPwaInstalled: 'Offline-App bereit',
      installPwaTooltip: 'MOV zu MP4 Konverter als Offline-App installieren',
      supportDeveloper: 'Entwickler unterstützen',
    },
    pwaModal: {
      title: 'MOV zu MP4 Konverter installieren (100% Offline-App)',
      subtitle: 'Fügen Sie den Konverter zum Startbildschirm oder Desktop hinzu, um jederzeit offline zu konvertieren.',
      iosStepTitle: 'Auf iPhone / iPad (iOS Safari):',
      iosStepDesc: '1. Tippen Sie unten in Safari auf „Teilen“ → 2. Wählen Sie „Zum Home-Bildschirm“.',
      desktopStepTitle: 'Auf Desktop Chrome / Edge / Android:',
      desktopStepDesc: 'Klicken Sie auf das „App installieren“-Symbol in der Adressleiste oder im Browser-Menü.',
      offlineBadge: 'Funktioniert 100% Offline dank WebAssembly Service Worker',
      closeBtn: 'Verstanden, Schließen',
    },
    breadcrumbs: {
      home: 'Startseite',
      converter: 'MOV zu MP4 Konverter',
    },
    hero: {
      badgePrivacy: '100% Lokal im Browser • Kein Server-Upload',
      badgeSpeed: 'Verlustfreier 1-Sekunden Remux',
      title: 'MOV zu MP4 Konverter',
      subtitle:
        'Wandeln Sie iPhone-, Mac- & QuickTime-.MOV-Videos sofort und kostenlos im Browser in universelles .MP4 um.',
      step1Indicator: '1. Video wählen',
      step2Indicator: '2. Optionen',
      step3Indicator: '3. Konvertierung',
      step4Indicator: '4. Vorschau & Download',
      dropzoneTitle: '.MOV- oder .MP4-Videodateien hier ablegen',
      dropzoneSubtitle: 'Oder klicken Sie in dieses Feld, um Dateien vom Gerät auszuwählen (Stapelverarbeitung)',
      dropzoneFormats: 'Unterstützt .MOV, .MP4, .M4V, .WEBM, .MKV • Kein Cloud-Upload • Ohne Größenlimit',
      selectFilesBtn: 'Videodateien auswählen',
      sampleBtn: 'Sofortiges Beispiel-MOV-Video',
      sampleGenerating: 'Erstelle Beispiel-MOV...',
      addMoreFilesBtn: '+ Weitere Videos',
      clearQueueBtn: 'Alle löschen',
      filesSelectedLabel: 'Ausgewählte Video-Warteschlange',
      directionLabel: 'Konvertierungsrichtung',
      directionMovToMp4: 'MOV zu MP4 (Standard)',
      directionMovToMp4Desc: 'Universeller MP4-Container für Windows, Android, Web & Social Media',
      directionMp4ToMov: 'MP4 zu MOV (Umgekehrt)',
      directionMp4ToMovDesc: 'Apple QuickTime MOV-Container für Final Cut Pro, iMovie & macOS',
      modeLabel: 'Geschwindigkeits- & Qualitätsmodus',
      modeLossless: 'Sofortige Verlustfreie Kopie (1-Sek. Remux - Kein Qualitätsverlust)',
      modeLosslessBadge: '⚡ 1-SEK REMUX',
      modeLosslessDesc:
        'Kopiert Video-/Audiostreams direkt (-c copy) ohne Neukodierung. 100% Originalqualität in Sekundenbruchteilen.',
      modeCompat: 'Maximale Kompatibilität (H.264 + AAC Komprimierung)',
      modeCompatBadge: '🛡️ UNIVERSELL H.264',
      modeCompatDesc:
        'Kodiert Video in universelles H.264 MP4 um. Ideal für iPhone HEVC/H.265-Clips oder Auflösungsänderung.',
      resolutionLabel: 'Ausgabeauflösung',
      resOriginal: 'Original',
      res1080p: '1080p Full HD',
      res720p: '720p HD',
      muteAudioLabel: 'Ton stummschalten',
      muteAudioDesc: 'Audiospur komplett entfernen (-an) für stummes Video',
      convertNowBtn: 'Video jetzt umwandeln',
      convertingTitle: 'Video wird lokal im Browser verarbeitet...',
      convertingSubtitle: 'Ihr Video verlässt niemals Ihr Gerät. Angetrieben von WebAssembly FFmpeg.',
      loadingEngineStatus: 'WebAssembly Video-Engine wird initialisiert...',
      remuxingStatus: 'Führe verlustfreien Stream-Remux durch (-c copy)...',
      encodingStatus: 'Transkodiere Videobilder in H.264 + AAC...',
      fallbackEncodingStatus: 'Wechsle automatisch in den H.264-Kompatibilitätsmodus...',
      elapsedTimeLabel: 'Verstrichene Zeit',
      currentFileLabel: 'Aktuelle Datei',
      cancelBtn: 'Abbrechen',
      resultTitle: 'Konvertierung abgeschlossen!',
      resultSubtitle: 'Sehen Sie sich Ihr Video in der Vorschau an oder laden Sie es direkt herunter.',
      originalSizeLabel: 'Original',
      convertedSizeLabel: 'Konvertiert',
      savedBadge: 'Größe optimiert',
      losslessBadge: '100% Verlustfrei Bit-Exakt',
      durationLabel: 'Verarbeitet in',
      downloadMp4Btn: 'MP4 herunterladen',
      downloadMovBtn: 'MOV herunterladen',
      downloadAllBtn: 'Alle herunterladen',
      convertAnotherBtn: 'Weiteres Video umwandeln',
      previewVideoLabel: 'Sofortige HTML5-Videovorschau',
      workspaceInstallBtn: 'Offline-App installieren (Zum Startbildschirm)',
    },
    toasts: {
      offlineReady: 'Offline-Modus bereit! Sie können Videos auch ohne Internet konvertieren.',
      pwaInstallPrompt: 'Tippen Sie auf Teilen → Zum Home-Bildschirm hinzufügen.',
      sampleLoaded: 'Apple QuickTime .MOV Beispielvideo wurde erstellt und geladen!',
      conversionComplete: 'Video lokal ohne Daten-Upload konvertiert!',
      fallbackTriggered: 'Automatische H.264-Konvertierung für maximale Kompatibilität durchgeführt.',
      unsupportedFile: 'Bitte wählen Sie eine gültige Videodatei (.mov, .mp4, .m4v, .webm, .mkv).',
    },
    howTo: {
      sectionTitle: 'Visuelle 3-Schritte-Anleitung: MOV in MP4 & MP4 in MOV umwandeln',
      sectionSubtitle:
        'Nutzen Sie unseren schnellen mov to mp4 converter und mp4 to mov converter komplett ohne Cloud-Upload.',
      step1Title: '1. MOV- oder MP4-Video auswählen',
      step1Desc:
        'Ziehen Sie Ihre Dateien in den mov converter oder testen Sie sofort mit dem Beispiel-MOV-Button.',
      step2Title: '2. Richtung & 1-Sekunden Verlustfrei-Modus wählen',
      step2Desc:
        'Wählen Sie converter mov to mp4 oder mp4 converter to mov mit verlustfreiem Stream-Copy (-c copy) oder H.264.',
      step3Title: '3. Sofortige HTML5-Vorschau & Download',
      step3Desc:
        'Prüfen Sie das Video direkt im Browser-Player und speichern Sie es mit unserem lokalen mp4 converter.',
    },
    cloudComparison: {
      badge: 'TECHNISCHER VERGLEICH',
      sectionTitle: 'Warum lokale Browser-Konvertierung CloudConvert MOV to MP4 schlägt (Keine Upload-Limits)',
      sectionSubtitle:
        'Wer nach cloudconvert mov to mp4, mov 轉 mp4 windows oder แปลง ไฟล์ mov to mp4 sucht, muss bei Cloud-Diensten oft gigabyteweise Videos hochladen. Unsere WebAssembly-Engine arbeitet zu 100% lokal auf Ihrem Gerät.',
      cardTitle: '100% Lokale WebAssembly-Engine vs. CloudConvert MOV to MP4',
      cardDesc:
        'Egal ob als mov converter to mp4 unter Windows (`mov 轉 mp4 windows`), macOS oder mobil (`แปลง ไฟล์ mov to mp4`): Lokales Remuxing dauert nur 1 Sekunde ohne Dateigrößenlimit.',
      localHeader: 'MOV-to-MP4.github.io (Lokales WASM)',
      cloudHeader: 'CloudConvert MOV to MP4 & Cloud-Tools',
      rows: [
        {
          feature: 'Upload- & Download-Wartezeit',
          localValue: '0 Sekunden (Direkter RAM-Zugriff)',
          cloudValue: 'Langsam (Upload & Download großer 4K-Videos)',
        },
        {
          feature: 'Dateigrößen- & Tageslimits',
          localValue: 'Unbegrenzt & 100% Kostenlos',
          cloudValue: 'Begrenzt auf 25 Minuten/Tag oder Paywall',
        },
        {
          feature: '1-Sekunden Verlustfreier Copy (-c copy)',
          localValue: 'Standardmäßig aktiv (100% Originalqualität)',
          cloudValue: 'Oft langsame Neukodierung in der Cloud',
        },
        {
          feature: 'Datenschutz & Offline-Nutzung',
          localValue: '100% Privat & Offline-PWA fähig',
          cloudValue: 'Videos werden auf fremde Server geladen',
        },
      ],
      keywordCalloutTitle: 'Plattformübergreifend für Windows, Mac, iOS & Android',
      keywordCalloutBody:
        'Entwickelt für Nutzer weltweit auf der Suche nach mp4 converter, mov to mp4 converter, mov converter to mp4, converter mov to mp4, mp4 converter to mov, converter mp4 to mov, mov converter, mp4 to mov converter, mp4 convert to mov, convert mov to mp4, mov 轉 mp4 windows, แปลง ไฟล์ mov to mp4 sowie einer sicheren Alternative zu cloudconvert mov to mp4.',
    },
    features: {
      sectionTitle: 'Warum Profis unseren MOV Converter & MP4 Converter nutzen',
      sectionSubtitle: 'Entwickelt für maximale Geschwindigkeit, Originaltreue und Datenschutz.',
      f1Title: 'Verlustfreier 1-Sekunden Stream-Remux (-c copy)',
      f1Desc: 'Unser mov to mp4 converter kopiert Video- und Audiopakete direkt von MOV nach MP4 ohne Neukodierung.',
      f2Title: 'Bidirektionaler MP4 to MOV Converter',
      f2Desc: 'Nutzen Sie mp4 convert to mov (converter mp4 to mov) für Final Cut Pro und QuickTime Workflows.',
      f3Title: 'Schneller & Sicherer als CloudConvert MOV to MP4',
      f3Desc: 'Im Gegensatz zu cloudconvert mov to mp4 verlassen Ihre privaten Videos niemals Ihr Gerät.',
      f4Title: 'Windows & Internationale Kompatibilität (mov 轉 mp4 windows)',
      f4Desc: 'Perfekt für mov 轉 mp4 windows und แปลง ไฟล์ mov to mp4 mit universeller H.264-Unterstützung.',
    },
    faq: {
      sectionTitle: 'Häufig gestellte Fragen (FAQ — MOV to MP4 Converter)',
      sectionSubtitle: 'Alles Wichtige rund um convert mov to mp4 und mp4 convert to mov im Browser.',
      items: [
        {
          q: 'Geht mit diesem mov to mp4 converter Videoqualität verloren?',
          a: 'Nein! Unser mov converter to mp4 (converter mov to mp4) übernimmt per -c copy den exakten Video- und Audiostream ohne Qualitätsverlust in den MP4-Container.',
        },
        {
          q: 'Warum ist dieses Tool besser als CloudConvert MOV to MP4?',
          a: 'Im Vergleich zu cloudconvert mov to mp4 läuft unser mp4 converter zu 100% lokal im Browser ohne Upload-Wartezeit und ohne 1GB-Sperre.',
        },
        {
          q: 'Kann ich auch MP4 in MOV umwandeln (mp4 to mov converter)?',
          a: 'Ja! Wählen Sie in Schritt 2 „MP4 zu MOV (Umgekehrt)“, um unseren mp4 converter to mov (converter mp4 to mov / mp4 convert to mov) zu nutzen.',
        },
        {
          q: 'Funktioniert der mov converter auf Windows & Mobilgeräten (mov 轉 mp4 windows / แปลง ไฟล์ mov to mp4)?',
          a: 'Ja, Sie können jederzeit convert mov to mp4 auf Windows-PCs (mov 轉 mp4 windows) sowie Smartphones (แปลง ไฟล์ mov to mp4) komplett offline ausführen.',
        },
      ],
    },
    footer: {
      tagline: '100% Client-Side WebAssembly Videokonverter. Schnell, Verlustfrei, Privat.',
      privacyNote: 'Kein Upload. Alle Videos werden lokal auf Ihrem Gerät verarbeitet.',
      copyright: '© 2026 MOV to MP4 Converter. Entwickelt für Geschwindigkeit & Datenschutz.',
    },
  },

  fr: {
    meta: {
      title: 'Convertisseur MOV en MP4 Gratuit — Instantané, 100% Hors-Ligne & Privé (Sans Envoi)',
      description:
        'Convertisseur MOV en MP4 (mov to mp4 converter) et MP4 en MOV (mp4 to mov converter) en 1 seconde dans votre navigateur. Plus rapide que cloudconvert mov to mp4, sans perte (-c copy) et sans envoi.',
      keywords: `${commonKeywordString}, convertir mov en mp4, convertisseur vidéo gratuit, mov vers mp4`,
      ogLocale: 'fr_FR',
    },
    nav: {
      brandTitle: 'MOV en MP4',
      brandSubtitle: 'Studio WASM Local',
      languageLabel: 'Choisir la langue',
      themeToggleLabel: 'Basculer le thème clair / sombre',
      themeLight: 'Mode Clair',
      themeDark: 'Mode Sombre',
      installPwa: 'Ajouter à l’écran d’accueil',
      installPwaInstalled: 'App Prête Hors-Ligne',
      installPwaTooltip: 'Installer le convertisseur MOV en MP4 comme application hors-ligne',
      supportDeveloper: 'Soutenir le Développeur',
    },
    pwaModal: {
      title: 'Installer le Convertisseur MOV en MP4 (App 100% Hors-Ligne)',
      subtitle: 'Ajoutez ce convertisseur à votre écran d’accueil ou bureau pour convertir sans connexion internet.',
      iosStepTitle: 'Sur iPhone / iPad (Safari iOS) :',
      iosStepDesc: '1. Appuyez sur l’icône « Partager » dans Safari → 2. Sélectionnez « Sur l’écran d’accueil ».',
      desktopStepTitle: 'Sur Ordinateur Chrome / Edge / Android :',
      desktopStepDesc: 'Cliquez sur l’icône « Installer l’application » dans la barre d’adresse ou le menu du navigateur.',
      offlineBadge: 'Fonctionne 100% Hors-Ligne grâce au Service Worker WebAssembly',
      closeBtn: 'Compris, Fermer',
    },
    breadcrumbs: {
      home: 'Accueil',
      converter: 'Convertisseur MOV en MP4',
    },
    hero: {
      badgePrivacy: '100% Privé dans le Navigateur • Aucun Envoi Serveur',
      badgeSpeed: 'Copie Sans Perte en 1 Seconde',
      title: 'Convertisseur MOV en MP4',
      subtitle:
        'Convertissez vos vidéos .MOV iPhone, Mac et QuickTime en .MP4 universel instantanément dans votre navigateur.',
      step1Indicator: '1. Choisir Vidéo',
      step2Indicator: '2. Options',
      step3Indicator: '3. Conversion',
      step4Indicator: '4. Aperçu et Téléchargement',
      dropzoneTitle: 'Glissez-déposez vos fichiers vidéo .MOV ou .MP4 ici',
      dropzoneSubtitle: 'Ou cliquez n’importe où dans ce cadre pour parcourir votre appareil (Traitement par lot)',
      dropzoneFormats: 'Prend en charge .MOV, .MP4, .M4V, .WEBM, .MKV • Sans Cloud • Taille Illimitée',
      selectFilesBtn: 'Sélectionner des Vidéos',
      sampleBtn: 'Vidéo MOV d’Exemple Instantanée',
      sampleGenerating: 'Création du MOV d’exemple...',
      addMoreFilesBtn: '+ Ajouter d’autres vidéos',
      clearQueueBtn: 'Tout effacer',
      filesSelectedLabel: 'File d’attente des vidéos',
      directionLabel: 'Sens de Conversion',
      directionMovToMp4: 'MOV en MP4 (Par défaut)',
      directionMovToMp4Desc: 'Conteneur MP4 universel pour Windows, Android, Web et Réseaux Sociaux',
      directionMp4ToMov: 'MP4 en MOV (Inverse)',
      directionMp4ToMovDesc: 'Conteneur Apple QuickTime MOV pour Final Cut Pro, iMovie et macOS',
      modeLabel: 'Mode de Vitesse et Qualité',
      modeLossless: 'Copie Instantanée Sans Perte (Remux 1s - Zéro Perte de Qualité)',
      modeLosslessBadge: '⚡ REMUX 1 SEC',
      modeLosslessDesc:
        'Copie directement les flux vidéo/audio (-c copy) sans ré-encodage. Qualité 100% intacte et instantané.',
      modeCompat: 'Compatibilité Maximale (Compression H.264 + AAC)',
      modeCompatBadge: '🛡️ H.264 UNIVERSEL',
      modeCompatDesc:
        'Ré-encode la vidéo en H.264 MP4 universel. Idéal pour les vidéos iPhone HEVC/H.265 ou le redimensionnement.',
      resolutionLabel: 'Résolution de Sortie',
      resOriginal: 'Originale',
      res1080p: '1080p Full HD',
      res720p: '720p HD',
      muteAudioLabel: 'Couper le Son',
      muteAudioDesc: 'Supprimer la piste audio (-an) pour une vidéo muette',
      convertNowBtn: 'Convertir la Vidéo Maintenant',
      convertingTitle: 'Traitement local de la vidéo dans le navigateur...',
      convertingSubtitle: 'Votre vidéo ne quitte jamais votre appareil. Propulsé par WebAssembly FFmpeg.',
      loadingEngineStatus: 'Initialisation du moteur vidéo WebAssembly...',
      remuxingStatus: 'Remuxage instantané sans perte en cours (-c copy)...',
      encodingStatus: 'Transcodage des images vidéo en H.264 + AAC...',
      fallbackEncodingStatus: 'Passage automatique au mode de compatibilité H.264...',
      elapsedTimeLabel: 'Temps Écoulé',
      currentFileLabel: 'Fichier en cours',
      cancelBtn: 'Annuler',
      resultTitle: 'Conversion Terminée !',
      resultSubtitle: 'Prévisualisez votre vidéo ci-dessous ou téléchargez-la immédiatement.',
      originalSizeLabel: 'Original',
      convertedSizeLabel: 'Converti',
      savedBadge: 'Taille Optimisée',
      losslessBadge: '100% Sans Perte Bit-à-Bit',
      durationLabel: 'Traité en',
      downloadMp4Btn: 'Télécharger MP4',
      downloadMovBtn: 'Télécharger MOV',
      downloadAllBtn: 'Tout Télécharger',
      convertAnotherBtn: 'Convertir une Autre Vidéo',
      previewVideoLabel: 'Aperçu Vidéo HTML5 Instantané',
      workspaceInstallBtn: 'Installer l’App Hors-Ligne (Écran d’accueil)',
    },
    toasts: {
      offlineReady: 'Mode hors-ligne prêt ! Convertissez vos vidéos MOV et MP4 sans connexion internet.',
      pwaInstallPrompt: 'Appuyez sur Partager → Sur l’écran d’accueil pour installer l’application.',
      sampleLoaded: 'Vidéo d’exemple Apple QuickTime .MOV générée et chargée !',
      conversionComplete: 'Vidéo convertie localement sans aucun transfert de données !',
      fallbackTriggered: 'Transcodage H.264 activé automatiquement pour une compatibilité optimale.',
      unsupportedFile: 'Veuillez sélectionner un fichier vidéo valide (.mov, .mp4, .m4v, .webm, .mkv).',
    },
    howTo: {
      sectionTitle: 'Guide Visuel en 3 Étapes : Convertir MOV en MP4 et MP4 en MOV',
      sectionSubtitle:
        'Utilisez notre mov to mp4 converter et mp4 to mov converter sans téléversement dans le cloud.',
      step1Title: '1. Déposez votre vidéo MOV ou MP4',
      step1Desc:
        'Glissez vos fichiers dans notre mov converter ou testez immédiatement avec le bouton Vidéo MOV d’Exemple.',
      step2Title: '2. Choisissez le Sens et le Mode 1s Sans Perte',
      step2Desc:
        'Sélectionnez converter mov to mp4 ou mp4 converter to mov avec Copie Sans Perte (-c copy) ou H.264.',
      step3Title: '3. Aperçu HTML5 et Téléchargement',
      step3Desc:
        'Visionnez la vidéo dans le lecteur intégré et enregistrez-la grâce à notre mp4 converter local.',
    },
    cloudComparison: {
      badge: 'COMPARATIF TECHNIQUE',
      sectionTitle: 'Pourquoi la Conversion Locale Surpasse CloudConvert MOV to MP4 (Zéro Limite d’Envoi)',
      sectionSubtitle:
        'Lorsque vous cherchez cloudconvert mov to mp4, mov 轉 mp4 windows ou แปลง ไฟล์ mov to mp4, les outils cloud imposent de longs téléversements. Notre moteur WebAssembly s’exécute à 100% sur votre appareil.',
      cardTitle: 'Moteur WebAssembly 100% Local vs. CloudConvert MOV to MP4',
      cardDesc:
        'Que vous ayez besoin d’un mov converter to mp4 sur Windows (`mov 轉 mp4 windows`), Mac ou mobile (`แปลง ไฟล์ mov to mp4`), le remuxage local se fait en 1 seconde sans quota.',
      localHeader: 'MOV-to-MP4.github.io (WASM Local)',
      cloudHeader: 'CloudConvert MOV to MP4 & Cloud',
      rows: [
        {
          feature: 'Temps d’envoi et de téléchargement',
          localValue: '0 Seconde (Lecture directe en RAM)',
          cloudValue: 'Lent (Envoi et téléchargement de fichiers lourds)',
        },
        {
          feature: 'Limite de taille et quota quotidien',
          localValue: 'Illimité et 100% Gratuit',
          cloudValue: 'Limité à 25 conversions/jour',
        },
        {
          feature: 'Copie Sans Perte en 1s (-c copy)',
          localValue: 'Par défaut (Qualité 100% intacte)',
          cloudValue: 'Ré-encodage lent sur serveur distant',
        },
        {
          feature: 'Confidentialité & Mode Hors-Ligne',
          localValue: '100% Privé + App PWA Hors-Ligne',
          cloudValue: 'Vidéos envoyées sur des serveurs tiers',
        },
      ],
      keywordCalloutTitle: 'Compatibilité Multiplateforme : Windows, macOS, iOS et Android',
      keywordCalloutBody:
        'Conçu pour les recherches mp4 converter, mov to mp4 converter, mov converter to mp4, converter mov to mp4, mp4 converter to mov, converter mp4 to mov, mov converter, mp4 to mov converter, mp4 convert to mov, convert mov to mp4, mov 轉 mp4 windows, แปลง ไฟล์ mov to mp4 et alternative privée à cloudconvert mov to mp4.',
    },
    features: {
      sectionTitle: 'Pourquoi Choisir Notre Moteur MOV Converter & MP4 Converter',
      sectionSubtitle: 'Conçu pour la rapidité, la fidélité sans perte et la confidentialité totale.',
      f1Title: 'Remuxage Sans Perte en 1 Seconde (-c copy)',
      f1Desc: 'Notre mov to mp4 converter copie directement les flux audio et vidéo de MOV vers MP4 sans ré-encodage.',
      f2Title: 'Support Bidirectionnel MP4 to MOV Converter',
      f2Desc: 'Besoin de mp4 convert to mov ? Utilisez le mode converter mp4 to mov pour Final Cut Pro.',
      f3Title: 'Zéro Cloud (Meilleur que CloudConvert MOV to MP4)',
      f3Desc: 'Contrairement à cloudconvert mov to mp4, vos vidéos restent strictement sur votre appareil.',
      f4Title: 'Support Windows & Mobile (mov 轉 mp4 windows)',
      f4Desc: 'Prise en charge complète pour mov 轉 mp4 windows et แปลง ไฟล์ mov to mp4 en H.264 universel.',
    },
    faq: {
      sectionTitle: 'Questions Fréquentes (FAQ — MOV to MP4 Converter)',
      sectionSubtitle: 'Tout savoir pour convert mov to mp4 et mp4 convert to mov dans le navigateur.',
      items: [
        {
          q: 'Ce mov to mp4 converter réduit-il la qualité vidéo ?',
          a: 'Non ! Notre mov converter to mp4 (converter mov to mp4) utilise -c copy pour transférer les flux vidéo et audio exacts dans le conteneur MP4 sans perte.',
        },
        {
          q: 'Pourquoi cet outil est-il plus rapide que CloudConvert MOV to MP4 ?',
          a: 'Contrairement à cloudconvert mov to mp4, notre mp4 converter fonctionne à 100% dans votre navigateur sans attente d’envoi ni limite de 1 Go.',
        },
        {
          q: 'Puis-je convertir un fichier MP4 en MOV (mp4 to mov converter) ?',
          a: 'Oui ! Basculez sur « MP4 en MOV (Inverse) » à l’étape 2 pour utiliser notre mp4 converter to mov (converter mp4 to mov / mp4 convert to mov).',
        },
        {
          q: 'Fonctionne-t-il sur Windows et mobile (mov 轉 mp4 windows / แปลง ไฟล์ mov to mp4) ?',
          a: 'Oui, ce mov converter permet de convert mov to mp4 sur PC Windows (mov 轉 mp4 windows) et mobile (แปลง ไฟล์ mov to mp4) même hors-ligne.',
        },
      ],
    },
    footer: {
      tagline: 'Convertisseur Vidéo WebAssembly 100% Client-Side. Rapide, Sans Perte, Privé.',
      privacyNote: 'Zéro envoi. Tout le traitement vidéo s’effectue localement sur votre appareil.',
      copyright: '© 2026 MOV to MP4 Converter. Conçu pour la vitesse et la vie privée.',
    },
  },

  ja: {
    meta: {
      title: 'MOV to MP4 Converter 無料 — 1秒変換・100%オフライン＆プライバシー保護（アップロード不要）',
      description:
        'ブラウザで完結する無料MOV to MP4 Converterおよび双方向MP4 to MOV Converter。CloudConvert MOV to MP4より高速・安全で、アップロード制限なし・無劣化ストリームコピー（-c copy）対応。',
      keywords: `${commonKeywordString}, mov mp4 変換, iphone 動画 mp4 変換, 無料 動画変換 サイト 安全`,
      ogLocale: 'ja_JP',
    },
    nav: {
      brandTitle: 'MOV to MP4',
      brandSubtitle: 'ローカルWASMスタジオ',
      languageLabel: '言語を選択',
      themeToggleLabel: 'ライト / ダークモード切替',
      themeLight: 'ライトモード',
      themeDark: 'ダークモード',
      installPwa: 'ホーム画面に追加',
      installPwaInstalled: 'オフライン対応済',
      installPwaTooltip: 'MOV MP4 コンバーターをオフライン対応アプリとしてインストール',
      supportDeveloper: '開発者を支援する',
    },
    pwaModal: {
      title: 'MOV to MP4 コンバーターをインストール（100%オフラインアプリ）',
      subtitle: 'ホーム画面やデスクトップに追加すると、インターネットなしでも瞬時に動画変換が使えます。',
      iosStepTitle: 'iPhone / iPad（iOS Safari）の場合：',
      iosStepDesc: '1. Safari下部の「共有」アイコンをタップ → 2.「ホーム画面に追加」を選択します。',
      desktopStepTitle: 'PC Chrome / Edge / Android の場合：',
      desktopStepDesc: 'アドレスバーの「アプリをインストール」アイコン、またはブラウザメニューの「ホーム画面に追加」をクリックします。',
      offlineBadge: 'WebAssembly Service Workerにより100%オフライン動作対応',
      closeBtn: '閉じる',
    },
    breadcrumbs: {
      home: 'ホーム',
      converter: 'MOV to MP4 Converter',
    },
    hero: {
      badgePrivacy: '100%ブラウザ内処理 • サーバー送信ゼロで安全',
      badgeSpeed: '1秒・無劣化ストリームコピー',
      title: 'MOV to MP4 変換ツール',
      subtitle:
        'iPhone・Mac・QuickTimeの.MOV動画を、画質を落とさずブラウザ上で瞬時に汎用.MP4へ変換します。',
      step1Indicator: '1. 動画を選択',
      step2Indicator: '2. 変換設定',
      step3Indicator: '3. 変換処理中',
      step4Indicator: '4. プレビュー＆保存',
      dropzoneTitle: '.MOV または .MP4 動画ファイルをここにドロップ',
      dropzoneSubtitle: 'またはこの枠内をクリックして端末からファイルを選択（一括変換対応）',
      dropzoneFormats: '.MOV, .MP4, .M4V, .WEBM, .MKV 対応 • アップロード不要 • 容量無制限',
      selectFilesBtn: '動画ファイルを選択',
      sampleBtn: 'サンプルMOV動画で試す',
      sampleGenerating: 'サンプルMOVを生成中...',
      addMoreFilesBtn: '+ 動画を追加',
      clearQueueBtn: 'すべてクリア',
      filesSelectedLabel: '選択された動画リスト',
      directionLabel: '変換の方向',
      directionMovToMp4: 'MOV から MP4（標準）',
      directionMovToMp4Desc: 'Windows・Android・Web・SNSで再生できる汎用MP4形式',
      directionMp4ToMov: 'MP4 から MOV（逆変換）',
      directionMp4ToMovDesc: 'Final Cut Pro・iMovie・macOS向けのApple QuickTime MOV形式',
      modeLabel: '処理スピード＆画質モード',
      modeLossless: '超高速・無劣化コピー（1秒リマックス・画質劣化ゼロ）',
      modeLosslessBadge: '⚡ 1秒無劣化',
      modeLosslessDesc:
        '映像・音声を再エンコードせず直接コピー（-c copy）。画質100%維持のまま一瞬で完了します。',
      modeCompat: '最大互換モード（H.264 + AAC 再エンコード）',
      modeCompatBadge: '🛡️ 汎用 H.264',
      modeCompatDesc:
        '汎用性の高いH.264 MP4へ変換します。iPhoneのHEVC映像や解像度変更（1080p/720p）に最適です。',
      resolutionLabel: '出力解像度',
      resOriginal: 'オリジナル維持',
      res1080p: '1080p フルHD',
      res720p: '720p HD',
      muteAudioLabel: '音声をミュート（消音）',
      muteAudioDesc: '音声トラックを削除（-an）してサイレント動画を作成',
      convertNowBtn: '今すぐ動画を変換する',
      convertingTitle: 'ブラウザ内で動画をローカル処理中...',
      convertingSubtitle: '動画ファイルが外部サーバーへ送信されることはありません（WebAssembly FFmpeg駆動）。',
      loadingEngineStatus: 'WebAssembly動画エンジンを起動中...',
      remuxingStatus: '無劣化ストリームコピー（-c copy）を実行中...',
      encodingStatus: 'H.264 + AAC へフレーム変換中...',
      fallbackEncodingStatus: '互換性確保のためH.264エンコードへ自動切替中...',
      elapsedTimeLabel: '経過時間',
      currentFileLabel: '処理中のファイル',
      cancelBtn: 'キャンセル',
      resultTitle: '変換が完了しました！',
      resultSubtitle: '下のプレーヤーでプレビュー再生するか、そのまま端末へダウンロードできます。',
      originalSizeLabel: '変換前',
      convertedSizeLabel: '変換後',
      savedBadge: 'サイズ最適化済',
      losslessBadge: '100% 完全無劣化',
      durationLabel: '処理時間',
      downloadMp4Btn: 'MP4をダウンロード',
      downloadMovBtn: 'MOVをダウンロード',
      downloadAllBtn: 'すべてダウンロード',
      convertAnotherBtn: '別の動画を変換する',
      previewVideoLabel: 'HTML5 リアルタイム動画プレビュー',
      workspaceInstallBtn: 'オフラインアプリとして追加（ホーム画面へ）',
    },
    toasts: {
      offlineReady: 'オフライン準備完了！インターネット接続なしでもMOV・MP4変換が可能です。',
      pwaInstallPrompt: '共有メニューから「ホーム画面に追加」を選択してインストールできます。',
      sampleLoaded: 'Apple QuickTime .MOV サンプル動画を生成・読み込みました！',
      conversionComplete: '外部送信ゼロでローカル変換が完了しました！',
      fallbackTriggered: '互換性のため自動的にH.264エンコードモードで変換しました。',
      unsupportedFile: '有効な動画ファイル（.mov, .mp4, .m4v, .webm, .mkv）を選択してください。',
    },
    howTo: {
      sectionTitle: '3ステップ解説：MOVからMP4・MP4からMOVへ瞬時に変換する方法',
      sectionSubtitle: 'クラウド送信ゼロで使える高速 mov to mp4 converter ＆ mp4 to mov converter。',
      step1Title: '1. MOVまたはMP4動画をドロップ',
      step1Desc: 'iPhoneやMacの動画を mov converter ボックスにドロップするか、サンプルMOV動画ボタンで即座にテストします。',
      step2Title: '2. 変換方向と1秒無劣化モードを選択',
      step2Desc: 'converter mov to mp4 または mp4 converter to mov を選び、1秒無劣化コピー（-c copy）かH.264を選択します。',
      step3Title: '3. HTML5プレビュー＆即座に保存',
      step3Desc: '内蔵プレーヤーで映像を確認し、ローカル mp4 converter からワンクリックで保存します。',
    },
    cloudComparison: {
      badge: 'パフォーマンス比較',
      sectionTitle: 'ローカルブラウザ変換が CloudConvert MOV to MP4 より圧倒的に速い理由（容量制限ゼロ）',
      sectionSubtitle:
        'cloudconvert mov to mp4、mov 轉 mp4 windows、แปลง ไฟล์ mov to mp4 などを探している方に最適。クラウドへ何ギガもの動画をアップロードする待ち時間がゼロになります。',
      cardTitle: '100%ローカル WebAssembly エンジン vs. CloudConvert MOV to MP4',
      cardDesc:
        'Windows（`mov 轉 mp4 windows`）・Mac・スマホ（`แปลง ไฟล์ mov to mp4`）を問わず、mov converter to mp4 として1日あたりの回数制限や1GB制限なしで無制限に使えます。',
      localHeader: 'MOV-to-MP4.github.io（ローカルWASM）',
      cloudHeader: 'CloudConvert MOV to MP4 等のクラウド型',
      rows: [
        {
          feature: 'アップロード＆ダウンロード待ち時間',
          localValue: '0秒（端末のRAM内で完結）',
          cloudValue: '遅い（大容量4K動画の送受信が必要）',
        },
        {
          feature: 'ファイル容量制限・1日の回数上限',
          localValue: '完全無制限・ずっと無料',
          cloudValue: '1日25分制限やファイルサイズ課金あり',
        },
        {
          feature: '1秒無劣化ストリームコピー（-c copy）',
          localValue: '標準搭載（ビット単位で100%無劣化）',
          cloudValue: '再エンコードによる画質劣化や待機が発生',
        },
        {
          feature: 'プライバシー＆オフラインPWA動作',
          localValue: '外部送信ゼロ・オフラインでも変換可能',
          cloudValue: '外部サーバーへ動画がアップロードされる',
        },
      ],
      keywordCalloutTitle: 'Windows・Mac・iOS・Android マルチプラットフォーム完全対応',
      keywordCalloutBody:
        'mp4 converter, mov to mp4 converter, mov converter to mp4, converter mov to mp4, mp4 converter to mov, converter mp4 to mov, mov converter, mp4 to mov converter, mp4 convert to mov, convert mov to mp4, mov 轉 mp4 windows, แปลง ไฟล์ mov to mp4、そして cloudconvert mov to mp4 の安全な代替ツールをお探しの方に最適です。',
    },
    features: {
      sectionTitle: '当サイトの MOV Converter & MP4 Converter が選ばれる理由',
      sectionSubtitle: '圧倒的なスピード・無劣化品質・完全なプライバシー保護を両立。',
      f1Title: '1秒で完了する無劣化リマックス（-c copy）',
      f1Desc: '当 mov to mp4 converter は映像・音声を再圧縮せずそのままMP4コンテナへ移し替えます。',
      f2Title: '双方向 MP4 to MOV Converter 対応',
      f2Desc: 'Final Cut Pro編集用に mp4 convert to mov（converter mp4 to mov）への逆変換も1秒で完了。',
      f3Title: 'CloudConvert MOV to MP4 を超える安全性',
      f3Desc: 'cloudconvert mov to mp4 と異なり、プライベートな動画が外部サーバーに送信されることはありません。',
      f4Title: 'Windows＆グローバル対応（mov 轉 mp4 windows）',
      f4Desc: 'mov 轉 mp4 windows やモバイルでの แปลง ไฟล์ mov to mp4 でもH.264互換モードで確実に再生可能。',
    },
    faq: {
      sectionTitle: 'よくある質問（FAQ — MOV to MP4 Converter）',
      sectionSubtitle: 'ブラウザでの convert mov to mp4 および mp4 convert to mov に関する疑問にお答えします。',
      items: [
        {
          q: 'この mov to mp4 converter で変換すると画質は落ちますか？',
          a: '標準の無劣化コピーモードなら画質は一切落ちません！当 mov converter to mp4（converter mov to mp4）は -c copy により1ビットも変えずにMP4へ変換します。',
        },
        {
          q: 'CloudConvert MOV to MP4 と比べて何が優れていますか？',
          a: 'cloudconvert mov to mp4 のようなサーバーへのアップロード待ち時間や回数制限がなく、当 mp4 converter は100%ブラウザ内で即座に処理します。',
        },
        {
          q: 'MP4からMOVへの逆変換（mp4 to mov converter）は可能ですか？',
          a: 'はい！ステップ2で「MP4 から MOV（逆変換）」を選ぶだけで、mp4 converter to mov（converter mp4 to mov / mp4 convert to mov）としてQuickTime .movを作成できます。',
        },
        {
          q: 'Windows PCやスマホでも使えますか（mov 轉 mp4 windows / แปลง ไฟล์ mov to mp4）？',
          a: 'はい、Windowsでの mov 轉 mp4 windows やスマホでの แปลง ไฟล์ mov to mp4 など、あらゆるOSでオフライン動作する mov converter として convert mov to mp4 が可能です。',
        },
      ],
    },
    footer: {
      tagline: '100%クライアントサイド WebAssembly 動画コンバーター。高速・無劣化・安全。',
      privacyNote: 'アップロード一切なし。すべての動画処理はお使いの端末内で実行されます。',
      copyright: '© 2026 MOV to MP4 Converter. Built for speed & privacy.',
    },
  },

  zh: {
    meta: {
      title: 'MOV to MP4 Converter 免费版 — 1秒极速、100%离线与隐私保护（无需上传）',
      description:
        '免费浏览器本地 MOV to MP4 Converter 与双向 MP4 to MOV Converter（支持 mov 轉 mp4 windows 与 แปลง ไฟล์ mov to mp4）。采用无损流复制（-c copy），比 CloudConvert MOV to MP4 更快更安全，零上传无大小限制。',
      keywords: `${commonKeywordString}, mov转mp4, 苹果视频转mp4, 无损mov转mp4, 免费在线视频转换器`,
      ogLocale: 'zh_CN',
    },
    nav: {
      brandTitle: 'MOV 转 MP4',
      brandSubtitle: '本地 WASM 工作室',
      languageLabel: '选择语言',
      themeToggleLabel: '切换浅色 / 深色模式',
      themeLight: '浅色模式',
      themeDark: '深色模式',
      installPwa: '添加到主屏幕',
      installPwaInstalled: '离线应用已就绪',
      installPwaTooltip: '将 MOV 转 MP4 转换器安装为离线桌面/手机应用',
      supportDeveloper: '支持开发者',
    },
    pwaModal: {
      title: '安装 MOV 转 MP4 转换器（100% 离线应用）',
      subtitle: '将此转换器添加到您的主屏幕或电脑桌面，随时随地无网也能秒速转换视频。',
      iosStepTitle: '在 iPhone / iPad (iOS Safari) 上：',
      iosStepDesc: '1. 点击 Safari 底部的“分享”图标 → 2. 选择“添加到主屏幕”并点击添加。',
      desktopStepTitle: '在电脑 Chrome / Edge / Android 上：',
      desktopStepDesc: '点击浏览器地址栏右侧的“安装应用”图标，或在浏览器菜单中选择“添加到主屏幕”。',
      offlineBadge: '由 WebAssembly Service Worker 驱动，支持 100% 断网离线运行',
      closeBtn: '知道了，关闭',
    },
    breadcrumbs: {
      home: '首页',
      converter: 'MOV 转 MP4 转换器',
    },
    hero: {
      badgePrivacy: '100% 浏览器本地运行 • 零服务器上传',
      badgeSpeed: '1秒无损流复制重封装',
      title: 'MOV 转 MP4 转换器',
      subtitle:
        '在浏览器中即刻将 iPhone、Mac 和 QuickTime .MOV 视频无损转换为通用 .MP4 格式。',
      step1Indicator: '1. 选择视频',
      step2Indicator: '2. 转换设置',
      step3Indicator: '3. 正在转换',
      step4Indicator: '4. 预览与下载',
      dropzoneTitle: '将您的 .MOV 或 .MP4 视频文件拖放到此处',
      dropzoneSubtitle: '或者点击此方框内任意位置从设备中选择文件（支持批量转换）',
      dropzoneFormats: '支持 .MOV, .MP4, .M4V, .WEBM, .MKV • 无需上传云端 • 不限文件大小',
      selectFilesBtn: '选择视频文件',
      sampleBtn: '即时生成示例 MOV 视频',
      sampleGenerating: '正在生成示例 MOV...',
      addMoreFilesBtn: '+ 添加更多视频',
      clearQueueBtn: '清空列表',
      filesSelectedLabel: '已选视频队列',
      directionLabel: '转换方向',
      directionMovToMp4: 'MOV 转 MP4（默认）',
      directionMovToMp4Desc: '适用于 Windows、Android、网页及社交媒体的通用 MP4 容器',
      directionMp4ToMov: 'MP4 转 MOV（反向）',
      directionMp4ToMovDesc: '适用于 Final Cut Pro、iMovie 及 macOS 的 Apple QuickTime MOV 容器',
      modeLabel: '处理速度与画质模式',
      modeLossless: '极速无损复制（1秒换壳重封装 - 零画质损失）',
      modeLosslessBadge: '⚡ 1秒无损',
      modeLosslessDesc:
        '直接复制音视频数据流（-c copy），无需重新编码。100%保留原始画质并瞬间完成。',
      modeCompat: '最高兼容性（H.264 + AAC 压缩编码）',
      modeCompatBadge: '🛡️ 通用 H.264',
      modeCompatDesc:
        '将视频重新编码为通用 H.264 MP4。适合转换 iPhone HEVC/H.265 视频或调整分辨率。',
      resolutionLabel: '输出分辨率',
      resOriginal: '原始分辨率',
      res1080p: '1080p 全高清',
      res720p: '720p 高清',
      muteAudioLabel: '静音视频（移除音轨）',
      muteAudioDesc: '剥离所有音频流（-an），生成纯画面静音视频',
      convertNowBtn: '立即开始转换',
      convertingTitle: '正在浏览器本地处理视频...',
      convertingSubtitle: '您的视频绝不会离开您的设备。由 WebAssembly FFmpeg 驱动。',
      loadingEngineStatus: '正在初始化 WebAssembly 视频引擎...',
      remuxingStatus: '正在执行极速无损流复制（-c copy）...',
      encodingStatus: '正在将视频帧转码为 H.264 + AAC...',
      fallbackEncodingStatus: '正在自动切换至 H.264 兼容编码模式...',
      elapsedTimeLabel: '已用时间',
      currentFileLabel: '当前处理文件',
      cancelBtn: '取消转换',
      resultTitle: '视频转换完成！',
      resultSubtitle: '在下方直接预览转换后的视频，或立即下载保存到您的设备。',
      originalSizeLabel: '原始大小',
      convertedSizeLabel: '转换后',
      savedBadge: '体积已优化',
      losslessBadge: '100% 比特级无损',
      durationLabel: '处理耗时',
      downloadMp4Btn: '下载 MP4 视频',
      downloadMovBtn: '下载 MOV 视频',
      downloadAllBtn: '下载全部视频',
      convertAnotherBtn: '转换另一个视频',
      previewVideoLabel: 'HTML5 即时视频预览',
      workspaceInstallBtn: '安装离线应用（添加到主屏幕）',
    },
    toasts: {
      offlineReady: '离线模式已就绪！即使断开网络也能正常转换 MOV 和 MP4 视频。',
      pwaInstallPrompt: '请点击浏览器“分享”或菜单 → 选择“添加到主屏幕”安装离线应用。',
      sampleLoaded: 'Apple QuickTime .MOV 示例视频已生成并加载！',
      conversionComplete: '视频已在本地完成转换，零数据上传！',
      fallbackTriggered: '检测到特殊编码，已自动使用 H.264 兼容模式完成转换。',
      unsupportedFile: '请选择有效的视频文件（.mov, .mp4, .m4v, .webm, .mkv）。',
    },
    howTo: {
      sectionTitle: '3步图文指南：如何快速将 MOV 转 MP4 及 MP4 转 MOV',
      sectionSubtitle: '无需上传云端排队，使用本地 mov to mp4 converter 与 mp4 to mov converter 即刻搞定。',
      step1Title: '1. 拖入 MOV 或 MP4 视频文件',
      step1Desc: '将您的视频文件拖入 mov converter 工作区，或点击“即时生成示例 MOV 视频”立即体验。',
      step2Title: '2. 选择转换方向与1秒无损模式',
      step2Desc: '可选择 converter mov to mp4 或反向 mp4 converter to mov，并开启 1 秒无损复制（-c copy）或 H.264 兼容模式。',
      step3Title: '3. 即时 HTML5 预览与保存',
      step3Desc: '在内置播放器中确认画面与声音，通过我们的本地 mp4 converter 一键下载保存。',
    },
    cloudComparison: {
      badge: '性能与隐私对比',
      sectionTitle: '为什么浏览器本地转换远胜 CloudConvert MOV to MP4（零上传限制）',
      sectionSubtitle:
        '当您搜索 cloudconvert mov to mp4、mov 轉 mp4 windows 或 แปลง ไฟล์ mov to mp4 时，传统云端转换器需要漫长的上传与排队。我们的 WebAssembly 引擎 100% 在您设备本地运行。',
      cardTitle: '100% 本地 WebAssembly 引擎 vs. CloudConvert MOV to MP4 云端工具',
      cardDesc:
        '无论您需要 mov 轉 mp4 windows 桌面端处理，还是手机端 แปลง ไฟล์ mov to mp4，作为专业的 mov converter to mp4，本地流复制仅需 1 秒且无任何文件体积或每日额度限制。',
      localHeader: 'MOV-to-MP4.github.io（本地 WASM）',
      cloudHeader: 'CloudConvert MOV to MP4 等云端工具',
      rows: [
        {
          feature: '上传与下载等待时间',
          localValue: '0 秒（直接在本地内存中读取）',
          cloudValue: '缓慢（需上传并重新下载数 GB 视频）',
        },
        {
          feature: '文件大小与每日次数限制',
          localValue: '无限制且 100% 免费（无 1GB 限制）',
          cloudValue: '限制每日 25 分钟或大文件需付费',
        },
        {
          feature: '1秒无损流复制（-c copy）',
          localValue: '默认开启（100% 比特级原画质）',
          cloudValue: '通常重新编码导致画质下降且耗时',
        },
        {
          feature: '隐私安全与离线 PWA 支持',
          localValue: '100% 私密本地运行，断网可用',
          cloudValue: '私人视频需上传至第三方远程服务器',
        },
      ],
      keywordCalloutTitle: '全平台无缝支持：Windows、macOS、iOS 与 Android',
      keywordCalloutBody:
        '专为全球寻找 mp4 converter, mov to mp4 converter, mov converter to mp4, converter mov to mp4, mp4 converter to mov, converter mp4 to mov, mov converter, mp4 to mov converter, mp4 convert to mov, convert mov to mp4, mov 轉 mp4 windows, แปลง ไฟล์ mov to mp4 以及 cloudconvert mov to mp4 私密替代方案的用户打造。',
    },
    features: {
      sectionTitle: '为什么专业人士选择我们的 MOV Converter 与 MP4 Converter',
      sectionSubtitle: '专为极致速度、无损画质与绝对隐私打造。',
      f1Title: '1秒无损流复制重封装（-c copy）',
      f1Desc: '我们的 mov to mp4 converter 直接复制音视频数据包，免去漫长的重编码。',
      f2Title: '支持双向 MP4 to MOV Converter 互转',
      f2Desc: '需要将 mp4 convert to mov？切换至 converter mp4 to mov 模式即可生成 Final Cut Pro 专用 MOV。',
      f3Title: '零云端上传（全面超越 CloudConvert MOV to MP4）',
      f3Desc: '不同于 cloudconvert mov to mp4，您的私人视频绝不上传至任何远程服务器。',
      f4Title: '完美支持 Windows 与多语言工作流（mov 轉 mp4 windows）',
      f4Desc: '全面解决 mov 轉 mp4 windows 播放问题及移动端 แปลง ไฟล์ mov to mp4 需求。',
    },
    faq: {
      sectionTitle: '常见问题解答（FAQ — MOV to MP4 Converter）',
      sectionSubtitle: '关于浏览器本地 convert mov to mp4 与 mp4 convert to mov 的常见疑问。',
      items: [
        {
          q: '使用这款 mov to mp4 converter 会降低视频画质吗？',
          a: '使用默认的“极速无损复制”模式完全不会降低画质！我们的 mov converter to mp4（converter mov to mp4）采用 FFmpeg 流复制（-c copy）技术，原封不动地将音视频流装入 MP4 容器。',
        },
        {
          q: '为什么本地转换比 CloudConvert MOV to MP4 更快更安全？',
          a: '使用 cloudconvert mov to mp4 需要耗费大量时间上传大体积视频并受限于每日免费配额。我们的本地 mp4 converter 100% 在浏览器内存中运行，1秒完成且不限大小。',
        },
        {
          q: '可以把 MP4 反向转换成 MOV 吗（mp4 to mov converter）？',
          a: '可以！只需在第 2 步选择“MP4 转 MOV（反向）”，即可作为 mp4 converter to mov（converter mp4 to mov / mp4 convert to mov）生成 Apple QuickTime .mov 文件。',
        },
        {
          q: '如何在 Windows 电脑或手机上使用（mov 轉 mp4 windows / แปลง ไฟล์ mov to mp4）？',
          a: '对于搜索 mov 轉 mp4 windows 或 แปลง ไฟล์ mov to mp4 的用户，直接拖入 iPhone .mov 视频即可一键 convert mov to mp4；若遇到 HEVC 编码，开启 H.264 最高兼容模式即可在所有 Windows 播放器中流畅播放。',
        },
      ],
    },
    footer: {
      tagline: '100% 浏览器本地 WebAssembly 视频转换器。极速、无损、私密。',
      privacyNote: '零上传。所有视频处理均在您的设备本地完成。',
      copyright: '© 2026 MOV to MP4 Converter. 专为速度与隐私而生。',
    },
  },

  ru: {
    meta: {
      title: 'MOV to MP4 Converter Бесплатно — Мгновенно, 100% Офлайн и Приватно (Без Загрузки)',
      description:
        'Бесплатный MOV to MP4 Converter и двусторонний MP4 to MOV Converter за 1 секунду в браузере. Быстрее и безопаснее CloudConvert MOV to MP4: копирование потока без потерь (-c copy) и без лимитов.',
      keywords: `${commonKeywordString}, mov в mp4, конвертировать mov в mp4, бесплатный видео конвертер`,
      ogLocale: 'ru_RU',
    },
    nav: {
      brandTitle: 'MOV в MP4',
      brandSubtitle: 'Локальная WASM Студия',
      languageLabel: 'Выбрать язык',
      themeToggleLabel: 'Переключить светлую / тёмную тему',
      themeLight: 'Светлая тема',
      themeDark: 'Тёмная тема',
      installPwa: 'На главный экран',
      installPwaInstalled: 'Офлайн-режим готов',
      installPwaTooltip: 'Установить конвертер MOV в MP4 как офлайн-приложение',
      supportDeveloper: 'Поддержать Автора',
    },
    pwaModal: {
      title: 'Установить Конвертер MOV в MP4 (100% Офлайн-Приложение)',
      subtitle: 'Добавьте конвертер на главный экран или рабочий стол для мгновенной работы без интернета.',
      iosStepTitle: 'На iPhone / iPad (iOS Safari):',
      iosStepDesc: '1. Нажмите кнопку «Поделиться» внизу Safari → 2. Выберите «На экран „Домой“».',
      desktopStepTitle: 'На ПК Chrome / Edge / Android:',
      desktopStepDesc: 'Нажмите значок «Установить приложение» в адресной строке или в меню браузера.',
      offlineBadge: 'Работает на 100% без интернета благодаря WebAssembly Service Worker',
      closeBtn: 'Понятно, Закрыть',
    },
    breadcrumbs: {
      home: 'Главная',
      converter: 'Конвертер MOV в MP4',
    },
    hero: {
      badgePrivacy: '100% Локально в Браузере • Без Загрузки на Сервер',
      badgeSpeed: 'Копирование Потока за 1 Секунду',
      title: 'Конвертер MOV в MP4',
      subtitle:
        'Мгновенно конвертируйте видео .MOV с iPhone, Mac и QuickTime в универсальный формат .MP4 прямо в браузере.',
      step1Indicator: '1. Выбор видео',
      step2Indicator: '2. Настройки',
      step3Indicator: '3. Конвертация',
      step4Indicator: '4. Просмотр и Скачивание',
      dropzoneTitle: 'Перетащите видеофайлы .MOV или .MP4 сюда',
      dropzoneSubtitle: 'Или нажмите в любом месте этого блока для выбора с устройства (Пакетный режим)',
      dropzoneFormats: 'Поддержка .MOV, .MP4, .M4V, .WEBM, .MKV • Без Облака • Без Лимитов',
      selectFilesBtn: 'Выбрать Видеофайлы',
      sampleBtn: 'Мгновенный Пример MOV Видео',
      sampleGenerating: 'Создание примера MOV...',
      addMoreFilesBtn: '+ Добавить видео',
      clearQueueBtn: 'Очистить всё',
      filesSelectedLabel: 'Очередь выбранных видео',
      directionLabel: 'Направление Конвертации',
      directionMovToMp4: 'MOV в MP4 (По умолчанию)',
      directionMovToMp4Desc: 'Универсальный контейнер MP4 для Windows, Android, Web и соцсетей',
      directionMp4ToMov: 'MP4 в MOV (Обратно)',
      directionMp4ToMovDesc: 'Контейнер Apple QuickTime MOV для Final Cut Pro, iMovie и macOS',
      modeLabel: 'Режим Скорости и Качества',
      modeLossless: 'Мгновенная Копия Без Потерь (Ремукс за 1 сек — Без потери качества)',
      modeLosslessBadge: '⚡ РЕМУКС 1 СЕК',
      modeLosslessDesc:
        'Копирует видео и аудиопотоки напрямую (-c copy) без перекодирования. 100% исходное качество.',
      modeCompat: 'Максимальная Совместимость (Сжатие H.264 + AAC)',
      modeCompatBadge: '🛡️ УНИВЕРСАЛЬНЫЙ H.264',
      modeCompatDesc:
        'Перекодирует видео в универсальный H.264 MP4. Идеально для клипов HEVC/H.265 с iPhone или смены разрешения.',
      resolutionLabel: 'Выходное Разрешение',
      resOriginal: 'Оригинал',
      res1080p: '1080p Full HD',
      res720p: '720p HD',
      muteAudioLabel: 'Отключить Звук',
      muteAudioDesc: 'Удалить аудиодорожку (-an) для создания видео без звука',
      convertNowBtn: 'Конвертировать Видео Сейчас',
      convertingTitle: 'Локальная обработка видео в браузере...',
      convertingSubtitle: 'Ваше видео не покидает ваше устройство. Работает на WebAssembly FFmpeg.',
      loadingEngineStatus: 'Инициализация видеодвижка WebAssembly...',
      remuxingStatus: 'Выполняется мгновенный ремукс без потерь (-c copy)...',
      encodingStatus: 'Перекодирование видеокадров в H.264 + AAC...',
      fallbackEncodingStatus: 'Автоматический переход в режим совместимости H.264...',
      elapsedTimeLabel: 'Прошло времени',
      currentFileLabel: 'Обработка файла',
      cancelBtn: 'Отменить',
      resultTitle: 'Конвертация Завершена!',
      resultSubtitle: 'Посмотрите готовое видео в плеере ниже или сразу скачайте его на устройство.',
      originalSizeLabel: 'Исходный',
      convertedSizeLabel: 'Готовый',
      savedBadge: 'Размер Оптимизирован',
      losslessBadge: '100% Без Потерь Бит-в-Бит',
      durationLabel: 'Обработано за',
      downloadMp4Btn: 'Скачать MP4',
      downloadMovBtn: 'Скачать MOV',
      downloadAllBtn: 'Скачать Все Видео',
      convertAnotherBtn: 'Конвертировать Другое Видео',
      previewVideoLabel: 'Мгновенный Предпросмотр HTML5',
      workspaceInstallBtn: 'Установить Офлайн-Приложение (На главный экран)',
    },
    toasts: {
      offlineReady: 'Офлайн-режим готов! Конвертируйте видео MOV и MP4 даже без интернета.',
      pwaInstallPrompt: 'Нажмите Поделиться → На экран «Домой» для установки офлайн-приложения.',
      sampleLoaded: 'Пример видео Apple QuickTime .MOV создан и загружен!',
      conversionComplete: 'Видео сконвертировано локально без отправки данных в сеть!',
      fallbackTriggered: 'Автоматически применён режим H.264 для полной совместимости.',
      unsupportedFile: 'Пожалуйста, выберите корректный видеофайл (.mov, .mp4, .m4v, .webm, .mkv).',
    },
    howTo: {
      sectionTitle: 'Визуальное Руководство в 3 Шага: Конвертация MOV в MP4 и MP4 в MOV',
      sectionSubtitle:
        'Используйте быстрый mov to mp4 converter и mp4 to mov converter без загрузки файлов в облако.',
      step1Title: '1. Перетащите видео MOV или MP4',
      step1Desc:
        'Добавьте файлы в рабочую область mov converter или протестируйте работу кнопкой Мгновенный Пример MOV.',
      step2Title: '2. Выберите направление и режим 1 сек без потерь',
      step2Desc:
        'Укажите converter mov to mp4 или mp4 converter to mov в режиме копирования потока (-c copy) либо H.264.',
      step3Title: '3. Мгновенный предпросмотр HTML5 и скачивание',
      step3Desc:
        'Проверьте готовое видео во встроенном плеере и сохраните файл через наш локальный mp4 converter.',
    },
    cloudComparison: {
      badge: 'СРАВНЕНИЕ С ОБЛАКОМ',
      sectionTitle: 'Почему Локальная Конвертация в Браузере Лучше CloudConvert MOV to MP4 (Без Лимитов)',
      sectionSubtitle:
        'При поиске cloudconvert mov to mp4, mov 轉 mp4 windows или แปลง ไฟล์ mov to mp4 облачные сервисы заставляют загружать гигабайты на сервер. Наш движок WebAssembly работает на 100% локально.',
      cardTitle: '100% Локальный WebAssembly Движок против CloudConvert MOV to MP4',
      cardDesc:
        'Нужен ли вам mov converter to mp4 на Windows (`mov 轉 mp4 windows`), macOS или телефоне (`แปลง ไฟล์ mov to mp4`), локальный ремуксинг занимает 1 секунду без дневных квот.',
      localHeader: 'MOV-to-MP4.github.io (Локальный WASM)',
      cloudHeader: 'CloudConvert MOV to MP4 и Облако',
      rows: [
        {
          feature: 'Время загрузки на сервер и скачивания',
          localValue: '0 Секунд (Обработка прямо в ОЗУ)',
          cloudValue: 'Долго (Загрузка и скачивание тяжелых файлов)',
        },
        {
          feature: 'Лимиты размера файла и дневные квоты',
          localValue: 'Безлимитно и 100% Бесплатно',
          cloudValue: 'Ограничение 25 минут в день или платный тариф',
        },
        {
          feature: 'Копия без потерь за 1 сек (-c copy)',
          localValue: 'По умолчанию (100% исходное качество)',
          cloudValue: 'Долгое перекодирование на сервере',
        },
        {
          feature: 'Приватность и офлайн-режим PWA',
          localValue: '100% Приватно + Работает без интернета',
          cloudValue: 'Файлы передаются на сторонние серверы',
        },
      ],
      keywordCalloutTitle: 'Поддержка Всех Платформ: Windows, macOS, iOS и Android',
      keywordCalloutBody:
        'Создано для пользователей, ищущих mp4 converter, mov to mp4 converter, mov converter to mp4, converter mov to mp4, mp4 converter to mov, converter mp4 to mov, mov converter, mp4 to mov converter, mp4 convert to mov, convert mov to mp4, mov 轉 mp4 windows, แปลง ไฟล์ mov to mp4 и безопасную альтернативу cloudconvert mov to mp4.',
    },
    features: {
      sectionTitle: 'Почему Профессионалы Выбирают Наш MOV Converter и MP4 Converter',
      sectionSubtitle: 'Создан для максимальной скорости, сохранения качества и полной приватности.',
      f1Title: 'Ремуксинг Без Потерь за 1 Секунду (-c copy)',
      f1Desc: 'Наш mov to mp4 converter копирует видео- и аудиопакеты напрямую без перекодирования.',
      f2Title: 'Двусторонний MP4 to MOV Converter',
      f2Desc: 'Нужно выполнить mp4 convert to mov? Используйте режим converter mp4 to mov для Final Cut Pro.',
      f3Title: 'Без Облака (Быстрее CloudConvert MOV to MP4)',
      f3Desc: 'В отличие от cloudconvert mov to mp4, ваши видео никогда не покидают ваше устройство.',
      f4Title: 'Поддержка Windows и Мобильных Устройств (mov 轉 mp4 windows)',
      f4Desc: 'Идеально подходит для запросов mov 轉 mp4 windows и แปลง ไฟล์ mov to mp4 благодаря кодеку H.264.',
    },
    faq: {
      sectionTitle: 'Часто Задаваемые Вопросы (FAQ — MOV to MP4 Converter)',
      sectionSubtitle: 'Всё, что нужно знать о convert mov to mp4 и mp4 convert to mov в браузере.',
      items: [
        {
          q: 'Ухудшается ли качество видео при использовании этого mov to mp4 converter?',
          a: 'Нет! Наш mov converter to mp4 (converter mov to mp4) использует технологию -c copy и переносит поток бит-в-бит в контейнер MP4 без перекодирования.',
        },
        {
          q: 'Чем этот конвертер лучше CloudConvert MOV to MP4?',
          a: 'В отличие от cloudconvert mov to mp4, наш mp4 converter работает на 100% локально в браузере без ожидания загрузки и без лимита в 1 ГБ.',
        },
        {
          q: 'Можно ли конвертировать MP4 обратно в MOV (mp4 to mov converter)?',
          a: 'Да! На шаге 2 переключите направление на «MP4 в MOV (Обратно)», чтобы использовать mp4 converter to mov (converter mp4 to mov / mp4 convert to mov).',
        },
        {
          q: 'Работает ли mov converter на Windows и смартфонах (mov 轉 mp4 windows / แปลง ไฟล์ mov to mp4)?',
          a: 'Да, вы можете мгновенно выполнить convert mov to mp4 на ПК с Windows (mov 轉 mp4 windows) и на мобильных устройствах (แปลง ไฟล์ mov to mp4) даже без подключения к интернету.',
        },
      ],
    },
    footer: {
      tagline: '100% Клиентский WebAssembly Видеоконвертер. Быстро, Без Потерь, Приватно.',
      privacyNote: 'Без загрузок на сервер. Вся обработка видео происходит локально на вашем устройстве.',
      copyright: '© 2026 MOV to MP4 Converter. Создано для скорости и приватности.',
    },
  },
};

export function getTranslations(lang: string | undefined): TranslationSchema {
  if (lang && lang in ui) {
    return ui[lang as Locale];
  }
  return ui[defaultLocale];
}

export function getLocalePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}
