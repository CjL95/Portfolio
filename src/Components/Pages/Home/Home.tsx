import React from 'react';

export const Home = ():JSX.Element => {
    return(
    <main className="container pgHome pgMain">
        <section className="row">
            <article className="col-12 homeIntro">
                <h1 className="bigTitle">Chris Long</h1>
                <span className="flavorText">Musician, gamer, second-generation techie and <strong className="softEngi">Software Engineer.</strong></span>
                <p className="introDesc">All my life, I've been fascinated with technology. I admired how it could be used to turn ideas into reality, and how these ideas could come together to solve big problems. In my lifetime, I've witnessed it time and time again, and with each iteration came a brand new generation of ideas, enabling solutions to even grander problems. As I watch these ideas build the future in real time, I can't help but be just as starry-eyed as before. Now as an adult, I proudly introduce my own ideas, and passionately work towards building a brighter future.</p>
            </article>
        </section>
        <section className="row homeLinks">
            <figure className="col-12">
                <div className="homeCTA row">
                    <h2 className="col-12">Learn More About Me:</h2>
                    <article className="col-12 ctaBox">
                        <div className="row">
                            <span className="ctaLink col-sm-12 col-md-4">
                                <a className="navLink" href="/about">Resume</a>
                            </span>
                            <span className="ctaLink col-sm-12 col-md-4">
                                <a className="navLink" href="/contact">Contact Me</a>
                            </span>
                            <span className="ctaLink col-sm-12 col-md-4">
                                <a className="navLink" href="/projects">See My Work</a>
                            </span>
                        </div>
                        
                    </article>
                </div>
            </figure>
        </section>
    </main>
    );
};