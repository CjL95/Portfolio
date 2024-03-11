'use client'

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../styles/nav/navStyles.module.scss';

export const Navbar = (props:any):JSX.Element =>{
    const links = [
        {
            path: "/",
            name: "Home",
            pos: 0
        },
        {
            path: "/about", 
            name: "About Me",
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
        },
        {
            path: "https://portfolio2023bucket.s3.amazonaws.com/ChrisLong_webDevResume2023.pdf",
            name: "Resume",
            pos: 4
        }
    ];
    let url = usePathname();
    let position: number = links.findIndex((link) => link.path === url);
    return(
        <nav className={`navbar navbar-dark navbar-expand-xl border-bottom ${styles.topNav}`}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-center w-100 mt-3 mt-lg-auto" id="navbarNav">
                    <ul className={`navbar-nav ${styles.navbarNav} justify-content-start justify-content-lg-around align-items-start align-items-lg-center`}>
                        {links.map((link, index):JSX.Element =>{
                            return(
                            <li className={`${styles.navItem} nav-item navLink d-flex justify-content-center align-items-center`} key={index}>
                                <i className={`${styles.navInd} fa-solid fa-terminal ${position === index ? "" : styles.hide}`}></i>
                                <Link className={`nav-link text-white text-start`} aria-current="page" href={link.path} target={index === 4 ? "_blank" : ""}>
                                {link.name}</Link>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <button className={`${styles.hamb} navLink d-xl-none`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/*<span className="navbar-toggler-icon"></span>*/}
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
            </div>
        </nav>
    );
}

