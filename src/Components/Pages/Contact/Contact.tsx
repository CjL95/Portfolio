import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
interface FormInput {
    fname: string;
    org: string;
    email: string;
    title: string;
    phone: string;
    msg: string;
}

export const Contact = ():JSX.Element => {
    const areUBot = useRef<HTMLInputElement>(null); //tracks the checkbox for bot filtering
    const [input, setInput] = useState({
        fname: "",
        org: "",
        email: "",
        title: "",
        phone: "",
        msg: ""
    }); //Tracks the form inputs
    
    const formatPhone = (phoneNum: any) => {
        return phoneNum.replace(/\W/, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"); //Formats phone number to ###-###-####
    };

    const handleSubmit = (e: any) => { //Handles form submission
        e.preventDefault();
        console.log(e.target);
        let data: Array<any> = [];
        Object.values(input).forEach((i:any)=>{ //Sanitize the inputs
            data.push(i.replace(/[^A-Za-z0-9- @.]+/g, ""));
        });
        if(areUBot.current?.checked){
        return (alert("Bad request. Please try again."), window.location.reload());//If the bot filter is checked, reload the page
        } 
        console.log(data);
        //sendMail(data, e.target);
        emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID as string, process.env.REACT_APP_EMAIL_TEMPLATE_ID as string, e.currentTarget, process.env.REACT_APP_EMAIL_USER_ID)
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error)=>{
            console.log(error.text)
        });
        e.currentTarget.reset();
    };

    const handleChange = (e: any) => { //Handles form input changes
        if(e.target.id === "phone")e.target.value = formatPhone(e.target.value); //Format the phone input
        e.target.value = e.target.value.replace(/[^A-Za-z0-9- @.]+/g, ""); //Remove any special characters
        setInput((data: any) => ({
            ...data,
            [e.target.id]: e.target.value
        }));
    }

    /*const sendMail = (data: Array<any>, target: any) => { //Sends the email
        emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID as string, process.env.REACT_APP_EMAIL_TEMPLATE_ID as string, target, process.env.REACT_APP_EMAIL_USER_ID)
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
            window.location.reload();
        }, (error)=>{
            console.log(error.text)
        })
    }*/

    return(
        <main className="container pgContact pgMain">
            <section className="row">
                <article className="col-12 contactIntro">
                    <h1 className="bigTitle">Let's get to work!</h1>
                    <p className="flavorText">
                        I'm always looking for new opportunities to learn and grow. Reach out to me if you're interested in working together!
                    </p>
                </article>
                <form onSubmit={handleSubmit} action="/some-endpoint" className="col-12 col-md-6 contactForm">
                    <input onChange={handleChange} id="filter" type="checkbox" name="beep_boop" value="areUBot" className="d-none" ref={areUBot}/>
                    <div className="row formRow">
                        <fieldset className="col-12 col-md-6">
                            <label htmlFor="fname" className="d-block req">Name</label>
                            <input onChange={handleChange} id="fname" type="text" placeholder=" Name"  name="name" required className="form-control" />
                        </fieldset>
                        <fieldset className="col-12 col-md-6">
                            <label htmlFor="org" className="d-block">Organization</label>
                            <input onChange={handleChange} id="org" type="text" placeholder=" Organization" name="org" className="form-control" />
                        </fieldset>
                    </div>
                    <div className="row formRow">
                        <fieldset className="col-12 col-md-6">
                            <label htmlFor="email" className="d-block req">Email</label>
                            <input onChange={handleChange} id="email" type="email" placeholder=" Email" required name="email" className="form-control" />
                        </fieldset>
                        <fieldset className="col-12 col-md-6">
                            <label htmlFor="title" className="d-block">Title</label>
                            <input onChange={handleChange} id="title" type="text" placeholder=" Title" name="position" className="form-control" />
                        </fieldset>
                    </div>
                    <div className="row formRow">
                        <fieldset className="col-12 col-md-6">
                            <label htmlFor="phone" className="d-block">Phone</label>
                            <input onChange={handleChange} id="phone" type="text" placeholder="Format: 888-888-8888" name="phone" className="form-control" maxLength={12}/>
                        </fieldset>
                    </div>
                    <hr />
                    <div className="row formRow">
                        <fieldset className="col-12">
                            <label htmlFor="msg" className="d-block req">Short Message (Max 300 Characters):</label>
                            <textarea onChange={handleChange} id="msg" placeholder=" Short Message" name="msg" required className="form-control" maxLength={300}></textarea>
                        </fieldset>
                    </div>
                    <div className="row formRow">
                        <fieldset className="col-12 col-md-6">
                            <input className="btn btn-outline-light" type="submit" value="Send" />
                        </fieldset>
                    </div>
                </form>
                <article className="col-12 col-md-6 contactInfo">
                    <h2>Contact Info</h2>
                    <div className="row">
                        <span><i className="fa-solid fa-envelope"></i> Email: cjl.devv@gmail.com</span>
                        <span><i className="fa-solid fa-phone"></i> Phone: (810) 513-0018</span>
                        <span><i className="fa-brands fa-discord"></i> Discord: CJ The Dev#5879</span>
                    </div>
                </article>
            </section>
        </main>
    );
};