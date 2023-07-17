'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = (props:any):JSX.Element =>{
    const links = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/about", 
            name: "Resume"
        },
        {
            path: "/projects",
            name: "Projects"
        },
        {
            path: "/contact",
            name: "Contact Me"
        }
    ];
    let url = usePathname();
    console.log(url);
    return(
        <nav className="navbar navbar-dark navbar-expand-lg border-bottom topNav">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center w-100 mt-3 mt-lg-auto" id="navbarNav">
                    <ul className="navbar-nav justify-content-center">
                        {links.map((link, index):JSX.Element =>{
                            return(
                            <li className="nav-item px-5" key={index}>
                                <Link className={
                                    url === link.path ? "nav-link text-white navLink activeLink"
                                    : "nav-link text-white navLink"
                                    } aria-current="page" href={link.path}>{link.name}</Link>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

