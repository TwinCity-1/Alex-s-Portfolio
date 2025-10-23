import project1 from "../assets/projects/project2.png"
import project2 from "../assets/projects/project-1.png"
import project4 from "../assets/projects/12.png"
import project5 from "../assets/projects/5.png"
import project6 from "../assets/projects/6.png"
import project7 from "../assets/projects/7.png"
import project8 from "../assets/projects/8.png"
import project9 from "../assets/projects/9.png"
import project11 from "../assets/projects/11.png"
import project13 from "../assets/projects/13.png"
import project14 from "../assets/projects/14.png"



export const HERO_CONTENT = `I’m a full-stack and mobile developer passionate about crafting seamless, high-performance digital experiences.

My toolkit includes Next.js, React, TailwindCSS, tRPC, Prisma, and PostgreSQL and I’ve also ventured into Flutter and Kotlin for mobile.
I specialize in building scalable systems that blend clean UI with solid backend architecture from modern dashboards and admin panels to cross-platform apps that feel fluid and alive. My goal is to bridge creativity and logic delivering software that’s fast, functional, and beautiful.
I’m driven by curiosity, design precision, and the thrill of solving hard problems.`;

export const ABOUT_TEXT = `I’m a multidisciplinary software developer with hands-on experience across web and mobile. My journey began with JavaScript and evolved through React and Next.js, where I learned to merge frontend craftsmanship with backend logic using API routes, tRPC, Prisma, and PostgreSQL.

At the same time, I expanded into mobile development — building native Android apps in Kotlin and experimenting with Flutter for cross-platform solutions. I’ve contributed to enterprise-grade systems, handled live production code, and built custom tools that optimize workflows.

Outside of code, I’m driven by growth — learning new technologies, sharing knowledge, and connecting with other builders shaping Africa’s tech scene. My work reflects a single principle: build it clean, build it fast, build it right.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - Current",
    role: "Frontend & Mobile App Engineer",
    company: "E&M Technology House - Tatu City",
    description: `I develop dynamic, responsive web applications and Mobile Applications in finance and banking. I also implement modern UI/UX best practices, optimizes application performance, and integrates APIs for seamless functionality. Collaborates with backend engineers and stakeholders to deliver scalable, secure, and efficient solutions.`,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "REST API"]
  }
  ,

  {
    year: "Jan 2025 - March 2025",
    role: "Frontend Developer ",
    company: "Client Contract",
    description: `Lead a two man team to design and develop a modern responsive dashboard web app  using React, Next.js, Tailwind CSS, and Shadcn for a client in the logistics industry. He was running a medium sized perishable goods logistics comapny with about 30 employees and wanted a central system to manage resources, salaries, trucks, rent, truck mainetance spending among other features. Collaborated with a backend developer who created a dedicated backend`,
    technologies: ["React", "Next.js", "Tailwind CSS", "shadcn", "JavaScript"],
  },
  {
    year: "Oct 2024 - Dec 2024",
    role: "Web Developer",
    company: "Technology Associates Limited",
    description: `Designed and maintained the official website for the company. Made regular updates, including adding blogs, images, and content. Managed domains and hosting plans.`,
    technologies: ["HTML", "CSS", "React", "Javascript", "WordPress", "SEO"],
  },

  {
    year: "Jun 2024 - Aug 2024",
    role: "Apprentice Backend Developer (Contract)",
    company: "Pyraus Group (Remote)",
    description: `Contributed to the development of the company’s software using Elixir and the Phoenix framework. Designed, created, and managed relational databases for various application features. Assisted in adding new features and collaborated in daily standups and code reviews.`,
    technologies: ["Elixir", "Phoenix", "PostgreSQL", "Git", "Agile Development"],
  },

  {
    year: "Jul 2022 - Sep 2022",
    role: "IT Assistant / License Officer (Intern)",
    company: "Nakuru County Government",
    description: `Processed license applications and ensured network uptime for office operations. Performed routine maintenance on office computers and provided technical support. Ensured servers were up and running optimally.`,
    technologies: ["Technical Support", "Network Maintenance", "Server Management"],
  },
];
export const PROJECTS = [
  {
  title: "Pulse360 - Integrated ERP & POS System",
  image: project14,
  description: "Pulse360 is a next-generation enterprise and point-of-sale web application built to unify business operations under one intelligent system. It combines the power of ERP automation with seamless POS transactions. The platform features modules for sales, inventory, reports, customers, and user management — all connected through secure authentication and real-time data synchronization.",
  technologies: ["Next.js","Tailwind","tRPC", "Prisma","NextAuth.js","PostgreSQL"],
  link: "https://github.com/AlexNjorogeEMTH/neuroerp"
},
{
  title: "SmartTrack - Digital Banking & Budget Tracker",
  image: project13,
  description: "SmartTrack is a premium digital banking app built with Flutter, inspired by high-end Figma designs brought to life with pixel-perfect precision. The app combines modern banking features like account management, transaction history, and budget tracking with a sleek, intuitive interface. Designed for both aesthetics and performance, SmartTrack delivers a smooth, real-world fintech experience with a strong focus on usability, animations, and design fidelity.",
  technologies: ["Flutter", "Dart", "Firebase"],
  link: "https://github.com/AlexNjorogeEMTH/Smarttrack-app"
},  
{
  title: "FinSight - Investment Dashboard App",
  image: project9,
  description: "FinSight is a modern financial dashboard mobile app built with Flutter, designed to help users track investments, monitor portfolio performance, and visualize transaction activity in real-time. It provides a clean, data-driven interface that simplifies complex financial insights into intuitive charts and summaries. With smooth navigation and responsive design, FinSight empowers users to stay informed and make smarter investment decisions on the go.",
  technologies: ["Flutter", "Dart", "Firebase"],
  link: "https://github.com/AlexNjorogeEMTH/finsight-app"
},

{
  title: "Miro - Real-Time Messaging App",
  image: project11,
  description: "Miro is a sleek real-time messaging app built with Flutter and Firebase, designed for seamless communication across devices. It allows users to post, view, and share messages instantly with cloud synchronization powered by Firebase Storage and Firebase Auth. Built with scalability and responsiveness in mind, Miro delivers a smooth chat experience with secure user authentication, media uploads, and real-time updates.",
  technologies: ["Flutter", "Firebase", "Firebase Auth", "Firebase Storage"],
  link: "https://github.com/TwinCity-1/MIRO-Social-App"
},
 {
    title: "E&M Tech Hub Landing Page",
    image: project2,
    description:
      "A landing page tailored for my company E&M Tech Hub featuring all their services, products and about",
    technologies: ["HTML", "React", "Nextjs", "Tailwind CSS"],
    link: "https://em-tech-house.vercel.app/"
  },
  {
    title: "Fintech-Pro",
    image: project8,
    description: "FintechPro is a modern, user-friendly financial technology (fintech) application designed to streamline and simplify the management of customers, accounts, and transactions. It is built using React for the frontend, Tailwind CSS for styling, and localStorage for data persistence. The application leverages the React Context API for state management and React Router for navigation, ensuring a seamless and efficient user experience",
    technologies: ["React", "TailwindCSS"],
    link: "https://fintech-pro.vercel.app/"


  },
   {
    title: "React Jobs Board",
    image: project1,
    description:
      "A fully functional job application board with features like jobs listing, adding jobs, editing, and deleting jobs. The backend is a JSON Server with a proxy",
    technologies: ["HTML", "React", "Tailwind CSS", "JSON Server"],
    link: "https://react-jobs-board.example.com"
  },
  {

    title: "Ivy-Link School Management System",
    image: project7,
    description: "IvyLink is a first-rate school management system designed for elite international schools in Nairobi. It streamlines administration, student enrollment, performance tracking, and communication between educators, students, and parents. Built with modern UI/UX principles, IvyLink ensures efficiency, security, and seamless management of school operations.",
    technologies: ["Next.js", "Shadcn", "React", "Tailwind", "Node.js"],
    link: "https://school-management-system-mu-ten.vercel.app/"


  },
  
  {
    title: "Torque Labs Admin Dashboard",
    image: project6,
    description: "A dashboard built to track the performance of a luxury car spare parts shop by managing inventory, orders, customers, and analytics. The purpose of this project was to experiment with fast project development by leveraging the high end Shadcn UI library and its reusable component blocks. The result is a modern and sleek looking UI.",
    technologies: ["Nextjs", "Shadcn", "React", "Tailwind"],
    link: "https://torque-labs-admin-dashboard.vercel.app/"
  },
  {
    title: "Financial Admin Dashboard",
    image: project5,
    description: "A dashboard for a financial Saas product where an admin can visualize the performance of the product including transactions, cash balances, users, and more. Incorporated recharts for visualization, tailwindcss for styling. The project is done in Nextjs",
    technologies: ["Nextjs", "React", "TailwindCSS", "Recharts",],
    link: "https://financial-admin-dashboard-hmjp.vercel.app/"
  },
 
 
  {
    title: "Loan Management System",
    image: project4,
    description:
      "A comprehensive loan management system that enables users to manage loans, repayments, and customer details efficiently.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Shadcn"],
    link: "https://loan-management-app-pearl.vercel.app/"
  }
];
export const CONTACT = {
  address: "Nairobi, Kenya ",
  phoneNo: "Personal: +254 716836186 ",
  officeNo: "Office Number: +254 716090099 ",
  email: "Personal: alexnjoroge102@gmail.com",
  officeemail: "Office Email:  clientcare.global@gmail.com",
};
