const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Dates are "YYYY-MM", both ends inclusive. Use "Present" for the current job.
export const experienceData = [
  {
    id: 1,
    role: "Software Engineer",
    company: "BETFAIR ROMANIA DEVELOPMENT SRL",
    startDate: "2025-08",
    endDate: "Present",
    description: [
      "Built and maintained web applications using React and Spring Boot.",
      "Contributed to frontend features for the sign-up and payments flows in React, including a multi-step wizard and field validation.",
      "Worked with AI-powered development tools and MCP servers.",
      "Participated in code reviews and Agile ceremonies, ensuring code quality and consistent delivery.",
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "ISERVIT CBR SRL",
    startDate: "2023-08",
    endDate: "2023-11",
    description: [
      "Developed web applications using Spring Boot and React.",
      "Built and optimized REST API communication between microservices and integrated backend services with databases.",
      "Implemented real-time user notifications using WebSockets and RabbitMQ.",
    ],
  },
  {
    id: 3,
    role: "Internship",
    company: "ISERVIT CBR SRL",
    startDate: "2023-07",
    endDate: "2023-07",
    description: [
      "Developed full-stack applications using Java and React, gaining hands-on experience with React for the first time.",
      "Implemented JWT and OAuth security mechanisms for user authentication and authorization.",
    ],
  },
];

export const educationData = [
  {
    id: 1,
    degree: "Master In E-Business",
    institution: "Babeș-Bolyai University",
    period: "2024 - 2026",
  },
  {
    id: 2,
    degree: "Bachelor In Computer Science",
    institution: "Technical University of Cluj-Napoca",
    period: "2020 - 2024",
  },
];

const parseMonth = (value) => {
  if (value === "Present") {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  }
  const [year, month] = value.split("-").map(Number);
  return { year, month: month - 1 };
};

const formatMonth = (value) => {
  if (value === "Present") return value;
  const { year, month } = parseMonth(value);
  return `${MONTH_NAMES[month]} ${year}`;
};

export const formatPeriod = ({ startDate, endDate }) =>
  startDate === endDate
    ? formatMonth(startDate)
    : `${formatMonth(startDate)} - ${formatMonth(endDate)}`;

export const getTotalExperienceMonths = (data = experienceData) =>
  data.reduce((total, job) => {
    const start = parseMonth(job.startDate);
    const end = parseMonth(job.endDate);
    return total + (end.year - start.year) * 12 + (end.month - start.month) + 1;
  }, 0);
