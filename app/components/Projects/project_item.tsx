import React, { useState, useEffect } from 'react';
import styles from '../../styles/projects/projectStyles.module.scss';
interface ProjectItemProps {
    content: any;
    key: Number;
}
export const ProjectItem = ({content}: ProjectItemProps):JSX.Element => {
    let [skills, setSkills] = React.useState('');
    const [hide, setHide]: any = React.useState(true);
    const [dis, setDis]: any = React.useState(false);
    const descViz = () => {
        setHide(!hide);
        setDis(true);
    };
    useEffect(()=>{
        setSkills(content.skills.join(', '));
    })
    useEffect(()=>{
        const timer = setTimeout(() => {
            setDis(false);
        }, 200);
        return () => clearTimeout(timer);
    },[hide])
    return(
        <figure className="col-sm-12 col-md-6">
            <h2>{content.name}</h2>
            <img src={content.image} alt={content.name} className="img-fluid" />
            <figcaption className={styles.projectText}>
                <span>Skills: {skills}</span>
                <span>Contributions: </span>
                <section className={`row ${styles.allSkillBtn}`}>
                    <div className={`col-12`}>
                        <div className={`btn-group ${styles.allSkillBtnGroup}`} role="group" aria-label="expandSkills">
                            <button className={`btn btn-outline-light mb-3 ${styles.allSkillMainBtn}`} type="button" onClick={descViz}>
                                DESCRIPTION
                            </button>
                            <button className={`btn btn-outline-light mb-3 ${styles.allSkillChevBtn}`} type="button" onClick={descViz}>
                                <i className={`fa-solid fa-chevron-right ${hide ? styles.btnRotatetrue : styles.btnRotatefalse}`}></i>
                            </button>
                        </div>
                    </div>
                </section>
                <p className={`${styles.expDesc} ${hide ? styles.hideThis : styles.showThis}`}>{content.description}</p>
            </figcaption>
            <a href={content.link} target="_blank">View Project</a>
        </figure>
    );
};