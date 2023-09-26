import emailjs from 'emailjs-com';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    let data = await request.json();
    console.log(data);
    /*emailjs.sendForm(process.env.NEXT_PUBLIC_REACT_APP_MAIL_SERVICE_ID as string, process.env.NEXT_PUBLIC_REACT_APP_EMAIL_TEMPLATE_ID as string, target, process.env.NEXT_PUBLIC_REACT_APP_EMAIL_USER_ID)
        .then((result: any) => {
            alert("Message sent successfully!");
            target.reset();
        }, (error: any)=>{
            console.log(error.text)
        })
        */
}