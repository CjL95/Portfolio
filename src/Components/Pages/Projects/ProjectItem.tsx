import React from 'react';
interface ProjectItemProps {
    content: any;
    key: Number;
}
export const ProjectItem = ({content}: ProjectItemProps):JSX.Element => {
    let skittles = content.skills.join(', ');
    return(
        <figure className="col-sm-12 col-md-6">
            <h2>{content.name}</h2>
            <img src={content.image} alt={content.name} className="img-fluid" />
            <figcaption className="projectText">
                <p>{content.description}</p>
                <span>Skills: {skittles}</span>
                <span>Contributions: </span>
            </figcaption>
            <a href={content.link}>View Project</a>
        </figure>
    );
};