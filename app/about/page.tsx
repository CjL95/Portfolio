'use client'

import  React, {useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkItem } from '../components/About/work_item';
import { ListItem } from '../components/Common/list_item';
import styles from '../styles/about/aboutStyles.module.scss';

export default function About():JSX.Element{  
    const [exp, setExp]: any = React.useState([{
  "_id": {
    "$oid": "65db68cf3843196a98f23e07"
  },
  "name": "Online Presence Team Member",
  "company": "Success Centers",
  "description": "A short while after completing the Code on Point Program and being hired as a part-time employee, I was offered a full-time position as a member of the Online Presence Team, in addition to my work as a Program Assistant. This team is responsible for maintaining the organization's online presence, which includes the website, social media, and email marketing. I am responsible for maintaining the website, maintaining the organization's email marketing campaigns, and creating and maintining internal documents and forms. This position helped me develop my skills in development and online marketing. It has also helped me develop my soft skills, as I communicate with the organization's leadership on a regular basis.",
  "tenure": "3 years",
  "skills": [
    "HTML5",
    "ExpressJS",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Wordpress",
    "Linux",
    "Git",
    "MySQL",
    "PHP",
    "Bootstrap",
    "NodeJS"
  ]
},
{
  "_id": {
    "$oid": "65db68cf3843196a98f23e08"
  },
  "name": "Code On Point Web Development Program Assistant",
  "company": "Success Centers",
  "description": "After completing the first phase of the Code on Point program, my mentor dedicated part of my training to assisting participants in the first phase of the program. Doing this helped me develop soft skills like leadership, communication, and teamwork, and also introduced me to the stress of deadlines, and the burn of 'crunch time'. It also helped me hone my fundamental skills, since I was teaching them to others for several cohorts. Eventually, my skills and experience grew to the point where the organization offered me a position as a part-time employee, and I accepted. As a program assistant, I continue to tutor and train others, but I also develop course materials for all 3 phases of the web design curriculum, as well as assist the program director in refining the structure of the program as a whole. This work is very satisfying and fullfilling. It allows me to not only give back to the organization that trained me, but also to help others improve their own lives.",
  "tenure": "2 years (2022-2024)",
  "skills": [
    "HTML5",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Wordpress",
    "Linux",
    "Git",
    "PassportJS",
    "MySQL",
    "PHP",
    "Bootstrap",
    "NodeJS",
    "MongoDB",
    "ExpressJS",
    "HandlebarsJS",
    "AWS"
  ]
},
{
  "_id": {
    "$oid": "65db68cf3843196a98f23e0a"
  },
  "name": "Code on Point Web Development Trainee",
  "company": "Success Centers",
  "description": "Code on Point is a 3-phase technical education program offered by Success Centers. It spans 3 different disciplines: IT, Graphic Design, and Web Development. In the first phase, participants are exposed to all 3, and they close out the phase by working together to create a website. For the next 2 phases of the program, participants can choose a discipline to specialize in, and I chose web development, since my mentor was serving as the instructor. Over my time in the program, I learned how to work in both the MERN stack and the LAMP stack. I learned 3 different programming languages: JavaScript, PHP, and C#. I learned different frameworks, such as HandlebarsJS, ExpressJS, and ReactJS. I learned how to use various tools, such as Git, AWS, Wordpress, MongoDB, IndexedDB, and MySQL. I also learned about different design patterns like MVC and REST, and about coding techniques such as OOP and Functional Programming. But most importantly, I spent 2 years sharpening my problem-solving skills, and learning how to break problems down into single atomic steps.",
  "tenure": "2 years (2020-2022)",
  "skills": [
    "HTML5",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Git",
    "ExpressJS",
    "HandlebarsJS",
    "NodeJS",
    "Bootstrap"
  ]
},
{
  "_id": {
    "$oid": "65db68cf3843196a98f23e09"
  },
  "name": "Web Design Contractor",
  "company": "Shiny Red Robot",
  "description": "During my tenure in Code on Point, my mentor wanted to expose me to as much of the field as possible. So he offered me a contract position with his company, Shiny Red Robot. In this position, I was tasked with assisting him in building a custom Wordpress website for a client. I was responsible for designing the front-end of the site around the client's preferences and specifications, while also assisting my mentor in architecting the back-end. This was my first real-world experience with web development, and it taught me a lot about how to interface with clients, and how to conduct myself as a professional.",
  "tenure": "1 year (2021-2022)",
  "skills": [
    "HTML5",
    "CSS",
    "JavaScript",
    "Linux",
    "Apache",
    "Wordpress",
    "MySQL",
    "Bootstrap",
    "Sass"
  ]
}]);
    const [skills, setSkills]: any = React.useState([
        {
            name: "Anaconda",
            toggled: false,
            icon: "fa-brands fa-python",
            featured: false
        },
        {
            name: "Apache",
            toggled: false,
            icon: "fa-solid fa-server",
            featured: false
        },
        {
            name: "Axios",
            toggled: false,
            icon: "fa-solid fa-download",
        },
        {
            name: "AWS",
            toggled: false,
            icon: "fa-brands fa-aws",
            featured: false
        },
        {
            name: "Bootstrap",
            toggled: false,
            icon: "fa-brands fa-bootstrap",
            featured: false           
        },
        {
            name: "C#",
            toggled: false,
            icon: "fa-brands fa-microsoft",
            featured: false
        },
        {
            name: "Cheerio",
            toggled: false,
            icon: "fa-solid fa-code",
            featured: false
        },
        {
            name: "CSS",
            toggled: false,
            icon: "fa-brands fa-css3-alt",
            featured: true
        },
        {
            name: "Docker",
            toggled: false,
            icon: "fa-brands fa-docker",
            featured: false
        },
        {
            name: "ExpressJS",
            toggled: false,
            icon: "fa-brands fa-node-js",
            featured: false
        },
        {
            name: "Flask",
            toggled: false,
            icon: "fa-solid fa-flask",
            featured: false
        },
        {
            name: "Git",
            toggled: false,
            icon: "fa-brands fa-git",
            featured: false
        },
        {
            name: "Handlebars",
            toggled: false,
            icon: "fa-solid fa-gears",
            featured: false
        },
        {
            name: "HTML5",
            toggled: false,
            icon: "fa-brands fa-html5",
            featured: true
        },
        {
            name: "JavaScript",
            toggled: false,
            icon: "fa-brands fa-square-js",
            featured: true
        },
        {
            name: "Microservices",
            toggled: false,
            icon: "fa-solid fa-code-branch",
            featured: false
        },
        {
            name: "MongoDB",
            toggled: false,
            icon: "fa-solid fa-leaf",
            featured: true
        },
        {
            name: "MySQL",
            toggled: false,
            icon: "fa-solid fa-database",
            featured: true
        },
        {
            name: "NextJS",
            toggled: false,
            icon: "fa-brands fa-react",
            featured: false
        },
        {
            name: "NodeJS",
            toggled: false,
            icon: "fa-brands fa-node-js",
            featured: true
        },
        {
            name: "PassportJS",
            toggled: false,
            icon: "fa-solid fa-key",
            featured: false
        },
        {
            name: "PHP",
            toggled: false,
            icon: "fa-brands fa-php",
            featured: true
        },
        {
            name: "Prisma",
            toggled: false,
            icon: "fa-solid fa-database",
            featured: false
        },
        {
            name: "Python",
            toggled: false,
            icon: "fa-brands fa-python",
            featured: false
        },
        {
            name: "ReactJS",
            toggled: false,
            icon: "fa-brands fa-react",
            featured: true
        },
        {
            name: "Sass",
            toggled: false,
            icon: "fa-brands fa-sass",
            featured: true
        },
        {
            name: "TypeScript",
            toggled: false,
            icon: "fa-brands fa-react",
            featured: true
        },
        {
            name: "WAMP",
            toggled: false,
            icon: "fa-solid fa-server",
            featured: false
        },
        {
            name: "WordPress",
            toggled: false,
            icon: "fa-brands fa-wordpress",
            featured: false
        }
    ]);
    const [certs, setCerts]: any = React.useState([{
        title: "Responsive Web Design",
        company: "FreeCodeCamp",
        icon: "fa-brands fa-free-code-camp",
        link: "https://www.freecodecamp.org/certification/cjl95/responsive-web-design"
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        company: "FreeCodeCamp",
        icon: "fa-brands fa-free-code-camp",
        link: "https://www.freecodecamp.org/certification/cjl95/javascript-algorithms-and-data-structures"
    },
    {
        title: "IT Fundamentals (ITF+)",
        company: "CompTIA",
        icon: "fa-solid fa-computer",
        link: "https://www.credly.com/badges/e15061d6-377f-45b2-9873-87d092252a57?source=linked_in_profile"
    }]);
    const [hide, setHide]: any = React.useState(true);
    const [dis, setDis]: any = React.useState(false);

    const allSkillsViz = () => {
        setHide(!hide);
        setDis(true);
    };
    /*const getExp = async () => {
        const exp = await fetch('./api/experience', { //retrieves projects from db
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json'
            }
        });
        return exp.json();
    }
    useEffect(()=>{
        getExp().then((data: any)=>{
            setExp(data.exp);
        });
    }, []);*/
    useEffect(()=>{
        const timer = setTimeout(() => {
            setDis(false);
        }, 200);
        return () => clearTimeout(timer);
    },[hide])

    return(
        <AnimatePresence>
            <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container pgAbout pgMain">
                <section className={`row ${styles.featSkills}`}>
                    <div className='col-12 mb-3'>
                        <h2 className="sectionTitle mb-3">Featured Skills</h2>
                    </div>
                    {
                        skills.map((i: any, index: number) => {
                            return i.featured ? (<ListItem key={index} item={i} colConfig={'col-12 col-md-4 '}/>): null;
                        })
                    }
                </section>
                <section className={`row ${styles.allSkillBtn}`}>
                    <figure className={`col-12`}>
                        <div className={`btn-group expandBtnGroup`} role="group" aria-label="expandSkills">
                            <button className={`btn btn-outline-light mb-3 expandMainBtn`} type="button" onClick={allSkillsViz}>
                                ALL SKILLS
                            </button>
                            <button className={`btn btn-outline-light mb-3 expandChevBtn`} type="button" onClick={allSkillsViz}>
                                <i className={`fa-solid fa-chevron-right btnRotate${hide}`}></i>
                            </button>
                        </div>
                    </figure>
                </section>
                <section className={`row ${styles.allSkills} ${hide ? styles.hideThis : styles.showThis}`} id="allSkills">
                    <div className='col-12'>
                        <article className={`row ${styles.skillItemWrapper}`}>
                            {
                                skills.map((i: any, index: number) => {
                                    return (<ListItem key={index} item={i} colConfig={'col-6 col-md-4 '}/>);
                                })
                            }
                        </article>
                    </div>
                </section>
                <section className={`row my-3 ${styles.expSection}`}>
                    <h2 className="sectionTitle mb-3">Experience</h2>
                    { 
                        exp? exp.map((i: any, index: number) => { 
                            return(<WorkItem key={index} info={i} skills={i.skills}/>);
                        }) : <p className="text-center">No experience found.</p>
                    }
                </section>
                <section className={`row ${styles.certRow}`}>
                    <h2 className="sectionTitle mb-3">Certifications</h2>
                    {
                        certs.map((i: any, index: number) => {  
                            return(<ListItem key={index} item={i} colConfig={'col-12 col-md-6 '}/>);
                        })
                    }
                </section>
            </motion.main>
        </AnimatePresence>
    );
};