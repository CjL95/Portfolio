import { PrismaClient } from "@prisma/client";
import emailjs from 'emailjs-com';
const prisma = new PrismaClient();

export default async function SendContact(req: any, res: any = null) {
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
        res.status(200).json({ contact });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }

}