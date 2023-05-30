import  React, {useEffect} from 'react';
import { WorkItem } from './WorkItem';
import { ListItem } from '../../Common/ListItem';

export const About = ():JSX.Element => {
    const [exp, setExp]: any = React.useState([{}]);
    const [skills, setSkills]: any = React.useState([{}]);
    const [certs, setCerts]: any = React.useState([{}]);
    useEffect(() => {
        setExp((prev: any)=> prev = [
            {
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
            }
        ]);
        setSkills((prev: any)=> prev = [
            {
                img: "http://localhost:3000/inc/img/100-100.png",
                title: "React"
            },
            {
                img: "http://localhost:3000/inc/img/100-100.png",
                title: "NodeJS"
            },
            {
                img: "http://localhost:3000/inc/img/100-100.png",
                title: "MongoDB"
            }
        ]);
        setCerts((prev: any)=> prev = [
            {
                img: "http://localhost:3000/inc/img/100-100.png",
                title: "Responsive Web Design",
                company: "FreeCodeCamp"
            },
            {
                img: "http://localhost:3000/inc/img/100-100.png",
                title: "JavaScript Algorithms and Data Structures",
                company: "FreeCodeCamp"
            },
            {
                img: "http://localhost:3000/inc/img/100-100.png",
                title: "Front End Libraries",
                company: "FreeCodeCamp"
            },
            {
                img: "http://localhost:3000/inc/img/100-100.png",
                title: "APIs and Microservices",
                company: "FreeCodeCamp"
            }
        ]);
    }, []);
    return(
        <main className="container pgAbout pgMain">
            <section className="row">
                <h2>Skills</h2>
                {
                    skills.map((i: any, index: number) => {
                        return(<ListItem key={index} item={i} />);
                    })
                }
            </section>
            <section className="row">
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