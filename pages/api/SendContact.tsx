import { PrismaClient } from "@prisma/client";
import emailjs from 'emailjs-com';
const prisma = new PrismaClient();

export default async function SendContact(req: any, res: any = null) {
    /*emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID as string, process.env.REACT_APP_EMAIL_TEMPLATE_ID as string, e.currentTarget, process.env.REACT_APP_EMAIL_USER_ID)
        .then(async(result) => { //Create a new contact in the database
            await prisma.contact.create({
                data: {
                    name: name,
                    org: org,
                    email: email,
                    title: title,
                    phone: phone,
                    message: msg
                }
            });
            alert("Message sent successfully!");
        }, (error)=>{
            console.log(error.text)
        });*/
    console.log(req.body);
    //const { name, org, email, title, phone, msg } = req.body;
    try {
        const contact = await prisma.contact.create({
            data: {
                name: req.body.name,
                org: req.body.org,
                email: req.body.email,
                title: req.body.title,
                phone: req.body.phone,
                message: req.body.msg
            }
        });
        console.log('success');
        res.status(200).json({ contact });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }

}