import {
    mobile,
    // uiux,
    cloud,
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
    sheridancollege,
    // qmark,
    tastypython,
    phishbuster,
    signease,
    // threejs,
    github,
    linkedin,
    twitter,
    instagram,
    aws,
    // gcp,
    azure,
    heroku,
    clang,
    csharp,
    mysql,
    angular,
    bootstrap,
    adobexd,
    jira,
    linux,
    windows,
    devops,
    agile,
    scrum,
    restapi,
    microservices,
    prototyping,
    cms,
    Payal,
    Tejas,
    headstarter,
    northernwhisper,
    UoH,
    drivesync,
    whisperbackend,
    squad,
    geeselovemerch,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "contact",
      title: "Connect",
    },
  ];

  export const socialLinks = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/nayanmapara/",
      icon: linkedin,
    },
    {
      name: "github",
      url: "https://github.com/nayanmapara",
      icon: github,
    },
    {
      name: "X",
      url: "https://twitter.com/nayanmapara",
      icon: twitter,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/ydkm404/",
      icon: instagram,
    },
  ];
  
  const services = [
    {
      title: "CS & Cloud Computing Student",
      icon: cloud,
    },
    {
      title: "Prev SWE Fellow",
      icon: headstarter,
    },
    {
      title: "3x Hackathon Winner",
      icon: web,
    },
    {
      title: "Freelance Developer",
      icon: mobile,
    },
    
  ];

  const backendTech = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "C",
      icon: clang
    },
    {
      name: "C#",
      icon: csharp
    },
    {
      name: "MySQL",
      icon: mysql
    },
    {
      name: "MongoDB",
      icon: mongodb
    },
    {
      name: "Amazon Web Services",
      icon: aws
    },
    {
      name: "Azure",
      icon: azure
    },
    {
      name: "Heroku",
      icon: heroku
    }
  ]

  const frontendTech = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React.js",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: angular
    },
    {
      name: "Tailwind CSS",
      icon: tailwind
    },
    {
      name: "Bootstrap",
      icon: bootstrap
    },
    {
      name: "Figma",
      icon: figma
    },
    {
      name: "Adobe XD",
      icon: adobexd
    },
  ]

  const otherTech = [
  {
    name: "Git",
    icon: git
  },
  {
    name: "GitHub",
    icon: github
  },
  {
    name: "Jira",
    icon: jira
  },
  {
    name: "Postman",
    icon: postman
  },
  {
    name: "Docker",
    icon: docker
  },
  {
    name: "Linux",
    icon: linux
  },
  {
    name: "Windows",
    icon: windows
  },
  {
    name: "DevOps",
    icon: devops
  },
  {
    name: "Agile",
    icon: agile
  },
  {
    name: "Scrum",
    icon: scrum
  },
  {
    name: "Designing Restful APIs",
    icon: restapi
  },
  {
    name: "Microservices",
    icon: microservices
  },
  {
    name: "UI Prototyping",
    icon: prototyping
  },
  {
    name: "CMS (WordPress, Wix)",
    icon: cms
  }
  ]
  
  const experiences = [
    {
      title: "Software Engineering Fellow",
      company_name: "Headstarter AI",
      icon: headstarter,
      iconBg: "#121211", 
      date: "July - August 2024",
      points: [
        "Engineered AI applications with Next.js, OpenAI, Pinecone, and Stripe, supporting over 1,000 users.",
        "Led full-cycle development from design to deployment, mentoring 4+ fellows while using MVC patterns and Agile.","Leveraged AWS (EC2, S3, Lambda, SageMaker) for scalable cloud infrastructure, ensuring reliable AI deployments."
      ],
      type: 1,
    },
    {
      title: "Student Leader",
      company_name: "Postman",
      icon: postman,
      iconBg: "#E6DEDD",
      date: "May 2022 - Dec 2023",
      points: [
        "Facilitating educational workshops to demystify APIs, providing students with the skills to create resilient and innovative software solutions.",
        "Conducting informative sessions on API intricacies, empowering students to master the art of leveraging APIs in software development."
      ],
      type: 3,
    },
    {
      title: "Workshop Leader",
      company_name: "University of Hyderabad",
      icon: UoH,
      iconBg: "#E6DEDD",
      date: "Mar 2024",
      points: [
        "Led a web development workshop for 30+ students, delivering hands-on training in HTML, CSS, and JavaScript fundamentals, achieving a 4.7 out of 5 rating for clear explanations and effective teaching methods."
      ],
      type: 3,
    },
    {
      title: "Honours Bachelor of Computer Science (Specialty in Cloud Computing)",
      company_name: "Sheridan College",
      icon: sheridancollege,
      iconBg: "#193a67",
      date: "Sep 2024 - Apr 2027",
      points: [
        "Cloud Solutions Specialist: Analyzes, strategizes, designs, and executes computer systems and cloud solutions.",
        "Specializes in AWS and Azure for scalable and efficient cloud architectures."
      ],
      type: 2,
    },
    {
      title: "Computer Programming Diploma",
      company_name: "Sheridan College",
      icon: sheridancollege,
      iconBg: "#193a67",
      date: "Jan 2023 - Apr 2024",
      points: [
        "Full-stack Expertise: Proficient in Java, C, and C# for robust software and networking. Skilled in Spring Boot, PHP, and Angular, ensuring comprehensive full-stack development.",
        "Agile Project Management: Experience in Agile and Waterfall methodologies. Efficiently uses Jira for project management, ensuring adaptability to evolving software development lifecycles.",
        "Collaborative Problem-solver: Adept at using tools like Jira for collaborative problem-solving."
      ],
      type: 2,
    }
  ];  
  
  const testimonials = [
    {
      testimonial:
        "Nayan Mapara is highly knowlegeble about the web. He skillfully made a very good and highly secure website website for my Computer Science education platform TastyPython. It was done within a few days and the website had more features than I could imagine. Nayan's style of work is unique, he will not bother you for small details about the website along the course of development, but ask all questions together initially and at a later stage. This ensures that you arent being bothered too much all the time, and the work is still on. Nayan was kind enough to not only make the website for me, but also taught me how to make a personal blog with a free domain! He ensures that all your doubts are clear, and the website was easy to operate post development.",
      name: "Tejas Kannampuzha",
      designation: "Founder",
      company: "TastyPython",
      image: Tejas,
      url: "https://www.linkedin.com/in/tejas-kannampuzha-141214261/",
    },
    {
      testimonial:
        "In todays' world where companies lack team members who add value to the organisation I must say Nayan Mapara is one of those exceptional individuals who master in deep technical knowledge, communication along with a humble nature. He uses his abilities not only to contribute meaningfully to societal projects but also to address the technical queries of his peers. Since our time in secondary high school, his passion for Postman, APIs and contributions in dynamic workshops has always grabbed attention of various technophiles and educators alike. It became evident early on that he is undoubtedly an undefeated and reliable individual who is sure shot to excel as a fine IT professional regardless of the choosen domain. Having worked with him I can at least remark that collaborating with him was a true pleasure. He effortlessly fulfills the role of a team leader, friend, and mentor - creating a harmonious and productive work environment. Additionally, hosting dynamic workshops to demystify APIs and imparting skills to fellow students showcases his commitment to foster creativity and confidence in software engineering. In essence, Nayan Mapara is a dynamic individual with, a magic in his own right and a highly promising asset.",
      name: "Payal Lenka",
      designation: "Student",
      company: "RNS Institute of Technology",
      image: Payal,
      url: "https://www.linkedin.com/in/payal-lenka/",
    },
  ];
  
  const projects = [
    {
      "name": "Geese Love Merch (Winner at Hack the North 2024)",
      "description":
        "Geese Love Merch is set in the legendary Lazarus Hall, starring our main character—the iconic goose on wheels (yes, it's as awesome as it sounds). The game’s objective? Fire merch at sponsors that pop up in the seats every 6 seconds. The more sponsors you hit, the closer you get to securing your dream internship—the ultimate prize!",
      "tags": [
        {
          "name": "C#",
          "color": "blue-text-gradient"
        },
        {
          "name": "Unity",
          "color": "green-text-gradient"
        },
        {
          "name": "3d Game Development",
          "color": "pink-text-gradient"
        }
      ],
      "image": geeselovemerch,
      "source_code_link": "https://github.com/nayanmapara/GeeseLoveMerch",
      "demo_code_link": "https://devpost.com/software/gesse-love-merch"
    },    
    {
      name: "SignEase (Winner at DeerHacks III)",
      description:
        "A dynamic web app for mastering sign language, using Python-based Hand Detection, Mediapipe for accurate tracking, and Three.js for 3D visualization. It features a MongoDB and Flask backend for storing search histories and coordinate data for 3D hand animations.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "orange-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: signease,
      source_code_link: "https://github.com/DeerHacks2024",
      demo_code_link: "https://devpost.com/software/signease-dmx6er",
    },
    {
      name: "Drive Sync - Car Rating App",
      description:
        "The Drive Sync project aims to create a Car Rating App enabling users to review and rate cars from 2023 and beyond. The application offers users the ability to browse and access detailed information about various car models, including ratings, prices, and specifications.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "javafx",
          color: "green-text-gradient",
        },
        {
          name: "fileio",
          color: "pink-text-gradient",
        },
      ],
      image: drivesync,
      source_code_link: "https://github.com/nayanmapara/DriveSync",
      demo_code_link: "https://github.com/nayanmapara/DriveSync",
    }
  ];

  
  export { services, experiences, testimonials, projects, backendTech, frontendTech, otherTech };