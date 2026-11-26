// Group 4's final Mini Project A showcase, using the RoadwayVR course template.
window.SITE_CONFIG = {
  pageTitle: "Kipling Avenue and Dixon Road | SMRTTECH 4SC3",
  homeUrl: "https://roadwayvr.com",
  hero: {
    profileImage: "assets/img/image1.jpg",
    courseTag: "SMRTTECH 4SC3",
    tagline: "Mini Project A · Roadway simulation",
    studentName: "Group 4 · Fall 2026",
    program: "Automation Systems Engineering Technology",
    university: "McMaster University",
    email: "chenc232@mcmaster.ca"
  },
  disclaimer: {
    short: "This McMaster University course project uses simulated traffic. The findings are for educational use and do not represent the City of Toronto.",
    long: "Each scenario uses one simulation run, one approach and assumed traffic demand. Extending the green for E61 costs the opposing movements nine seconds per cycle. Their delay would need to be measured before considering a field trial."
  },
  theme: { heroBg: "#232A33", heroText: "#ffffff", pageBg: "#f8fafc", accent: "#7c3aed" },
  dividers: { dividerBg: "#f9f9f9", dividerText: "#ffffff" },
  footer: {
    footerBg: "#111111", footerText: "#ffffff", footerBorder: "#222222",
    homeLinkText: "RoadwayVR",
    templateCredit: "This academic showcase template was developed by RoadwayVR.",
    templateCreditLinkText: "Learn more at RoadwayVR.com",
    templateCreditUrl: "https://roadwayvr.com"
  },
  intro: {
    projectTitleLabel: "Kipling Avenue and Dixon Road · Toronto",
    projectTitle: "SUMO-Based Roadway Modelling and Speed–Density Assessment at Kipling Avenue and Dixon Road, Toronto",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "assets/img/image3.jpg",
    heroVideoAlt: "Traffic moving through junction J1. Yellow human-driven vehicles are followed by grey connected and autonomous vehicles.",
    videoCaption: "The same ten seconds at junction J1 play twice, first with yellow human-driven vehicles (HDVs), then with grey connected and autonomous vehicles (CAVs). Vehicle positions come from the two submitted SUMO models at simulation seconds 320–330."
  },
  caseStudy: {
    title: "Introduction",
    backgroundTitle: "Background",
    backgroundBullets: [
      "Kipling Avenue meets Dixon Road at a signalized Toronto intersection.",
      "Group 4 traced the surrounding road network from the assigned aerial map.",
      "The model represents 12 turning and through movements.",
      "We measured traffic on E61, the four-lane approach immediately upstream of the signal."
    ],
    problemTitle: "Problem Statement",
    problemBullets: [
      "How fast do human drivers move as the approach fills?",
      "Does an entirely autonomous fleet change that relationship?",
      "What happens on E61 when its green phase lasts longer?",
      "Do those changes persist when intervals have similar densities?"
    ],
    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Build the roadway model and establish the human-driven baseline on approach E61.",
      "Compare speed and density on E61 with a fully autonomous fleet.",
      "Test a fixed-cycle signal change on the same approach using human-driven traffic."
    ]
  },
  overview: {
    title: "Methodology",
    steps: [
      {title: "Establish the baseline", text: "Load human-driven traffic and run the original 60-second signal cycle.", image: "assets/img/image3.jpg"},
      {title: "Change the fleet", text: "Assign the CAV vehicle type to all 12 flows and repeat the baseline run.", image: "assets/img/image4.jpg"},
      {title: "Reallocate green time", text: "Return to the HDV fleet and give the phase serving E61 nine extra seconds.", image: "assets/img/image5.jpg"}
    ]
  },
  implementation: {
    title: "Inside the three SUMO scenarios",
    modules: [
      {title: "Base scenario with human drivers", image: "assets/img/image3.jpg",
       alt: "Yellow HDVs follow the submitted routes into and through junction J1.",
       caption: "Yellow vehicles follow the baseline flows at J1. Source: Group 4 SUMO-GUI replay.",
       bullets: [{text: "Load 750 vehicles per hour at each of four origins, for a total demand of 3,000 vehicles per hour."},
                {text: "Assign the HDV type to every flow and use the 27/3/27/3-second signal plan."},
                {text: "Record speed and density on E61 in 100-second intervals."}]},
      {title: "Scenario 1 with connected and autonomous vehicles", image: "assets/img/image4.jpg",
       alt: "Grey CAVs approach junction J1 using cooperative adaptive cruise control.",
       caption: "Grey vehicles follow the same flows using cooperative adaptive cruise control. Source: Group 4 SUMO-GUI replay.",
       bullets: [{text: "Give all 12 flows the cooperative adaptive cruise control (CACC) vehicle type."},
                {text: "Set its desired time headway to 0.6 s and its minimum gap to 1.50 m."},
                {text: "Keep the demand, routes, geometry, signal timing and 0.2-second simulation step fixed."}]},
      {title: "Scenario 2 with a revised signal split", image: "assets/img/image5.jpg",
       alt: "Group 4’s NETEDIT screenshot and a table show the change from 27/3/27/3 to 36/3/18/3 seconds.",
       caption: "The phase serving E61 gains nine seconds for vehicles to clear the queue. Source: Group 4 NETEDIT signal programs, Report A.",
       bullets: [{text: "Start again with the HDV baseline so the only intervention is signal timing."},
                {text: "Lengthen the green serving E61 from 27 to 36 s and shorten the opposing green from 27 to 18 s."},
                {text: "Keep both yellow phases at 3 s and compare E61 over the same hour."}]}
    ]
  },
  results: {
    title: "Results & Potential Improvements",
    subtitle: "Each point represents one 100-second interval in the first simulated hour, including startup. Density counts vehicles across all four lanes. The dashed lines in the fleet comparison show a separate linear fit for each fleet.",
    charts: {
      left: {title: "Base scenario · Human-driven", src: "assets/img/image6.jpg", alt: "E61 HDV speed–density scatterplot. Speed declines as density rises; the linear fit has R² = 0.887."},
      right: {title: "Scenario 1 · Autonomous", src: "assets/img/image7.jpg", alt: "E61 CAV speed–density scatterplot on the same axes. The linear fit has R² = 0.861."}
    },
    discussionTitle: "Discussion",
    discussionBullets: [
      "Switching the fleet raised the mean interval speed by 0.014 m/s. Both fleets slowed as density rose, and the ordering varied across overlapping density ranges.",
      "Weighting by the time vehicles spent on E61 reverses the small speed difference. The HDV mean is 3.362 m/s and the CAV mean is 3.310 m/s.",
      "With HDVs and the revised signal, mean interval speed rose from 3.562 to 4.990 m/s and mean density fell from 63.077 to 44.455 veh/km. E61 had nine more seconds of green per cycle."
    ],
    summary: [
      ["Base · 100% HDV", "3.562", "63.077", "3.362"],
      ["Scenario 1 · 100% CAV", "3.576", "64.830", "3.310"],
      ["Scenario 2 · HDV with revised signal", "4.990", "44.455", "4.629"]
    ]
  },
  team: {
    title: "Team & Acknowledgments",
    subtitle: "Group 4 · Mini Project A · McMaster University · Fall 2026",
    members: ["Ricardo Solis", "Aris D’Silva", "Ching Chen", "Shengyao Xu"],
    acknowledgments: [
      "The introductory image and study map use Group 4’s NETEDIT and GIS figures from Report A, based on the course-supplied aerial background.",
      "Simulation footage and charts use Group 4’s SUMO models and archived edge measurements. The replay lightens the CAV colour for visibility.",
      "McMaster University, SMRTTECH 4SC3. Course instructor Dr. Marjan Alavi and lab instructor Dr. Ahmad Mohammadi."
    ],
    repoLabel: "Project source",
    repoUrl: "https://github.com/ChingChen414/Group04-MiniProjectA"
  }
};
