import React from 'react';
import styles from '../../styles/about/aboutStyles.module.scss';

export const WorkItem = (props: any):JSX.Element => {
    return(
        <figure className={`col-sm-12 col-md-6 ${styles.workItem}`}>
            <h3>{props.info.title}</h3>
            <span><strong>{props.info.company}</strong></span>
            <p>{props.info.description}</p>
            <div className={styles.workItemSkills}>
                <span>Skills Used:</span>
                <ul>
                    {
                    props.skills.map((i: any, index: number) => {
                        return(<li key={index}>{i.title}</li>);
                    })
                    }
                </ul>
            </div>
        </figure>
    );
}