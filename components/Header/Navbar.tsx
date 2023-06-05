import React from 'react';
import Link from 'next/link';
export const Navbar = ():JSX.Element =>{
    return(
        <nav className="navbar navbar-dark navbar-expand-lg border-bottom topNav">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center w-100 mt-3 mt-lg-auto" id="navbarNav">
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item px-5">
                            <Link className="nav-link text-white navLink" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link className="nav-link text-white navLink" href="/About">Resume</Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link className="nav-link text-white navLink" href="/Projects">Projects</Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link className="nav-link text-white navLink" href="/Contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}