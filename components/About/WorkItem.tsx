import React from 'react';

export const WorkItem = (props: any):JSX.Element => {
    console.log("work item is being called");
    return(
        <figure className="col-sm-12 col-md-6 col-lg-4 workItem">
            <img src={props.info.img} alt={props.info.company + ' Logo'} className="workItemImg" />
            <h3>{props.info.title}</h3>
            <span><strong>{props.info.company}</strong></span>
            <p>{props.info.description}</p>
            <div className="workItemSkills">
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