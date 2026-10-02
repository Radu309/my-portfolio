/* global __PUSHURE_SCREENSHOTS__ */

// Screenshots are picked up automatically from public/pushure/ (see vite.config.js),
// sorted by file name. "2-coach-booking.avif" gets the alt text "Pushure - coach booking".
const screenshots = __PUSHURE_SCREENSHOTS__.map((file) => ({
  src: `pushure/${file}`,
  alt: `Pushure - ${file.replace(/\.[^.]+$/, "").replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ")}`,
}));

export const featuredProject = {
  name: "Pushure",
  subtitle: "Multi-Gym Fitness Platform",
  summary:
    "One membership for every partner gym: a self-refreshing QR pass at the door, a gym map, " +
    "and coaches you can book in a few taps. I built the platform from scratch, from the " +
    "microservices behind it to the deployment pipeline.",
  // The first link is rendered as the primary button. Add e.g. { label: "Source code", href: "..." }.
  links: [
    { label: "Visit live site", href: "https://pushure.fit" },
  ],
  screenshots,
  highlights: [
    "Designed a microservices architecture with the database-per-service pattern: independent PostgreSQL databases behind an API Gateway as the single entry point.",
    "Implemented JWT authentication with HttpOnly cookies and role-based access, using Redis to invalidate revoked tokens.",
    "Containerized the services with Docker and deployed them on a Google Cloud Compute Engine instance over HTTPS (Let's Encrypt).",
    "Automated delivery with a GitHub Actions CI/CD pipeline: commit to production in about 10 minutes.",
  ],
  architecture: [
    { title: "Client", detail: "React + TypeScript" },
    { title: "API Gateway", detail: "Single entry point, JWT in HttpOnly cookies" },
    { title: "Microservices", detail: "Spring Boot, role-based access" },
    { title: "PostgreSQL", detail: "One database per service" },
  ],
  infrastructure: [
    "Redis for token revocation",
    "Docker containers",
    "GCP Compute Engine + HTTPS",
    "GitHub Actions CI/CD",
  ],
  stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "Google Cloud", "GitHub Actions"],
};
