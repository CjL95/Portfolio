import React from 'react';
import { ProjectItem } from './ProjectItem';
export const Projects = ():JSX.Element => {
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
            name: "Apache",
            toggled: false,
            icon: "fa-solid fa-server"
        },
        {
            name: "AWS",
            toggled: false,
            icon: "fa-brands fa-aws"
        },
        {
            name: "Bootstrap",
            toggled: false,
            icon: "fa-brands fa-bootstrap"           
        },
        {
            name: "C#",
            toggled: false,
            icon: "fa-brands fa-microsoft"
        },
        {
            name: "CLI",
            toggled: false,
            icon: "fa-solid fa-terminal"
        },
        {
            name: "CSS",
            toggled: false,
            icon: "fa-brands fa-css3-alt"
        },
        {
            name: "Docker",
            toggled: false,
            icon: "fa-brands fa-docker"
        },
        {
            name: "ExpressJS",
            toggled: false,
            icon: "fa-brands fa-node-js"
        },
        {
            name: "Flask",
            toggled: false,
            icon: "fa-solid fa-flask"
        },
        {
            name: "Git",
            toggled: false,
            icon: "fa-brands fa-git"
        },
        {
            name: "Handlebars",
            toggled: false,
            icon: "fa-solid fa-gears"
        },
        {
            name: "HTML",
            toggled: false,
            icon: "fa-brands fa-html5"
        },
        {
            name: "JavaScript",
            toggled: false,
            icon: "fa-brands fa-square-js"
        },
        {
            name: "MongoDB",
            toggled: false,
            icon: "fa-solid fa-leaf"
        },
        {
            name: "MySQL",
            toggled: false,
            icon: "fa-solid fa-database"
        },
        {
            name: "NodeJS",
            toggled: false,
            icon: "fa-brands fa-node-js"
        },
        {
            name: "PassportJS",
            toggled: false,
            icon: "fa-solid fa-key"
        },
        {
            name: "PHP",
            toggled: false,
            icon: "fa-brands fa-php"
        },
        {
            name: "Python",
            toggled: false,
            icon: "fa-brands fa-python"
        },
        {
            name: "ReactJS",
            toggled: false,
            icon: "fa-brands fa-react"
        },
        {
            name: "Sass",
            toggled: false,
            icon: "fa-brands fa-sass"
        },
        {
            name: "TypeScript",
            toggled: false,
            icon: "fa-brands fa-react"
        },
        {
            name: "WAMP",
            toggled: false,
            icon: "fa-solid fa-server"
        },
        {
            name: "WordPress",
            toggled: false,
            icon: "fa-brands fa-wordpress"
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
        <main className="container pgProjects pgMain">
            <section className="row projectFilterSidebar">
                <div className="col-12 projectFilter"> 
                    <h2 className="text-center">View Projects By Filter</h2>
                    <div className="row">
                        {
                            skills.map((skill: any, index: any):JSX.Element => {
                                return(
                                        <button key={index} className={
                                            skill.toggled ? 
                                            "btn btn-light col-6 col-md-3 col-lg-2 px-0 filterButton" : 
                                            "btn btn-outline-light col-6 col-md-3 col-lg-2 px-0 filterButton"
                                        } 
                                        id={skill.name} onClick={btnToggle}>
                                            <i key={index + 1} className={skill.toggled ? skill.icon + ' text-dark' : skill.icon}></i>  {skill.name}
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
            <section className="row projectList">
                {
                    projects.map((project: any, index: any):JSX.Element => {
                        let skillsMatch = skills.filter((skill: any)=> project.skills.includes(skill.name));
                        let toggledSkills = skills.filter((skill: any)=> skill.toggled);
                        return toggledSkills.every((i: any)=> skillsMatch.includes(i)) ? <ProjectItem key={index} content={project} /> : 
                            skills.every((i:any)=>!i.toggled) ? <ProjectItem key={index} content={project} />: <></>;
                    })
                }
            </section>
        </main>
    );
};