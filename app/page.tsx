'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/home/homeStyles.module.scss';

export default function Home (isVisible: any):JSX.Element{
    return(
    <AnimatePresence>
        {isVisible && (<motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="container pgHome pgMain">
            <section className="row">
                <article className={`col-12 homeIntro`}>
                    <h1 className="bigTitle">Chris Long</h1>
                    <span className={styles.flavorText}>Musician, gamer, second-generation techie and <strong className={styles.softEngi}>Software Engineer.</strong></span>
                    <p className={styles.introDesc}>All my life, I've been fascinated with technology. I admired how it could be used to turn ideas into reality, and how these ideas could come together to solve big problems. In my lifetime, I've witnessed it time and time again, and with each iteration came a brand new generation of ideas, enabling solutions to even grander problems. Now as an engineer myself, I proudly introduce my own ideas, and passionately work towards building a brighter future.</p>
                </article>
            </section>
            <section className={`row ${styles.homeLinks}`}>
                <figure className="col-12">
                    <div className={`row ${styles.homeCTA}`}>
                        <h2 className="sectionTitle col-12">Learn More About Me:</h2>
                        <article className={`col-12 ${styles.ctaBox}`}>
                            <div className="row">
                                <span className={`col-sm-12 col-md-4 ${styles.ctaLink}`}>
                                    <a className="navLink" href="https://portfolio2023bucket.s3.amazonaws.com/ChrisLong_webDevResume2023.pdf" target="_blank">Resume</a>
                                </span>
                                <span className={`col-sm-12 col-md-4 ${styles.ctaLink}`}>
                                    <a className="navLink" href="/contact">Contact Me</a>
                                </span>
                                <span className={`col-sm-12 col-md-4 ${styles.ctaLink}`}>
                                    <a className="navLink" href="/projects">See My Work</a>
                                </span>
                            </div>
                            
                        </article>
                    </div>
                </figure>
            </section>
        </motion.main>)}
    </AnimatePresence>
    );
};