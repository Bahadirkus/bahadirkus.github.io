// projects.js
// Proje tipleri: "software", "design", "hardware"

window.projects = [
  /* ---------------------------------------------------- */
  /* PROSTHETIC WORLDS */
  /* ---------------------------------------------------- */
  {
    id: "prosthetic-worlds-vr",
    name: "Prosthetic Worlds – VR Surgery",
    role: "Lead Simulation Developer",
    tagline: "VR • Surgical Training • Haptics • Medical Sim",
    date: "2022-11",
    types: ["software", "design", "hardware"], 
    shortDesc:
      "A scientifically validated VR training simulation for Total Knee Arthroplasty (TKA), designed to help surgeons practice without patient risk.",
    longDesc:
      "Prosthetic Worlds is a high-fidelity VR surgical training experience focused on Total Knee Arthroplasty (TKA). I was responsible for the physics engine, real-time data integration, and optimization for the custom hardware peripherals. The system offers trainees a structured, measurable VR workflow that reduces the learning curve compared to traditional methods.",
    coverImage: "images/Pw_2.jpg", 
    gallery: [
      { type: "image", src: "images/Pw_1.jpg", alt: "Surgical VR Training Scene" },
      { type: "image", src: "images/Pw_3.jpg", alt: "User Interface and Haptics" },
      { type: "youtube", src: "https://www.youtube.com/watch?v=sWOdGYnegjY", alt: "Prosthetic Worlds Demo" }
    ],
    links: [
      { label: "Read Research Article (NCBI)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11596432/pdf/medi-103-e40615.pdf" },
      { label: "View on Instagram", url: "https://www.instagram.com/prostheticworlds" }
    ]
  },

  /* ---------------------------------------------------- */
  /* FIRE EVACUATION */
  /* ---------------------------------------------------- */
  {
    id: "fire-evacuation-sim",
    name: "Fire Evacuation Simulation",
    role: "Simulation Developer",
    tagline: "Unity • Digital Twin • Lidar Scanning",
    date: "2022-10",
    types: ["software", "design"],
    shortDesc:
      "Location-based fire safety training where the real environment was scanned and recreated as a digital twin.",
    longDesc:
      "This project involved scanning a real-world space using Lidar technology to create a 1:1 digital twin in Unity. The simulation requires the user to react to dynamic events, trigger the fire alarm, and utilize real-time guidance systems (Technical Design) to reach the designated safe zone.",
    coverImage: "images/fireIcon.jpg",
    gallery: [
      { type: "youtube", src: "https://youtu.be/pptgV_zM5ts", alt: "Fire Evacuation Demo" }
    ],
    links: []
  },

  /* ---------------------------------------------------- */
  /* DOLMUŞÇU DAYI */
  /* ---------------------------------------------------- */
  {
    id: "dolmuscu-dayi",
    name: "Dolmuşçu Dayı",
    role: "Indie Developer",
    tagline: "Unity • 2D • Mobile Game",
    date: "2022-07",
    types: ["software"],
    shortDesc:
      "A humorous hyper-casual game capturing the chaotic experience of driving a Turkish minibus (Dolmuş).",
    longDesc:
      "Dolmuşçu Dayı is a culturally unique mobile game where players manage passengers and money while driving a minibus. The project involved 2D animation, money management logic, and creating a fun, recognizable art style, showcasing core mobile development skills.",
    coverImage: "images/DolmusIcon.png",
    gallery: [
      { type: "youtube", src: "https://www.youtube.com/watch?v=oGrix2jcBIw" }
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/dolmu%C5%9F%C3%A7u-day%C4%B1/id1636141841" }
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
      "Redline Drag Racing is a competitive mobile game where I implemented the core physics systems, including vehicle launch, precise manual transmission logic (perfect shift mechanics), and the timing-based start light system.",
    coverImage: "images/DragIcon.jpg",
    gallery: [
      { type: "youtube", src: "https://www.youtube.com/watch?v=XFWho0Bv_xU", alt: "Drag Racing Gameplay" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.okkagames.redlinedragracing&hl=en" }
    ]
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
      "I engineered the core audio physics system using FMOD to allow for realistic RPM revving, throttle response, and simulated manual gear shifting. The focus was on performance and fidelity to accurately mimic classic and modern supercar exhaust sounds.",
    coverImage: "images/redlineengine_1.jpeg",
    gallery: [
      { type: "youtube", src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs", alt: "Gameplay Demo" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/apps/details?id=com.Okkagames.RedlineEngineSounds&hl=en" },
      { label: "Watch Demo", url: "https://www.youtube.com/watch?v=Tp5mlPiPLVs" }
    ]
  },
  // (Diğer projeleriniz aynı formatta devam etmektedir)
];
