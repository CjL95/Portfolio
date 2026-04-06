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
                    <span className={styles.flavorText}><strong className={styles.softEngi}>Software and Devops Engineer</strong></span>
                    <p className={`d-none d-sm-block ${styles.introDesc}`}>All my life, I've been fascinated with technology. I admired how it could be used to turn ideas into reality, and how these ideas could come together to solve big problems. In my lifetime, I've witnessed it time and time again, and with each iteration came a brand new generation of ideas, enabling solutions to even grander problems. Now as an engineer myself, I proudly introduce my own ideas, and passionately work towards building a brighter future.</p>
                </article>
            </section>
            <section className={`row ${styles.homeLinks}`}>
                <figure className="col-12">
                    <div className={`row ${styles.homeCTA}`}>
                        <h2 className="sectionTitle col-12">Learn More About Me:</h2>
                        <article className={`col-12 ${styles.ctaBox}`}>
                            <div className="row">
                                <span className={`col-sm-12 col-md-4 ${styles.ctaLink}`}>
                                    <a className={`navLink`} href="/inc/docs/ChrisLong_webDevResume2025.pdf" download="ChrisLong_webDevResume2025.pdf" target="">
                                        Resume
                                    </a>
                                </span>
                                <span className={`col-sm-12 col-md-4 ${styles.ctaLink}`}>
                                    <a className="navLink" href="/projects">See My Work</a>
                                </span>
                                <span className={`col-sm-12 col-md-4 ${styles.ctaLink}`}>
                                    <a className="navLink" href="/about">About Me</a>
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