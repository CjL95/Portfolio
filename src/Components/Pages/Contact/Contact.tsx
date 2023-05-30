import React from 'react';

export const Contact = ():JSX.Element => {
    const [input, setInput] = React.useState({filter: false});

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(input);
    };

    const handleChange = (e: any) => {
        setInput((data: any) => ({
            ...data,
            [e.target.id]: e.target.value
        }));
    }

    return(
        <main className="container pgContact pgMain">
            <section className="row">
                <article className="col-12 contactIntro">
                    <h1 className="bigTitle">Let's get to work!</h1>
                    <p className="flavorText">
                        I'm always looking for new opportunities to learn and grow. Reach out to me if you're interested in working together!
                    </p>
                </article>
                <hr />
                <form onSubmit={handleSubmit} action="/some-endpoint" className="col-12 contactForm">
                    <input onChange={handleChange} id="filter" type="checkbox" name="beep" value="boop" className="d-none" />

                    <label htmlFor="fname">Name</label>
                        <input onChange={handleChange} id="fname" type="text" placeholder=" Name" required />

                    <label htmlFor="org">Organization</label>
                        <input onChange={handleChange} id="org" type="text" placeholder=" Organization" />

                    <label htmlFor="title">Title</label>
                        <input onChange={handleChange} id="title" type="text" placeholder=" Title" />

                    <label htmlFor="email">Email</label>
                        <input onChange={handleChange} id="email" type="email" placeholder=" Email" required />

                    <label htmlFor="phone">Phone</label>
                        <input onChange={handleChange} id="phone" type="tel" placeholder=" Format: 999-999-9999" pattern="\d{3}-\d{3}-\d{4}" />

                    <label htmlFor="msg">Short Message</label>
                        <textarea onChange={handleChange} id="msg" placeholder=" Short Message" required ></textarea>
                
                    <input type="submit" value="Send" />
                </form>
            </section>
            <section className="contactInfo">

            </section>
        </main>
    );
};