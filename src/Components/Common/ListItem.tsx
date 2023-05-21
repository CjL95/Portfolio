import React from 'react';

export const ListItem = (props: any):JSX.Element => {
    return(
        <figure className="col-sm-1 col-md-6 d-flex">
            <img src={props.item.img} alt={props.item.title + ' Logo'} className="listItemImg" />
            <div>
                <h3>{props.item.title}</h3>
                {props.item.company && <span><strong>{props.item.company}</strong></span>}
            </div>
        </figure>
    );
}