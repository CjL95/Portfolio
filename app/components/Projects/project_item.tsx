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
            <figcaption className={styles.projectText}>
                <span>Skills: {skills}</span>
                <section className="row">
                    <div className="col-12 d-flex flex-wrap">
                        <div className={`btn-group expandBtnGroup`} role="group" aria-label="expandSkills">
                            <button className={`btn btn-outline-light mb-3 expandMainBtn`} type="button" onClick={descViz}>
                                DESCRIPTION
                            </button>
                            <button className={`btn btn-outline-light mb-3 expandChevBtn`} type="button" onClick={descViz}>
                                <i className={`fa-solid fa-chevron-right ${hide ? `btnRotatetrue` : `btnRotatefalse`}`}></i>
                            </button>
                        </div>
                        <a href={content.link} className="navLink text-white mx-2" target="_blank">
                            <button className={`btn btn-outline-light mb-3`}>View Project</button>
                        </a>
                    </div>
                </section>
                <p className={`${styles.expDesc} ${hide ? styles.hideThis : styles.showThis}`}>{content.description}</p>
            </figcaption>
        </figure>
    );
};