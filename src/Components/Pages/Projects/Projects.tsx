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
            toggled: false
        },
        {
            name: "AWS",
            toggled: false
        },
        {
            name: "Bootstrap",
            toggled: false           
        },
        {
            name: "C#",
            toggled: false
        },
        {
            name: "CSS",
            toggled: false
        },
        {
            name: "Docker",
            toggled: false
        },
        {
            name: "ExpressJS",
            toggled: false
        },
        {
            name: "Flask",
            toggled: false
        },
        {
            name: "Git",
            toggled: false
        },
        {
            name: "Handlebars",
            toggled: false
        },
        {
            name: "HTML",
            toggled: false
        },
        {
            name: "JavaScript",
            toggled: false
        },
        {
            name: "MongoDB",
            toggled: false
        },
        {
            name: "MySQL",
            toggled: false
        },
        {
            name: "NodeJS",
            toggled: false
        },
        {
            name: "PassportJS",
            toggled: false
        },
        {
            name: "PHP",
            toggled: false
        },
        {
            name: "Python",
        },
        {
            name: "ReactJS",
            toggled: false
        },
        {
            name: "SCSS",
            toggled: false
        },
        {
            name: "TypeScript",
            toggled: false
        },
        {
            name: "WAMP",
            toggled: false
        },
        {
            name: "WordPress",
            toggled: false
        }
    ]);

    const btnToggle = (e: any):void => {
        const skillChoice = skills.findIndex((i: any)=> i.name === e.target.id);
        setSkills((prev: Array<{name: string, toggled: boolean}>)=> {
            prev[skillChoice].toggled = !prev[skillChoice].toggled;
            return [...prev];
        });
    };

    const clearFilters = ():void => {
        let tempSkills = skills;
        console.log(tempSkills);
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
                    {
                        skills.map((skill: any, index: any):JSX.Element => {
                            return(
                                <button key={index} className={skill.toggled ? "btn btn-light col-6 col-sm-3 col-lg-2 px-0 filterButton" : "btn btn-outline-light col-6 col-sm-3 col-lg-2 px-0 filterButton"} id={skill.name} onClick={btnToggle}>{skill.name}</button>
                            );
                        })
                    }
                    
                </div>
                <div className="col-12">
                    <button className="btn btn-danger col-6 col-sm-3 col-lg-2 px-0 my-3" onClick={clearFilters}>Clear Filters</button>
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