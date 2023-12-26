import { t } from "maath/dist/misc-19a3ec46.esm";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    java,
    python,
    freelance,
    postman,
    qmark,
    tastypython,
    phishbuster,
    drivesync,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Cloud Solutions Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student Leader",
      company_name: "Postman",
      icon: postman,
      iconBg: "#E6DEDD",
      date: "May 2022 - Dec 2023",
      points: [
        "Facilitating educational workshops to demystify APIs, providing students with the skills to create resilient and innovative software solutions.",
        "Conducting informative sessions on API intricacies, empowering students to master the art of leveraging APIs in software development.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "Mar 2021 - Present",
      points: [
        "Proficient in developing custom websites and software solutions tailored to client specifications.",
        "Expertise in the complete web dev lifecycle, from conceptualization to deployment.",
        "Skillful execution of client-centric digital marketing strategies to attract and acquire new clients.",
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "TastyPython",
      description:
        "Embark on a flavorful adventure in the world of Python programming with TastyPython.tech, a dynamic website meticulously crafted using WordPress and PHP. As the proud creator of this engaging platform, I've blended the power of these technologies to deliver an immersive and accessible learning experience for aspiring Python enthusiasts.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "cms",
          color: "pink-text-gradient",
        },
      ],
      image: tastypython,
      source_code_link: "https://tastypython.tech/",
      demo_code_link: "https://tastypython.tech/",
    },
    {
      name: "DriveSync",
      description:
        "The DriveSync project aims to create a Car Rating App enabling users to review and rate cars from 2023 and beyond. The application offers users the ability to browse and access detailed information about various car models, including ratings, prices, and specifications.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "javafx",
          color: "orange-text-gradient",
        },
        {
          name: "git",
          color: "pink-text-gradient",
        },
      ],
      image: drivesync,
      source_code_link: "https://github.com/nayanmapara/DriveSync",
      demo_code_link: "https://github.com/nayanmapara/DriveSync?tab=readme-ov-file#project-images",
    },
    {
      name: "PhishBuster",
      description:
        "PhishBuster is a powerful open-source tool designed to combat the rising threat of phishing attacks. The aim of PhishBuster is to empower users to identify and report potential phishing sites, contributing to a collective defense against online threats.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        
      ],
      image: phishbuster,
      source_code_link: "https://github.com/nayanmapara/PhishBuster",
      demo_code_link: "https://github.com/nayanmapara/PhishBuster?tab=readme-ov-file#sites",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };