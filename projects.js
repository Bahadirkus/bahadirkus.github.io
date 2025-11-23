// projects.js
// All portfolio projects live here. index.html reads window.projects.

window.projects = [
  {
    id: "redline-engine-sounds",
    name: "Redline Engine Sounds",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • FMOD • Sound Engineering • Android",
    date: "2021-10",
    types: ["software"],
    shortDesc:
      "Android engine sound simulator that recreates classic and supercar exhaust audio with manual gear and real-time chrono.",
    longDesc:
      "Redline Engine Sounds is a mobile car engine simulator developed for Android devices. I implemented manual shifting, throttle logic, FMOD-based sound layering, UI flows, and performance optimization for low-end devices. The app also includes a built-in stopwatch so users can race against their own best times.",
    coverImage: "images/redlineengine_1.jpeg",
    gallery: [
      { type: "youtube", src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs", alt: "Redline Engine Sounds gameplay demo" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.Okkagames.RedlineEngineSounds&hl=en" },
      { label: "YouTube Demo", url: "https://www.youtube.com/watch?v=Tp5mlPiPLVs" }
    ]
  },

  {
    id: "fire-evacuation-simulation",
    name: "Fire Evacuation Training Simulation",
    role: "Simulation Developer",
    tagline: "Unity • C# • Environment Scanning • Fire Safety",
    date: "2022-10",
    types: ["software", "simulation"],
    shortDesc:
      "Custom fire evacuation simulation where the real environment is scanned and recreated. The goal is to trigger the alarm and follow arrows to reach the safe zone.",
    longDesc:
      "This project is a fire evacuation training simulation built for a specific real-world space. The environment is scanned and modeled to create a location-specific experience. In the simulation, the user must locate and trigger the fire alarm, then follow dynamic guidance arrows and route indicators to reach the designated safe zone.",
    coverImage: "images/fireIcon.jpg",
    gallery: [
      { type: "youtube", src: "https://youtu.be/pptgV_zM5ts", alt: "Fire evacuation training simulation demo" }
    ],
  },

  /* -------------- NEW PROJECT ADDED HERE -------------- */

  {
    id: "prosthetic-worlds-vr-training",
    name: "Prosthetic Worlds – VR Surgical Training",
    role: "Simulation Developer (Freelance)",
    tagline: "VR • Surgical Training • Total Knee Arthroplasty",
    date: "2022-11",
    types: ["software", "simulation"],
    shortDesc:
      "VR-based total knee arthroplasty training simulation that lets surgeons practice the full procedure in a safe, repeatable environment.",
    longDesc:
      "Prosthetic Worlds is a VR surgical training experience focused on total knee arthroplasty (TKA). Trainees can walk through each surgical step at their own pace, repeat critical actions, and build confidence without risk to patients. In a controlled study with 20 doctors split into VR and traditional-training groups, the VR group achieved higher scores across four surgical skill parameters, especially in learning the overall procedure. The goal is to compress years of operating room learning into a structured, measurable VR training workflow.",
    coverImage: "images/Pw_2.jpg",
    gallery: [
            {
        type: "image",
        src: "images/Pw_1.jpg",
        alt: "Prosthetic Worlds VR total knee arthroplasty training"
      },
            {
        type: "image",
        src: "images/Pw_3.jpg",
        alt: "Prosthetic Worlds VR total knee arthroplasty training"
      },
      { type: "youtube", src: "https://www.youtube.com/watch?v=sWOdGYnegjY", alt: "Motorcycle sound demo" }
    ],
    

    
    links: [
      {
        label: "Scientific Research Article",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11596432/pdf/medi-103-e40615.pdf"
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/prostheticworlds?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      }
    ]
  },

  /* ---------------------------------------------------- */

  {
    id: "redline-motorcycle-sounds",
    name: "Redline Motorcycle Sounds",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • Motorcycle Exhaust Simulation • Android",
    date: "2021-10",
    types: ["software"],
    shortDesc: "Mobile simulator featuring realistic motorcycle exhaust and engine sounds.",
    longDesc:
      "Redline Motorcycle Sounds is a focused engine sound simulator for motorcycle enthusiasts. I worked on the sound system, throttle response, looping, and performance optimization.",
    coverImage: "images/MotorIcon.png",
    gallery: [
      { type: "youtube", src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs", alt: "Motorcycle sound demo" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.Okka.RedlineMotorcycleSounds&hl=en" }
    ]
  },

  {
    id: "redline-drag-racing",
    name: "Redline Drag Racing",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • Drag Racing Physics • Android",
    date: "2022-5",
    types: ["software"],
    shortDesc: "Drag racing simulator with manual shifting, reaction time and acceleration behavior.",
    longDesc:
      "Redline Drag Racing is a drag racing game where I implemented manual gear shifting, start-light timing, and car acceleration behavior.",
    coverImage: "images/DragIcon.jpg",
    gallery: [
      { type: "youtube", src: "https://www.youtube.com/watch?v=XFWho0Bv_xU", alt: "Redline Drag Racing gameplay" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.okkagames.redlinedragracing&hl=en" }
    ]
  },
  
  {
    id: "dragon-faya",
    name: "Dragon Faya",
    role: "Unity Developer",
    tagline: "Unity • Mobile Game • iOS",
    date: "2021-11",
    types: ["software"],
    shortDesc: "Casual mobile game featuring a fire-breathing dragon and arcade-style gameplay.",
    longDesc:
      "Dragon Faya is an iOS casual game built with Unity. I contributed to gameplay systems, effects and general polish.",
    coverImage: "images/DragonFaya_1.jpg",
    gallery: [
      { type: "image", src: "images/DragonFaya_2.jpeg", alt: "Dragon Faya cover art" },
      { type: "youtube", src: "https://www.youtube.com/watch?v=syhsci_zf4U&t=1s" }

    ],
    links: [
      { label: "Download", url: "https://appadvice.com/app/dragon-faya/1597632362" }
    ]
  },

  {
    id: "dolmuscu-dayi",
    name: "Dolmuşçu Dayı",
    role: "Unity Developer",
    tagline: "Unity • C# • 2D Mobile Game • iOS",
    date: "2022-07",
    types: ["software"],
    shortDesc: "Humorous mobile game about driving a Turkish dolmuş and managing passengers.",
    longDesc:
      "Dolmuşçu Dayı is a 2D mobile game where players control a Turkish minibus driver.",
    coverImage: "images/DolmusIcon.png",
    gallery: [
            { type: "youtube", src: "https://www.youtube.com/watch?v=oGrix2jcBIw" }
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/dolmu%C5%9F%C3%A7u-day%C4%B1/id1636141841" }
    ]
  }
];
