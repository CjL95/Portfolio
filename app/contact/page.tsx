'use client'

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/contact/contactStyles.module.scss';
import { Form, set } from 'react-hook-form';

export default function Contact():JSX.Element{
    const areUBot = useRef<HTMLInputElement>(null); //tracks the checkbox for bot filtering

    const copy: any = useRef({}); //tracks the copy icon

    const [input, setInput] = useState({ //Tracks the form inputs
        name: "",
        org: "",
        email: "",
        title: "",
        phone: "",
        msg: ""
    }); 

    const [responses, setResponses] = useState(0); //Tracks the number of responses

    const [loading, setLoading] = useState(false); //Tracks the loading state of the request

    const [sendSuccess, setSendSuccess] = useState('danger'); //Tracks the success state of the request

    const [sendResult, setSendResult] = useState({error: false, sent: false}); //Tracks the result of the email send

    const formatPhone = (phoneNum: any) => {  //Formats the phone number input
        return phoneNum.replace(/\W/, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"); //Formats phone number to ###-###-####
    };

    const handleSubmit = async (e: any) => { //Controller for contact saving and email sending
        setLoading(true);
        let formStuff = JSON.stringify(Object.fromEntries((new FormData(e.target)).entries()));
        //console.log(formStuff);
        e.preventDefault(); 
        setResponses(prev=> prev + 1); //Increments the number of responses
        if(areUBot.current?.checked){
            return (alert("Bad request. Please try again."), e.target.reset());//If the bot filter is checked, reload the page
        } 
        if(responses > 2){ //If the number of responses is greater than 2, alert the user and reset the form
            return (alert("You've sent too many messages. Please wait before sending more."), e.target.reset(), setLoading(false))
        }
        setSendResult({...await sendMail(formStuff), sent: true}); //sends the response data to component state
        setLoading(false);
    };

    const handleChange = (e: any) => { //Handles form input changes
        if(e.target.id === "phone")e.target.value = formatPhone(e.target.value); //Format the phone input
        e.target.value = e.target.value.replace(/[^A-Za-z0-9- @.]+/g, ""); //Remove any special characters
        setInput((data: any) => ({
            ...data,
            [e.target.id]: e.target.value
        }));
    }

    const sendMail = async (data: any) => { //Sends the email
        try{
            const sendMail = await fetch('./api/send_email', { //Sends the form data to the server
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: data
            });
            return await sendMail.json();
        }catch(error){
            throw new Error('Error sending email');
        }
    }
    const saveContact = async (data: any) => { //Saves the contact form data to the database. Not currently working
        console.log('save data fn fired');
        try{
            await fetch('./api/save_contact', { //Sends the form data to the server
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: data 
            });
            console.log('data sent');
        }catch(e){
            console.log(e);
        }
    }
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
        <AnimatePresence>
            <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container pgContact pgMain">
                <section className="row row-gap-3">
                    <article className={`col-12 ${styles.contactIntro}`}>
                        <h2 className="sectionTitle mb-3">Let's Get to Work!</h2>
                        <p className="flavorText">
                            I'm always looking for new opportunities to learn and grow. Reach out to me if you're interested in working together!
                        </p>
                    </article>
                </section>
                <section className="row row-gap-3">
                    <form onSubmit={handleSubmit} method="POST" className={`col-12 col-lg-6 px-4 ${styles.contactForm}`}>
                        <input onChange={handleChange} id="filter" type="checkbox" name="beep_boop" value="areUBot" className="d-none" ref={areUBot}/>
                        <div className={`row ${styles.formRow}`}>
                            <fieldset className="col-12 col-md-6">
                                <label htmlFor="fname" className={`d-block ${styles.req}`}>Name</label>
                                <input onChange={handleChange} id="name" type="text" placeholder=" Name"  name="name" required className="form-control" />
                            </fieldset>
                            <fieldset className="col-12 col-md-6">
                                <label htmlFor="org" className="d-block">Organization</label>
                                <input onChange={handleChange} id="org" type="text" placeholder=" Organization" name="org" className="form-control" />
                            </fieldset>
                        </div>
                        <div className={`row ${styles.formRow}`}>
                            <fieldset className="col-12 col-md-6">
                                <label htmlFor="email" className={`d-block ${styles.req}`}>Email</label>
                                <input onChange={handleChange} id="email" type="email" placeholder=" Email" required name="email" className="form-control" />
                            </fieldset>
                            <fieldset className="col-12 col-md-6">
                                <label htmlFor="title" className="d-block">Title</label>
                                <input onChange={handleChange} id="title" type="text" placeholder=" Title" name="position" className="form-control" />
                            </fieldset>
                        </div>
                        <div className={`row ${styles.formRow}`}>
                            <fieldset className="col-12 col-md-6">
                                <label htmlFor="phone" className="d-block">Phone</label>
                                <input onChange={handleChange} id="phone" type="text" placeholder="Format: 888-888-8888" name="phone" className="form-control" maxLength={12}/>
                            </fieldset>
                        </div>
                        <hr />
                        <div className={`row ${styles.formRow}`}>
                            <fieldset className="col-12">
                                <label htmlFor="msg" className={`d-block ${styles.req}`}>Short Message (Max 300 Characters):</label>
                                <textarea onChange={handleChange} id="msg" placeholder=" Short Message" name="msg" required className="form-control" maxLength={300}></textarea>
                            </fieldset>
                        </div>
                        <div className={`row ${styles.formRow}`}>
                            <fieldset className="col-12 col-sm-6">
                                {loading ?
                                <button className="btn btn-outline-light" type="submit">
                                    <div className="spinner-border text-white" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </button> :
                                <button className="btn btn-outline-light" type="submit">Send</button>
                                }
                            </fieldset>
                            <figure className={`${styles.msgFlagWrapper} col-12 col-sm-6`}>
                                <div className={`${styles.msgFlag}`}>
                                    {!sendResult.sent ?
                                    "" :
                                    !sendResult.error ?
                                        <span><i className="fa-solid fa-check text-success"></i> Message Sent!</span>
                                    :
                                        <span><i className="fa-solid fa-x text-danger"></i> {sendResult.error}</span>
                                    }
                                </div>
                            </figure>
                        </div>
                    </form>
                    <article className={`col-12 col-lg-6 ${styles.contactInfo} px-4`}>
                        <h2>Contact Info</h2>
                        <div className="row">
                            <span className={styles.contactLink}><a className={`text-start nav-link navLink ${styles.contactLink}`} href="https://www.linkedin.com/in/chris-long-232223206/"><i className="fa-brands fa-linkedin"></i> Chris Long</a></span>
                            <span className={styles.contactLink}><a className={`text-start nav-link navLink`} href="https://github.com/CjL95"><i className="fa-brands fa-github"></i> CjL95</a></span>
                            <span id="disc" onMouseEnter={copyHover} onMouseLeave={copyHide} className={styles.contactLink}>
                                <a className={`nav-link navLink text-start ${styles.contactLink}`} href="#" onClick={copyHandler}>
                                    <i className="fa-brands fa-discord"></i> @cjthedev <i ref={copy} className={`fa-solid fa-copy ${styles.copyIcon}`}></i>
                                </a>
                            </span>
                        </div>
                    </article>
                </section>
            </motion.main>
        </AnimatePresence>
    );
};