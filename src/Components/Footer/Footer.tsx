import React from "react";

export const Footer = ():JSX.Element => {
    return(
        <footer className="py-3">
            <ul className="nav justify-content-center pb-3 mb-3">
                <li className="nav-item navLink">
                    <a href="#" className="nav-link px-2"><i className="fa-brands fa-github"></i></a>
                </li>
                <li className="nav-item navLink">
                    <a href="#" className="nav-link px-2"><i className="fa-brands fa-linkedin"></i></a>
                </li>
                <li className="nav-item navLink">
                    <a href="#" className="nav-link px-2"><i className="fa-solid fa-laptop-code"></i></a>
                </li>
            </ul>
        </footer>
    );
}