// projects.js
// Bu dosya index.html tarafından okunur.
// Resimlerin "images" klasöründe ve isimlerin birebir tuttuğundan emin ol.

window.projects = [
  /* ---------------------------------------------------- */
  /* PROSTHETIC WORLDS (En Önemli Proje - En Üste Eklendi) */
  /* ---------------------------------------------------- */
  {
    id: "prosthetic-worlds-vr",
    name: "Prosthetic Worlds – VR Surgery",
    role: "Simulation Developer",
    tagline: "VR • Surgical Training • TKA • Medical Sim",
    date: "2022-11",
    // HTML'deki hem Software hem Design filtresinde görünsün
    types: ["software", "design", "simulation"], 
    shortDesc:
      "A scientifically validated VR training simulation for Total Knee Arthroplasty (TKA), designed to help surgeons practice without patient risk.",
    longDesc:
      "Prosthetic Worlds is a VR surgical training experience focused on Total Knee Arthroplasty (TKA). Trainees can walk through each surgical step at their own pace, repeat critical actions, and build confidence in a risk-free environment. In a controlled study with 20 doctors, the group trained with this VR system achieved significantly higher scores in surgical parameters compared to traditional training methods. This project aims to compress years of operating room learning into a structured, measurable VR workflow.",
    coverImage: "images/Pw_2.jpg", // Kapak görseli
    gallery: [
      {
        type: "image",
        src: "images/Pw_1.jpg",
        alt: "Surgical VR Training Scene"
      },
      {
        type: "image",
        src: "images/Pw_3.jpg",
        alt: "User Interface and Haptics"
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/watch?v=sWOdGYnegjY",
        alt: "Prosthetic Worlds Demo"
      }
    ],
    links: [
      {
        label: "Read Research Article (NCBI)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11596432/pdf/medi-103-e40615.pdf"
      },
      {
        label: "View on Instagram",
        url: "https://www.instagram.com/prostheticworlds"
      }
    ]
  },

  /* ---------------------------------------------------- */
  /* FIRE EVACUATION */
  /* ---------------------------------------------------- */
  {
    id: "fire-evacuation-sim",
    name: "Fire Evacuation Simulation",
    role: "Simulation Developer",
    tagline: "Unity • Digital Twin • Fire Safety • Lidar",
    date: "2022-10",
    types: ["software", "design"],
    shortDesc:
      "Location-based fire safety training where the real environment was scanned and recreated as a digital twin.",
    longDesc:
      "This project is a bespoke fire evacuation training simulation built for a specific real-world facility. The environment was scanned using Lidar/Photogrammetry to create a 1:1 digital twin. Users must identify hazards, trigger the fire alarm, and follow dynamic AR-style guidance arrows to reach the designated safe zone within a time limit.",
    coverImage: "images/fireIcon.jpg",
    gallery: [
      { 
        type: "youtube", 
        src: "https://youtu.be/pptgV_zM5ts", 
        alt: "Fire Evacuation Demo" 
      }
    ],
    links: []
  },

  /* ---------------------------------------------------- */
  /* REDLINE ENGINE SOUNDS */
  /* ---------------------------------------------------- */
  {
    id: "redline-engine-sounds",
    name: "Redline Engine Sounds",
    role: "Unity Developer",
    tagline: "Unity • C# • FMOD • Audio Physics",
    date: "2021-10",
    types: ["software"],
    shortDesc:
      "A popular Android simulation app that accurately recreates supercar engine physics, exhaust notes, and manual shifting logic.",
    longDesc:
      "Redline Engine Sounds is a mobile simulator developed for car enthusiasts. I engineered the core audio physics using FMOD to allow for realistic RPM revving, throttle response, and gear shifting. The app features a variety of classic and modern supercars, optimized to run smoothly even on low-end Android devices.",
    coverImage: "images/redlineengine_1.jpeg",
    gallery: [
      { 
        type: "youtube", 
        src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs", 
        alt: "Gameplay Demo" 
      }
    ],
    links: [
      { 
        label: "Google Play", 
        url: "https://play.google.com/store/apps/details?id=com.Okkagames.RedlineEngineSounds&hl=en" 
      },
      { 
        label: "Watch Demo", 
        url: "https://www.youtube.com/watch?v=Tp5mlPiPLVs" 
      }
    ]
  },

  /* ---------------------------------------------------- */
  /* REDLINE MOTORCYCLE SOUNDS */
  /* ---------------------------------------------------- */
  {
    id: "redline-moto-sounds",
    name: "Redline Motorcycle Sounds",
    role: "Unity Developer",
    tagline: "Unity • Audio • Mobile App",
    date: "2021-10",
    types: ["software"],
    shortDesc:
      "Focused simulation app for motorcycle exhaust acoustics and throttle control.",
    longDesc:
      "A specialized version of the Redline series focused on high-performance motorcycles. My work involved refining the granular audio loops and implementing a responsive throttle system that mimics the rapid RPM changes of bike engines.",
    coverImage: "images/MotorIcon.png",
    gallery: [
      { 
        type: "youtube", 
        src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs", 
        alt: "Motorcycle App Demo" 
      }
    ],
    links: [
      { 
        label: "Google Play", 
        url: "https://play.google.com/store/apps/details?id=com.Okka.RedlineMotorcycleSounds&hl=en" 
      }
    ]
  },

  /* ---------------------------------------------------- */
  /* REDLINE DRAG RACING */
  /* ---------------------------------------------------- */
  {
    id: "redline-drag-racing",
    name: "Redline Drag Racing",
    role: "Unity Developer",
    tagline: "Unity • Physics • Racing Game",
    date: "2022-05",
    types: ["software"],
    shortDesc:
      "2D drag racing simulator focusing on reaction times, gear shifts, and vehicle tuning.",
    longDesc:
      "Redline Drag Racing is a competitive mobile game where players race in a straight line. I implemented the vehicle launch physics, manual transmission logic (perfect shift mechanics), and the reaction-time based start light system.",
    coverImage: "images/DragIcon.jpg",
    gallery: [
      { 
        type: "youtube", 
        src: "https://www.youtube.com/watch?v=XFWho0Bv_xU", 
        alt: "Drag Racing Gameplay" 
      }
    ],
    links: [
      { 
        label: "Google Play", 
        url: "https://play.google.com/store/apps/details?id=com.okkagames.redlinedragracing&hl=en" 
      }
    ]
  },

  /* ---------------------------------------------------- */
  /* DRAGON FAYA */
  /* ---------------------------------------------------- */
  {
    id: "dragon-faya",
    name: "Dragon Faya",
    role: "Unity Developer",
    tagline: "Unity • iOS • Casual Arcade",
    date: "2021-11",
    types: ["software"],
    shortDesc:
      "A casual iOS arcade game featuring a fire-breathing dragon with stylized 2D graphics.",
    longDesc:
      "Dragon Faya is a fast-paced casual game published on the App Store. I contributed to the core gameplay loops, particle effects (VFX), and user interface implementation for iOS devices.",
    coverImage: "images/DragonFaya_1.jpg",
    gallery: [
      { 
        type: "image", 
        src: "images/DragonFaya_2.jpeg", 
        alt: "Gameplay Screenshot" 
      },
      { 
        type: "youtube", 
        src: "https://www.youtube.com/watch?v=syhsci_zf4U" 
      }
    ],
    links: [
      { 
        label: "View on App Advice", 
        url: "https://appadvice.com/app/dragon-faya/1597632362" 
      }
    ]
  },

  /* ---------------------------------------------------- */
  /* DOLMUŞÇU DAYI */
  /* ---------------------------------------------------- */
  {
    id: "dolmuscu-dayi",
    name: "Dolmuşçu Dayı",
    role: "Indie Developer",
    tagline: "Unity • 2D • Hypercasual",
    date: "2022-07",
    types: ["software"],
    shortDesc:
      "A humorous hyper-casual game capturing the chaotic experience of driving a Turkish minibus (Dolmuş).",
    longDesc:
      "Dolmuşçu Dayı is a culturally unique mobile game where players manage passengers and money while driving a minibus. The project involved 2D animation, money management logic, and creating a fun, recognizable art style.",
    coverImage: "images/DolmusIcon.png",
    gallery: [
      { 
        type: "youtube", 
        src: "https://www.youtube.com/watch?v=oGrix2jcBIw" 
      }
    ],
    links: [
      { 
        label: "App Store", 
        url: "https://apps.apple.com/us/app/dolmu%C5%9F%C3%A7u-day%C4%B1/id1636141841" 
      }
    ]
  }
];
