import React from 'react';

export const Navbar = ():JSX.Element =>{
    return(
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler   " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center w-100" id="navbarNav">
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item navLink px-5">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item px-5">
                            <a className="nav-link" href="/about">Resume</a>
                        </li>
                        <li className="nav-item px-5">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item px-5">
                            <a className="nav-link" href="/contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}