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
    
    /*const setIndicator = ():Array<string> => {
        let arr = ['0','1','2','3'];
        return position !== 0 ? arr.splice(position, 1).concat(arr) : arr;
    } */
    
    /*useEffect(() => {
        setIndPos(setIndicator());
    },[])*/

    return(
        <nav className="navbar navbar-dark navbar-expand-lg border-bottom topNav">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center w-100 mt-3 mt-lg-auto" id="navbarNav">
                    <figure className={"indicatorTrack "}>
                        <div><i className={"fa-solid fa-bookmark pageIndicator " + "move" + position}></i></div>
                    </figure>
                    <ul className="navbar-nav navbarNav justify-content-center">
                        {links.map((link, index):JSX.Element =>{
                            return(
                            <li className="nav-item navItem px-5" key={index}>
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

