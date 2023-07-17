import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

let jobs = [
    {
        name: "Online Presence Team Member",
        company: "Success Centers",
        description: "A short while after completing the Code on Point Program and being hired as a part-time employee, I was offered a full-time position as a member of the Online Presence Team, in addition to my work as a Program Assistant. This team is responsible for maintaining the organization's online presence, which includes the website, social media, and email marketing. I am responsible for maintaining the website, maintaining the organization's email marketing campaigns, and creating and maintining internal documents and forms. This position helped me develop my skills in development and online marketing. It has also helped me develop my soft skills, as I communicate with the organization's leadership on a regular basis.",
        tenure: "1 year",
        skills: ["HTML5","ExpressJS","CSS","JavaScript","ReactJS","Wordpress","Linux","Git","MySQL","PHP","Bootstrap","NodeJS"]
    },
    {
        name: "Code On Point Web Development Program Assistant",
        company: "Success Centers",
        description: "After completing the first phase of the Code on Point program, my mentor dedicated part of my training to assisting participants in the first phase of the program. Doing this helped me develop soft skills like leadership, communication, and teamwork, and also introduced me to the stress of deadlines, and the burn of 'crunch time'. It also helped me hone my fundamental skills, since I was teaching them to others for several cohorts. Eventually, my skills and experience grew to the point where the organization offered me a position as a part-time employee, and I accepted. As a program assistant, I continue to tutor and train others, but I also develop course materials for all 3 phases of the web design curriculum, as well as assist the program director in refining the structure of the program as a whole. This work is very satisfying and fullfilling. It allows me to not only give back to the organization that trained me, but also to help others improve their own lives.",
        tenure: "1.5 years",
        skills: ["HTML5", "CSS","JavaScript","ReactJS","Wordpress","Linux","Git","PassportJS","MySQL","PHP","Bootstrap","NodeJS","MongoDB","ExpressJS","HandlebarsJS","AWS"]
    },
    {
        name: "Web Design Contractor",
        company: "Shiny Red Robot",
        description: "During my tenure in Code on Point, my mentor wanted to expose me to as much of the field as possible. So he offered me a contract position with his company, Shiny Red Robot. In this position, I was tasked with assisting him in building a custom Wordpress website for a client. I was responsible for designing the front-end of the site around the client's preferences and specifications, while also assisting my mentor in architecting the back-end. This was my first real-world experience with web development, and it taught me a lot about how to interface with clients, and how to conduct myself as a professional.",
        tenure: "1 year",
        skills: ["HTML5", "CSS","JavaScript","Linux","Apache","Wordpress","MySQL", "Bootstrap", "Sass"]
    },
    {
        name: "Code on Point Web Development Trainee",
        company: "Success Centers",
        description: "Code on Point is a 3-phase technical education program offered by Success Centers. It spans 3 different disciplines: IT, Graphic Design, and Web Development. In the first phase, participants are exposed to all 3, and they close out the phase by working together to create a website. For the next 2 phases of the program, participants can choose a discipline to specialize in, and I chose web development, since my mentor was serving as the instructor. Over my time in the program, I learned how to work in both the MERN stack and the LAMP stack. I learned 3 different programming languages: JavaScript, PHP, and C#. I learned different frameworks, such as HandlebarsJS, ExpressJS, and ReactJS. I learned how to use various tools, such as Git, AWS, Wordpress, MongoDB, IndexedDB, and MySQL. I also learned about different design patterns like MVC and REST, and about coding techniques such as OOP and Functional Programming. But most importantly, I spent 2 years sharpening my problem-solving skills, and learning how to break problems down into single atomic steps.",
        tenure: "2 years (2020-2022)",
        skills: ["HTML5", "CSS","JavaScript","MongoDB","Git","ExpressJS","HandlebarsJS","NodeJS","Bootstrap"]
    }
];

let projects = [
    {
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "https://replit.com/@Cjlong95/MazeGame#README.txt",
        name: "Maze Project",
        description: "As part of the first phase of my Code on Point training, I was tasked with expanding on a maze game built by TheCodeDepository on codepen: https://codepen.io/TheCodeDepository/pen/jKBaoN?page=8 . I had to add a timer, a pause button, and a radom difficulty button. I also had to modify the assets to include custom sprites. I was able to complete the project in a few days, and I even had extra time to modify the animated background to reflect the difficulty chosen by the user. It was a great introduction to JavaScript and DOM manipulation. I returned to the project in 2023 to refactor and clean up my old code.",
        contribution: "Front-end Developer",
        skills: ["HTML5","CSS","JavaScript"],
        type: "education"
    },
    {
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "https://replit.com/@Cjlong95/Carmatch#README.md",
        name: "Carmatch",
        description: "This was my first final project project in the Code On Point Web Development Program. I worked on it with a team of 6 other students. It was the first full-stack application that I ever contributed to. The project is built with the MERN stack (excluding react) and uses HandlebarsJS as a template engine. It allows users to search for cars based on their preferences. It can also match a car to the user based on how they respond to questions on a personality quiz. I was responsible for leading the back-end development team, which consisted of 2 other students. I delegated tasks to each of us, while also assistng my teammates with the more difficult tasks. I also assisted the front-end team with the polishing and final touches to the user interface.",
        contribution: "Back-end Lead, Back-end Developer, Front-end Developer",
        skills: ["HTML5","CSS","JavaScript","NodeJS","ExpressJS","MongoDB","Bootstrap","Git"],
        type: "education"
    },
    {
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "#",
        name: "Project Insomnia",
        description: "I worked on this with my mentor and my fellow phase 2 Code on Point participants. It is a business networking site designed to allow users to create accounts and showcase their projects. It uses PassportJS for user authentication. My team and I were responsible for building both the front-end and the back-end of the site. I was responsible for implementing the user account system and implementing authentication middleware that controlled access to pages based on the user's role.",
        contribution: "Full-stack Developer",
        skills: ["HTML5","CSS","JavaScript","NodeJS","Bootstrap","Git","MongoDB","ExpressJS","PassportJS","HandlebarsJS"],
        type: "education"
    },
    {
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "#",
        name: "Autono",
        description: "This is another Code on Point final project, but this time I was assisting the cohort that came after mine. This was a MERN application (excluding react) using HandebarsJS as a template engine. It was made to be a futuristic ride share service with a user account system that offered rides in self-driving cars. It was inspired by sites like Uber and Lyft. I served as Project Manager, Back-end Lead, and Git Master for this project, and was responsible for interfacing with a mock client for style and general design direction, assigning tasks to back-end team members in order to ensure completion of the minimum viable product (MVP), and assisting team members on both ends with tasks, especially the back-end team. This was my first time architecting a full-stack application in the MVC pattern, and also my first time utilizing sessions and cookies to manage user authentication.",
        contribution: "Project Manager, Full-stack developer, Git Master",
        skills: ["NodeJS","ExpressJS","MongoDB","Bootstrap","Git","HTML5","CSS","JavaScript","PassportJS"],
        type: "education"
    },
    {
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "#",
        name: "Rocko Fitness",
        description: "This was the first Code on Point program I'd contributed to as a Program Assistant. I served as the Project Manager and Git Master, and I initially played more of an architecht role, defining what the team was to create and the milestones they needed to hit. However, as the project progressed, I stepped in to lead the Back-end team as well. This project was a full-stack application built with the stack that Code on Point typically teaches: MongoDB, NodeJS, ExpressJS and HandlebarsJS. We also  It was a fitness app that allowed users to create accounts, log their workouts, and track their progress. It also allowed users to discover a workout plan for their specific body type and time constraints.",
        contribution: "Project Manager, Back-end Lead, Git Master",
        skills: [],
        type: "education"
    },
    {
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "#",
        name: "Shiny Sounds",
        description: "This was a project that I worked on with my mentor during my phase 2 of the Code on Point program. It is a React site that allows users to browse and purchase beats, similar to BeatStars. For now, it is a static site, but I plan on revisiting it in the future to add a back-end and make it a full-stack application. This project was my first time working with React.",
        contribution: "Front-end Developer",
        skills: ["HTML5","CSS","JavaScript","NodeJS","ReactJS","Bootstrap","Git"],
        type: "education"
    },
    
    {
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "https://replit.com/@Cjlong95/moonkinWebsim#README.txt",
        name: "WoW TBC Moonkin Websim",
        description: "This was a community project that I worked on with a team of 2 other developers. It is an online simulator for the MMORPG game World of Warcraft. It determines how much damage per second a certain class of character can deal out, based on their equipment, talents, what they are fighting, and the length of the fight. It was intended to be a tool to help players make educated decisions in-game about what items to seek out. I created the front-end GUI, while my teammates were responsible for coding the simulator and building the back-end. It is a Flask app built with vanilla HTML, CSS, JavaScript and Bootstrap on the front-end, with the backend written in Python. Though most of my work involved the standard front-end technologies I had worked with before, I did occasionally have to tweak the Python back-end to accept input properly from the front-end. It was my first time working with Flask, and my first time working with Python outside of college. It was also my first time working on a project that was not for school or work.",
        contribution: "Front-end Developer",
        skills: ["HTML5","CSS","JavaScript","Python","Flask","Bootstrap","Git","Anaconda"],
        type: "community"
    },
    
    {
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "#",
        name: "Roar Project",
        description: "This was a site that I helped my mentor build for a client of his company, Shiny Red Robot. It is a marketing site for a business consultant firm. It is a LAMP site built with a custom Wordpress theme. I was responsible for building the front-end around the client's specifications, while my mentor supervised me and architected the back-end. This was my first exposure to real-world web development, and it was my first time building a full website with Wordpress. It was also my first time working with a client.",
        contribution: "Full-stack Developer",
        skills: ["HTML5","CSS","JavaScript","PHP","Wordpress","MySQL","Bootstrap","Git","AWS","Linux","Apache"],
        type: "production"
    },
    {
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "https://github.com/CjL95/webScraperAttempt2",
        name: "Web Scraper",
        description: "This is a tool I developed to help me migrate content between sites. At first, I made it by following directions from a tutorial on web scraping, and it did what I needed it to. But when I needed to use it again a bit later, I wasn't able to, since it had been hard coded to scrape a specific site with a specific structure. Also, my skills had grown to the point that I could see how verbose and awkward that solution was overall, so I rewrote the tool in Typescript from scratch, with an emphasis on keeping it lean and dynamic so it can be used again.",
        contribution: "Back-end Developer",
        skills: ["Typescript","NodeJS","Git","Axios","Cheerio"],
        type: "tool"
    },
    /*{
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "#",
        name: "Font Compare Tool",
        description: "This is a tool I worked on with my mentor to solve a problem we were facing concerning font selection. We wanted to be able to put two paragraphs using different fonts side by side so we could see how they fit together. We also wanted to be able to compare them to other font pairings. We searched for an online tool, but did not find anything that exactly suited out needs, so we created one ourselves in PHP.",
        contribution: "Front-end Developer",
        skills: ["HTML5","CSS","PHP","Apache","Git"],
        type: "tool"
    },*/
    {
        image: "https://portfolio2023bucket.s3.amazonaws.com/",
        link: "#",
        name: "Portfolio Website",
        description: "The site you're visiting right now! I built this site to showcase my skills and experience, and to serve as a hub for my online presence. It is a NextJS site built with ReactJS, and it is hosted on AWS. What you are seeing is the first iteration of it. I plan on updating it as my skills and experience grow.",
        contribution: "Full-stack Developer",
        skills: ["HTML5","CSS","JavaScript","ReactJS","NextJS","Bootstrap","MongoDB","Prisma"],
        type: "personal"
    }
];




