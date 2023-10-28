'use client'

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = (props:any):JSX.Element =>{
    const links = [
        {
            path: "/",
            name: "Home",
            pos: 0
        },
        {
            path: "/about", 
            name: "Resume",
            pos: 1
        },
        {
            path: "/projects",
            name: "Projects",
            pos: 2
        },
        {
            path: "/contact",
            name: "Contact Me",
            pos: 3
        }
    ];
    let url = usePathname();
    let position: number = links.findIndex((link) => link.path === url);
    
    /*
    //from a solution for the indicator involving flex and order
    const setIndicator = ():Array<string> => { 
        let arr = ['0','1','2','3'];
        return position !== 0 ? arr.splice(position, 1).concat(arr) : arr;
    } */

    return(
        <nav className="navbar navbar-dark navbar-expand-lg border-bottom topNav">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center w-100 mt-3 mt-lg-auto" id="navbarNav">
                    {/*<figure className={"indicatorTrack d-none d-lg-flex"}>
                        <div><i className={"fa-solid fa-bookmark pageIndicator " + "move" + position}></i></div>
                    </figure>*/}
                    <ul className="navbar-nav navbarNav justify-content-around">
                        {links.map((link, index):JSX.Element =>{
                            return(
                            <li className="nav-item navItem d-flex justify-content-center align-items-center" key={index}>
                                <i className={"navInd fa-solid fa-terminal " + (position === index ? "" : "hide")}></i>
                                <Link className="nav-link text-white navLink" aria-current="page" href={link.path}>
                                {link.name}</Link>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

