'use client'

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export default function DbUpdate():JSX.Element{
    const populate = async () => {
        try{
            await fetch('./api/db_populate', { //Sends the form data to the server
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                }
            });
        }catch(e){
            console.log(e);
        }
    };
    return(
        <AnimatePresence>
            <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container pgContact pgMain">
                <section className="row row-gap-3">
                    <div className="col-12">
                        <h1>Populate Database</h1>
                        <button className="btn btn-outline-light" onClick={populate}>Populate</button>
                    </div>
                </section>
            </motion.main>
        </AnimatePresence>
    );
}