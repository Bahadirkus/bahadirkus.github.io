// projects.js
// Bu dosya index.html tarafından okunur.
// Profesyonel portfolyo için optimize edilmiş içerikler.

window.projects = [
  /* ---------------------------------------------------- */
  /* PROSTHETIC WORLDS (MEDİKAL - KURUMSAL) */
  /* ---------------------------------------------------- */
  {
    id: "prosthetic-worlds-vr",
    name: "Prosthetic Worlds – VR Surgical Training",
    role: "Lead Simulation Developer", // Kurumsal Unvan
    tagline: "VR/XR • Haptics • Medical Simulation • Hardware Integration",
    date: "2022-11",
    types: ["software", "design", "hardware"], 
    shortDesc:
      "A scientifically validated VR simulation for Total Knee Arthroplasty (TKA), integrating custom haptic feedback hardware to train surgeons.",
    longDesc:
      "Prosthetic Worlds is a high-fidelity VR surgical training platform focused on Total Knee Arthroplasty (TKA). As the Lead Developer, I engineered the interaction systems that bridge the gap between virtual visuals and physical sensations using custom haptic peripherals. The system offers a structured, measurable training workflow. In a controlled study, doctors trained with this system showed statistically significant improvements in surgical accuracy compared to traditional methods.",
    coverImage: "images/Pw_2.jpg", 
    gallery: [
      { type: "image", src: "images/Pw_1.jpg", alt: "Surgical VR Scene" },
      { type: "image", src: "images/Pw_3.jpg", alt: "Haptic Device Integration" },
      { type: "youtube", src: "https://www.youtube.com/watch?v=sWOdGYnegjY", alt: "Project Demo" }
    ],
    links: [
      { label: "Scientific Article (NCBI)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11596432/pdf/medi-103-e40615.pdf" },
      { label: "Instagram Page", url: "https://www.instagram.com/prostheticworlds" }
    ]
  },

  /* ---------------------------------------------------- */
  /* FIRE EVACUATION (DİJİTAL İKİZ - KURUMSAL) */
  /* ---------------------------------------------------- */
  {
    id: "fire-evacuation-sim",
    name: "Fire Evacuation & Safety Sim",
    role: "Simulation Developer", // Kurumsal Unvan
    tagline: "Digital Twin • Lidar Scanning • AR Guidance • Serious Games",
    date: "2022-10",
    types: ["software", "design"],
    shortDesc:
      "A location-based safety training application where the real-world facility was scanned via Lidar to create an exact Digital Twin.",
    longDesc:
      "Designed for occupational health and safety training, this project utilizes Photogrammetry and Lidar scanning to recreate a real-world facility 1:1 in Unity. The simulation features a dynamic navigation system (similar to AR wayfinding) that guides users to safe zones during procedurally generated emergency scenarios, training them on reaction times and hazard identification.",
    coverImage: "images/fireIcon.jpg",
    gallery: [
      { type: "youtube", src: "https://youtu.be/pptgV_zM5ts", alt: "Fire Evacuation Demo" }
    ],
    links: []
  },

  /* ---------------------------------------------------- */
  /* REDLINE ENGINE SOUNDS (FREELANCE) */
  /* ---------------------------------------------------- */
  {
    id: "redline-engine-sounds",
    name: "Redline Engine Sounds",
    role: "Freelance Developer", // GÜNCELLENDİ: Okka Games
    tagline: "Procedural Audio • FMOD • Physics Engine • Mobile Opt.",
    date: "2021-10",
    types: ["software"],
    shortDesc:
      "A sophisticated audio simulation app mimicking supercar engine physics, throttle response, and gear transmission logic.",
    longDesc:
      "Redline Engine Sounds goes beyond simple playback; it simulates the mechanical behavior of engines. I implemented a physics-based audio system (using granular synthesis concepts) where RPM, torque, and load dynamically affect the sound output. The project required extensive optimization to ensure low-latency audio processing on a wide range of Android devices.",
    coverImage: "images/redlineengine_1.jpeg",
    gallery: [
      { type: "youtube", src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs", alt: "App Gameplay" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.Okkagames.RedlineEngineSounds&hl=en" },
      { label: "Watch Demo", url: "https://www.youtube.com/watch?v=Tp5mlPiPLVs" }
    ]
  },

  /* ---------------------------------------------------- */
  /* REDLINE MOTORCYCLE SOUNDS (FREELANCE) */
  /* ---------------------------------------------------- */
  {
    id: "redline-moto-sounds",
    name: "Redline Motorcycle Sounds",
    role: "Freelance Developer", // GÜNCELLENDİ: Okka Games
    tagline: "Audio Simulation • DSP • Interactive Systems",
    date: "2021-10",
    types: ["software"],
    shortDesc:
      "Specialized acoustic simulation for high-performance motorcycles with rapid throttle response logic.",
    longDesc:
      "A standalone expansion of the Redline series focused on the distinct acoustic properties of motorcycle engines. The challenge was to replicate the rapid RPM acceleration and deceleration characteristic of bikes. I developed a responsive throttle control algorithm that provides instant auditory feedback, essential for user immersion.",
    coverImage: "images/MotorIcon.png",
    gallery: [
      { type: "youtube", src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs", alt: "App Demo" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.Okka.RedlineMotorcycleSounds&hl=en" }
    ]
  },

  /* ---------------------------------------------------- */
  /* REDLINE DRAG RACING (FREELANCE) */
  /* ---------------------------------------------------- */
  {
    id: "redline-drag-racing",
    name: "Redline Drag Racing",
    role: "Freelance Developer", // GÜNCELLENDİ: Okka Games
    tagline: "Vehicle Physics • Kinematics • UI/UX • Android",
    date: "2022-05",
    types: ["software"],
    shortDesc:
      "2D competitive racing simulator focusing on launch kinematics, transmission timing, and vehicle tuning.",
    longDesc:
      "This project focuses on the mathematics of drag racing. I programmed the vehicle physics including torque curves, tire friction models, and a precision-based manual transmission system. The game requires players to master reaction times (ms) and shift points, demanding a highly responsive UI and input handling system.",
    coverImage: "images/DragIcon.jpg",
    gallery: [
      { type: "youtube", src: "https://www.youtube.com/watch?v=XFWho0Bv_xU", alt: "Racing Mechanics" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.okkagames.redlinedragracing&hl=en" }
    ]
  },

  /* ---------------------------------------------------- */
  /* DOLMUŞÇU DAYI (FREELANCE) */
  /* ---------------------------------------------------- */
  {
    id: "dolmuscu-dayi",
    name: "Dolmuşçu Dayı",
    role: "Freelance Developer", // GÜNCELLENDİ: Okka Games / Indie
    tagline: "Game Economy • 2D Animation • Cultural Adaptation",
    date: "2022-07",
    types: ["software"],
    shortDesc:
      "A culturally localized simulation game managing passengers and economy in a chaotic traffic environment.",
    longDesc:
      "Developed as a hyper-casual simulation, this project focuses on resource management and multitasking. I handled the entire development pipeline: from 2D sprite animation and UI design to the core game loop involving passenger logic and currency systems. It serves as a strong example of product polishing and cultural localization.",
    coverImage: "images/DolmusIcon.png",
    gallery: [
      { type: "youtube", src: "https://www.youtube.com/watch?v=oGrix2jcBIw" }
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/dolmu%C5%9F%C3%A7u-day%C4%B1/id1636141841" }
    ]
  },

  /* ---------------------------------------------------- */
  /* DRAGON FAYA (FREELANCE) */
  /* ---------------------------------------------------- */
  {
    id: "dragon-faya",
    name: "Dragon Faya",
    role: "Freelance Developer", // GÜNCELLENDİ: Dragon Faya
    tagline: "iOS Optimization • Particle VFX • Arcade Physics",
    date: "2021-11",
    types: ["software"],
    shortDesc:
      "A fast-paced arcade game for iOS utilizing particle systems and rapid gameplay loops.",
    longDesc:
      "Dragon Faya is an iOS-exclusive arcade shooter. My contribution focused on optimizing the Unity engine for Apple devices, implementing performant particle effects (VFX) for fire mechanics, and fine-tuning the difficulty curve to maximize user retention.",
    coverImage: "images/DragonFaya_1.jpg",
    gallery: [
      { type: "image", src: "images/DragonFaya_2.jpeg", alt: "Gameplay Screen" },
      { type: "youtube", src: "https://www.youtube.com/watch?v=syhsci_zf4U" }
    ],
    links: [
      { label: "App Info", url: "https://appadvice.com/app/dragon-faya/1597632362" }
    ]
  }
];
