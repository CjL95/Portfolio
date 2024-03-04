import React, { useEffect, useState } from 'react';
import styles from '../../styles/about/aboutStyles.module.scss';

export const WorkItem = (props: any):JSX.Element => {
    const [skills, setSkills] = React.useState([]);
    const [hide, setHide]: any = React.useState(true);
    const [dis, setDis]: any = React.useState(false);

    const descViz = () => {
        setHide(!hide);
        setDis(true);
    };
    useEffect(()=>{
        setSkills(props.skills);
    })
    useEffect(()=>{
        const timer = setTimeout(() => {
            setDis(false);
        }, 200);
        return () => clearTimeout(timer);
    },[hide])
    return(
        <figure className={`col-sm-12 col-lg-6 ${styles.workItem}`}>
            <section>
                <h3 className={styles.jobTitle}>{props.info.name}</h3>
                <span className={styles.companyName}><strong>{props.info.company}</strong></span>
                <span className={styles.jobTenure}><strong>{props.info.tenure}</strong></span>
            </section>
            <section className={styles.workItemSkills}>
                <span>Skills Used: {skills.join(', ')}</span>
                <ul>
                    {
                        props.skills.map((i: any, index: number) => {
                            return(<li key={index}>{i.title}</li>);
                        })
                    }
                </ul>
            </section>
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
            <section className={`${styles.expDesc} ${hide ? styles.hideThis : styles.showThis}`}>
                <p>{props.info.description}</p>
            </section>
        </figure>
    );
}