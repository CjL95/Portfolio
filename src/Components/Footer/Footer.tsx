import React from "react";

export const Footer = ():JSX.Element => {
    return(
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom nav-underline pb-3 mb-3">
                <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">Resume</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">Contact Me</a>
                </li>
            </ul>
        </footer>
    );
}