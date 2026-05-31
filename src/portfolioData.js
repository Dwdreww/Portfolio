const asset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const EMAIL = "andrewvalenzuela082@gmail.com";
export const PROFILE_IMAGE = asset("drew.JPEG");

export const socialLinks = {
  github: "https://github.com/Dwdreww",
  linkedin: "https://www.linkedin.com/in/andrew-valenzuela-73578a3b3/",
};

export const projectCategories = [
  "All",
  "Full-Stack",
  "AI / ML",
  "Computer Vision",
  "NLP / BERT",
  "UI / UX",
  "Frontend",
];

export const projects = [
  {
    id: "agri-vision",
    title: "AGRI-VISION",
    subtitle: "Pineapple Disease Detection System",
    summary:
      "A crop health scanner that connects a React interface with a Flask backend for image-based pineapple disease analysis.",
    impact:
      "Built around YOLOv8 detection and EfficientNet classification so users can upload samples and receive practical visual output.",
    categories: ["Full-Stack", "AI / ML", "Computer Vision"],
    role: "Full-stack developer",
    stack: ["React", "Python", "Flask", "YOLOv8", "EfficientNet"],
    screenshot: asset("project-agri-vision.png"),
    demoUrl: "https://agri-vision-eosin.vercel.app/",
    repoUrl: "https://github.com/Dwdreww/Agri-Vision",
    featured: true,
  },
  {
    id: "abot-kamay",
    title: "Abot-Kamay",
    subtitle: "Barangay PWD Service Platform",
    summary:
      "A barangay platform for PWD services, request tracking, profiles, requirements, and administrative workflows.",
    impact:
      "Designed the interface and workflows to make local government services easier to access and manage.",
    categories: ["Full-Stack", "UI / UX"],
    role: "Frontend and workflow builder",
    stack: ["React", "TypeScript", "Firebase", "Tailwind", "Vercel"],
    screenshot: asset("project-abot-kamay.png"),
    demoUrl: "https://abot-kamay.vercel.app/",
    repoUrl: "https://github.com/Dwdreww/Abot-Kamay",
    featured: true,
  },
  {
    id: "chunky",
    title: "Chunky 3.5",
    subtitle: "Toxicity Detection Interface",
    summary:
      "A toxicity checking tool for harmful English-language content with text analysis, OCR extraction, and dashboard views.",
    impact:
      "Presents a BERT-based classification workflow in a direct interface for testing and reviewing model output.",
    categories: ["Full-Stack", "AI / ML", "NLP / BERT"],
    role: "ML interface developer",
    stack: ["HTML", "CSS", "JavaScript", "BERT Model", "GitHub Pages"],
    screenshot: asset("project-chunky.png"),
    demoUrl: "https://dwdreww.github.io/Latest-Chunky-Model/",
    repoUrl: "https://github.com/Dwdreww/Latest-Chunky-Model",
    featured: true,
  },
  {
    id: "pawmatch",
    title: "PawMatch",
    subtitle: "Pet Matching Web App",
    summary:
      "A pet matching web application that helps users browse pet profiles and move through a simple adoption-style flow.",
    impact:
      "Focuses on approachable visual design, clear navigation, and a direct frontend experience for pet discovery.",
    categories: ["Full-Stack", "Frontend", "UI / UX"],
    role: "Frontend developer",
    stack: ["React", "JavaScript", "CSS", "GitHub Pages"],
    screenshot: asset("project-pawmatch.png"),
    demoUrl: "https://dwdreww.github.io/app-test/",
    repoUrl: "https://github.com/Dwdreww/app-test",
    featured: false,
  },
];

export const designWorks = [
  {
    id: "nike-app",
    title: "Nike App Landing Page",
    type: "Mobile App Prototype",
    summary:
      "A Figma prototype focused on bold product presentation, mobile-first layout, and a clean app-style user flow.",
    tools: ["Figma", "Mobile UI", "Landing Page", "Prototype"],
    image: asset("Nikeapp.png"),
    link: "https://www.figma.com/proto/QFTwsuhr07SvXdR89p4BaO/NIKE-APP-LANDING-PAGE?node-id=102-11&p=f&t=JZUe3lFT5r4nuN8d-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=102%3A11",
  },
];

export const upcomingDesignFocus = [
  "Interface case studies with problem, flow, and screen decisions",
  "Wireframes that show how layouts evolve before visual polish",
  "Reusable product UI patterns for dashboards and service platforms",
];

export const skillGroups = [
  {
    title: "Frontend",
    summary: "Responsive interfaces, component structure, and browser-ready user flows.",
    tools: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    summary: "APIs, data handling, and integration work for practical web systems.",
    tools: ["Python", "Flask", "Firebase", "API Integration"],
  },
  {
    title: "AI / Machine Learning",
    summary: "Applied model workflows for image analysis and text classification projects.",
    tools: ["YOLOv8", "EfficientNet", "BERT", "OpenCV"],
  },
  {
    title: "Design Tools",
    summary: "Interface planning, prototyping, and visual communication for product ideas.",
    tools: ["Figma", "Wireframes", "Prototypes", "GitHub"],
  },
];
