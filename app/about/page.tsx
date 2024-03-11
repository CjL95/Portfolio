'use client'

import  React, {useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkItem } from '../components/About/work_item';
import { ListItem } from '../components/Common/list_item';
import styles from '../styles/about/aboutStyles.module.scss';

export default function About():JSX.Element{  
    const [exp, setExp]: any = React.useState([{skills: []}]);
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
    const getExp = async () => {
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
    }, []);
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
                                <i className={`fa-solid fa-chevron-right ${hide ? `btnRotatetrue` : `btnRotatefalse`}`}></i>
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
                        exp.map((i: any, index: number) => { 
                            return(<WorkItem key={index} info={i} skills={i.skills}/>);
                        })
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