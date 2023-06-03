import  React, {useEffect} from 'react';
import { WorkItem } from './WorkItem';
import { ListItem } from '../../Common/ListItem';

export const About = ():JSX.Element => {
    const [exp, setExp]: any = React.useState([{
        img: "http://localhost:3000/inc/img/250-250.png",
        title: "Web Developer",
        company: "Company 1",
        description: "Job Description"
    },{
        img: "http://localhost:3000/inc/img/250-250.png",
        title: "Web Developer",
        company: "Company 2",
        description: "Job Description"
    },{
        img: "http://localhost:3000/inc/img/250-250.png",
        title: "Web Developer",
        company: "Company 3",
        description: "Job Description"
    },{
        img: "http://localhost:3000/inc/img/250-250.png",
        title: "Web Developer",
        company: "Company 4",
        description: "Job Description"
    }]);
    const [skills, setSkills]: any = React.useState([
        {
            name: "Apache",
            toggled: false,
            icon: "fa-solid fa-server",
            featured: false
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
        img: "http://localhost:3000/inc/img/100-100.png",
        title: "Responsive Web Design",
        company: "FreeCodeCamp",
        icon: "fa-brands fa-free-code-camp"
    },
    {
        img: "http://localhost:3000/inc/img/100-100.png",
        title: "JavaScript Algorithms and Data Structures",
        company: "FreeCodeCamp",
        icon: "fa-brands fa-free-code-camp"
    },
    {
        img: "http://localhost:3000/inc/img/100-100.png",
        title: "Front End Libraries",
        company: "FreeCodeCamp",
        icon: "fa-brands fa-free-code-camp"
    },
    {
        img: "http://localhost:3000/inc/img/100-100.png",
        title: "APIs and Microservices",
        company: "FreeCodeCamp",
        icon: "fa-brands fa-free-code-camp"
    }]);
    const [hide, setHide]: any = React.useState(true);

    const allSkillsViz = () => {
        setHide((prev: any) =>{
            prev = !prev;
            return prev;
        });
    };

    return(
        <main className="container pgAbout pgMain">
            <section className="row featSkills">
                <div className='col-12 mb-3'>
                    <h2>Featured Skills</h2>
                </div>
                {
                    skills.map((i: any, index: number) => {
                        return i.featured ? (<ListItem key={index} item={i} />): null;
                    })
                }
            </section>
            <section className="row otherSkills">
                <div className='col-12'>
                    <button className="btn btn-outline-light mb-3" type="button" onClick={allSkillsViz}>
                        <h2 className="my-0">All Skills &#10095;</h2>
                    </button>
                    <article className={"row allSkills " + (hide ? "hideThis" : "showThis")} id="allSkills">
                        {
                            skills.map((i: any, index: number) => {
                                return (<ListItem key={index} item={i} />);
                            })
                        }
                    </article>
                </div>
            </section>
            <section className="row my-3">
                <h2>Experience</h2>
                { 
                    exp.map((i: any, index: number) => {  
                        return(<WorkItem key={index} info={i} skills={skills}/>);
                    })
                }
            </section>
            <section className="row">
                <h2>Certifications</h2>
                {
                    certs.map((i: any, index: number) => {  
                        return(<ListItem key={index} item={i} />);
                    })
                }
            </section>
        </main>
    );
};