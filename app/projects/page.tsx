'use client'

import React, { useEffect } from 'react';
import { ProjectItem } from '../components/Projects/project_item';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/projects/projectStyles.module.scss';

export default function Projects():JSX.Element{
    const [projects, setProjects] = React.useState([
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
            name: "Wordpress",
            toggled: false,
            icon: "fa-brands fa-wordpress",
            featured: false
        }
    ]);
    const [hide, setHide]: any = React.useState(true);
    const [dis, setDis]: any = React.useState(false);

    const btnToggle = (e: any) => {
        if(!skills)return null;
        const skillChoice = e.target.id;
        setSkills((skills.map((skill: any)=>{
            if(skill.name === skillChoice) skill.toggled = !skill.toggled;
            return skill;
        })))
    };
    const clearFilters = ():void => {
        setSkills(skills.map((skill: any)=>{
            return {
                ...skill,
                toggled: false
            }
        }))
    };

    const allSkillsViz = () => {
        setHide(!hide);
        setDis(true);
        return;
    };

    const getProjects = async () => {
        const proj = await fetch('/api/projects', { //retrieves projects from db
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json'
            }
        });
        return proj.json();
    }
    useEffect(()=>{
        getProjects().then((data: any)=>{
            setProjects(data.proj);
            console.log('projects set');
        });
    }, []);
    /*getProjects().then((data: any)=>{
        setProjects(data.proj);
    });*/
    return(
        <AnimatePresence>
            <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}className="container pgProjects pgMain">
                <section className={`row ${styles.projectFilterSidebar}`}>
                    <div className='col-12 mb-3'>
                        <h2 className="sectionTitle mb-3">My Projects</h2>
                    </div>
                    <figure className={`col-12 ${styles.filterBtnWrapper}`}>
                        <div className={`btn-group expandBtnGroup`} role="group" aria-label="expandSkills">
                            <button className={`btn btn-outline-light expandMainBtn`} type="button" onClick={allSkillsViz}>
                            VIEW PROJECTS BY FILTER
                            </button>
                            <button className={`btn btn-outline-light expandChevBtn`} type="button" onClick={allSkillsViz}>
                                <i className={`fa-solid fa-chevron-right ${hide ? `btnRotatetrue` : `btnRotatefalse`}`}></i>
                            </button>
                        </div>
                        <button className={`${styles.clearFilterButton} btn btn-outline-light text-white`} onClick={clearFilters}>
                         Clear Filters
                        </button>
                    </figure>
                    <div className={`col-12 ${styles.projectFilter}`}> 
                        <div className={`row g-2 ${styles.allSkills} ${hide ? styles.hideThis : styles.showThis}`}>
                            {
                                skills.map((skill: any, index: any):JSX.Element => {
                                    return(
                                            <button key={index} className={
                                                skill.toggled ? 
                                                `btn btn-light col-6 col-md-4 px-0 ${styles.filterButton}` : 
                                                `btn btn-outline-light col-6 col-md-4 px-0 ${styles.filterButton}`
                                            } 
                                            id={skill.name} onClick={btnToggle}>
                                                <i key={index + 1} className={skill.toggled ? `${styles[skill.icon]} text-dark` : styles[skill.icon]}></i>  {skill.name}
                                            </button> 
                                    );
                                })
                            }
                        </div>
                    </div>
                </section>
                <section className={`row ${styles.projectList}`}>
                    {
                        projects.map((project: any, index: any):JSX.Element => {
                            let skillsMatch = skills.filter((skill: any)=> project.skills.includes(skill.name));
                            let toggledSkills = skills.filter((skill: any)=> skill.toggled);
                            return toggledSkills.every((i: any)=>skillsMatch.includes(i)) ? 
                                <ProjectItem key={index} content={project} /> : 
                                skills.every((i:any)=>!i.toggled) ? 
                                    <ProjectItem key={index} content={project} />: 
                                    <></>;
                        })
                    }
                </section>
            </motion.main>
        </AnimatePresence>
    );
};