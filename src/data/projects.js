const tech = {
  java: { icon: "java.png", name: "Java" },
  postgres: { icon: "postgre.png", name: "PostgreSQL" },
  cloud: { icon: "cloud.png", name: "Cloud" },
  react: { icon: "react.png", name: "React" },
  javascript: { icon: "java-script.png", name: "JavaScript" },
  html: { icon: "html.png", name: "HTML" },
  csharp: { icon: "c-sharp.png", name: "C#" },
  dotnet: { icon: ".net.png", name: ".NET" },
  python: { icon: "python.png", name: "Python" },
  ai: { icon: "artificial-intelligence.png", name: "Artificial Intelligence" },
};

// Pushure, the main project, lives in featuredProject.js.
// `link` is optional: projects without one render a plain title.
export const projects = [
  {
    id: "real-time-game-shop",
    title: "Real-Time Game Shop",
    description:
      "Developed a secure online game store featuring real-time interactions and microservices " +
      "architecture. Built using ASP.NET Core with MVC design pattern, integrated SignalR for " +
      "live updates, and utilized gRPC for efficient communication between services.",
    technologies: [tech.csharp, tech.postgres, tech.react, tech.dotnet],
  },
  {
    id: "pancreas-segmentation",
    title: "Pancreas and Tumor Segmentation",
    description:
      "Developed a medical imaging application for accurate segmentation of pancreas and " +
      "pancreatic tumors from CT scans. Implemented using PyTorch and U-Net architecture to " +
      "achieve precise and efficient image segmentation.",
    technologies: [tech.python, tech.ai],
  },
  {
    id: "energy-management",
    title: "Integrated Energy Management System",
    description:
      "Developed an integrated energy management system by connecting secure microservices " +
      "deployed on virtualized infrastructure. Implemented real-time communication with " +
      "WebSockets and RabbitMQ for efficient message handling.",
    technologies: [tech.java, tech.postgres, tech.cloud, tech.react],
  },
  {
    id: "photographer-portfolio",
    title: "Photographer Portfolio Website",
    description:
      "Developed a static portfolio website for a photographer to showcase their work and " +
      "services. Built using React and hosted securely on Cloudflare.",
    technologies: [tech.react, tech.javascript, tech.html, tech.cloud],
  },
];
