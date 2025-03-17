import project1 from "../assets/projects/project2.png";
import project2 from "../assets/projects/project-1.png";
import project3 from "../assets/projects/4.png";
import project4 from "../assets/projects/12.png";
import project5 from "../assets/projects/5.png"
import project6 from "../assets/projects/6.png"
import project7 from "../assets/projects/7.png"
import project8 from "../assets/projects/8.png"



export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting visually appealing and user-friendly web applications. With hands-on experience in web design and development, I specialize in technologies like JavaScript, React, Next.js, HTML, and CSS. I have built and maintained websites, ensuring responsive design, optimized performance, and seamless user experiences. My goal is to leverage my expertise in frontend development to create innovative and scalable solutions that drive business growth and deliver exceptional user experiences. I am a quick learner, adaptable to new technologies, and committed to delivering high-quality results in every project I undertake`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly digital solutions. With hands-on experience in web design, software development, and IT support, I have worked with technologies such as JavaScript, React, Next.js, WordPress, Elixir, and PostgreSQL. My journey in technology began with a deep curiosity for problem-solving, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to innovative projects.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - Current",
    role: "Frontend Developer",
    company: "E&M Technology House - Tatu City",
    description: `Designs and develops dynamic, responsive web applications in finance and banking. Implements modern UI/UX best practices, optimizes application performance, and integrates APIs for seamless functionality. Collaborates with backend engineers and stakeholders to deliver scalable, secure, and efficient solutions.`,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "REST API"]
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
    title: "Fintech-Pro",
    image: project8,
    description: "FintechPro is a modern, user-friendly financial technology (fintech) application designed to streamline and simplify the management of customers, accounts, and transactions. It is built using React for the frontend, Tailwind CSS for styling, and localStorage for data persistence. The application leverages the React Context API for state management and React Router for navigation, ensuring a seamless and efficient user experience",
    technologies: ["React", "TailwindCSS"],
    link: "https://fintech-pro.vercel.app/"


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
    title: "React Jobs Board",
    image: project1,
    description:
      "A fully functional job application board with features like jobs listing, adding jobs, editing, and deleting jobs. The backend is a JSON Server with a proxy",
    technologies: ["HTML", "React", "Tailwind CSS", "JSON Server"],
    link: "https://react-jobs-board.example.com"
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
  phoneNo: "+254 716836186 ",
  email: "alexnjoroge102@gmail.com",
};
