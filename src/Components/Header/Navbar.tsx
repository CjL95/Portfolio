import React from 'react';

export const Navbar = ():JSX.Element =>{
    return(
        <nav className="navbar navbar-dark navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler hamb" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse border-bottom justify-content-center w-100 topNav" id="navbarNav">
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item px-5">
                            <a className="nav-link text-white navLink" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item px-5">
                            <a className="nav-link text-white navLink" href="/about">Resume</a>
                        </li>
                        <li className="nav-item px-5">
                            <a className="nav-link text-white navLink" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item px-5">
                            <a className="nav-link text-white navLink" href="/contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}