"use client";
import React, { useRef, useState } from 'react';

export const Footer = ():JSX.Element => {
    const copy: any = useRef({}); //tracks the copy icon
    const copyHandler = (e: any) => { //Copies the discord username to the clipboard
        e.preventDefault();
        'clipboard' in navigator ? navigator.clipboard.writeText("cjthedev") : '';
        alert("Copied to clipboard!");
    }

    const copyHover = () => {//Handles the copy icon hover
        copy.current.classList.add('copyIconShow')
    }
 
    const copyHide = () =>{ //Handles the copy icon mouse leave
        copy.current.classList.remove('copyIconShow')
    }
    return(
        <footer className="container py-3">
            <section className="row">
                <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item navLink">
                        <a href="https://github.com/CjL95" className="footNavIcon px-2"><i className="fa-brands fa-github"></i></a>
                    </li>
                    <li className="nav-item navLink">
                        <a href="https://www.linkedin.com/in/chris-long-232223206/" className="footNavIcon px-2"><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                    <li className="nav-item navLink">
                        <a href="https://replit.com/@Cjlong95" className="footNavIcon px-2"><i className="fa-solid fa-laptop-code"></i></a>
                    </li>
                    <li className="nav-item navLink">
                        <span id="disc" onMouseEnter={copyHover} onMouseLeave={copyHide}>
                                <a className={`footNavIcon navLink text-start `} href="#" onClick={copyHandler}>
                                    <i className="fa-brands fa-discord"></i><i ref={copy} className={`fa-solid fa-copy copyIcon`}></i>
                                </a>
                        </span>
                    </li>
                </ul>
            </section>
        </footer>  
    );
}