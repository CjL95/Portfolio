'use client'

import React from 'react';
import { ProjectItem } from '../components/Projects/project_item';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/projects/projectStyles.module.scss';

export default function Projects():JSX.Element{
    const [projects, setProjects] = React.useState([
        {
            name: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nis",
            link: "https://www.google.com",
            image: "http://localhost:3000/inc/img/800-800.png",
            skills: ["HTML", "CSS", "JavaScript", "ReactJS"]
        },
        {
            name: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nis",
            link: "https://www.google.com",
            image: "http://localhost:3000/inc/img/800-800.png",
            skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Docker"]
        },
        {
            name: "Project 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nis",
            link: "https://www.google.com",
            image: "http://localhost:3000/inc/img/800-800.png",
            skills: ["HTML", "CSS", "JavaScript", "ReactJS"]
        },
        {
            name: "Project 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nis",
            link: "https://www.google.com",
            image: "http://localhost:3000/inc/img/800-800.png",
            skills: ["AWS", "Git", "C#", "HandlebarsJS"] 
        },
        {
            name: "Project 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nis",
            link: "https://www.google.com",
            image: "http://localhost:3000/inc/img/800-800.png",
            skills: ["HTML", "PHP", "WordPress", "Apache"]    
        }
    ]);
    const [skills, setSkills]:any = React.useState([
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

    const btnToggle = (e: any) => {
        if(!skills)return null;
        const skillChoice = skills.findIndex((i: any)=> i.name === e.target.id);
        setSkills((prev: Array<{name: string, toggled: boolean, icon: string}>)=> {
            if(!prev[skillChoice]) return [...prev];
            prev[skillChoice].toggled = !prev[skillChoice].toggled;
            return [...prev];
        });
    };

    const clearFilters = ():void => {
        let tempSkills = skills;
        setSkills((prev: any)=>{ 
            tempSkills.forEach((skill: any)=> skill.toggled = false);
            prev = tempSkills; 
            return [...prev];
        });
    };
    return(
        <AnimatePresence>
            <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}className="container pgProjects pgMain">
                <section className={`row ${styles.projectFilterSidebar}`}>
                    <div className={`col-12 ${styles.projectFilter}`}> 
                        <h2 className="text-center">View Projects By Filter</h2>
                        <div className="row">
                            {
                                skills.map((skill: any, index: any):JSX.Element => {
                                    return(
                                            <button key={index} className={
                                                skill.toggled ? 
                                                `btn btn-light col-6 col-md-3 col-lg-2 px-0 ${styles.filterButton}` : 
                                                `btn btn-outline-light col-6 col-md-3 col-lg-2 px-0 ${styles.filterButton}`
                                            } 
                                            id={skill.name} onClick={btnToggle}>
                                                <i key={index + 1} className={skill.toggled ? `${styles[skill.icon]} text-dark` : styles[skill.icon]}></i>  {skill.name}
                                            </button> 
                                    );
                                })
                            }
                            <button className="btn btn-outline-light col-6 col-md-3 col-lg-2 px-0 my-3" onClick={clearFilters}>
                                X Clear Filters
                            </button>
                        </div>
                    </div>
                </section>
                <section className={`row ${styles.projectList}`}>
                    {
                        projects.map((project: any, index: any):JSX.Element => {
                            let skillsMatch = skills.filter((skill: any)=> project.skills.includes(skill.name));
                            let toggledSkills = skills.filter((skill: any)=> skill.toggled);
                            return toggledSkills.every((i: any)=> skillsMatch.includes(i)) ? <ProjectItem key={index} content={project} /> : 
                                skills.every((i:any)=>!i.toggled) ? <ProjectItem key={index} content={project} />: <></>;
                        })
                    }
                </section>
            </motion.main>
        </AnimatePresence>
    );
};