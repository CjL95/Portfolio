import React from 'react';

export const ListItem = (props: any):JSX.Element => {
    return(
        <figure className="col- col-md-4 d-flex align-items-center">
            <i className={props.item.icon + ' skillIcon'}></i>
            <div>
                <h3>{props.item.name || props.item.title}</h3>
                {props.item.company && <span><strong>{props.item.company}</strong></span>}
            </div>
        </figure>
    );
}

const convertToFaClass = (title: string): string => { //tool to convert names to font awesome classes
    let output: string = '';
    if(!title) return output; //if the title is empty, return an empty string
    for(let i = 0; i < title.length; i++){
        if(title.charCodeAt(i) <= 90){ //if the character is uppercase
            if(i > 0)output += '-'; //if it's not the first character, add a dash
            output += title[i].toLowerCase(); //add the lowercase version of the character
        }else{
            output += title[i]; //if the character is lowercase, just add it
        }
    }
    return output;
}