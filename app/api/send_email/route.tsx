import { NextResponse } from "next/server";
import { Resend } from "resend";
//import { getSecret } from "../get_envs/route";
import { EmailTemplate } from "../email_template";
import { session } from "../session";

export const dynamic = 'force-dynamic';

export async function POST(req: Request, res: Response) {
    const sendCount = await session().get('counter');
    const newCount = sendCount ? +sendCount + 1 : 1;
    if(newCount > 5){
        return NextResponse.json({ error: 'Too many emails sent' });
    }
    await session().set('counter', newCount);
    const resend = new Resend(process.env.NEXT_PUBLIC_REACT_APP_MAIL_KEY);
    const formData = await req.json();
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['cjlong95@gmail.com'],
        subject: 'New Contact Form Submission',
        react: EmailTemplate(formData)
    });
    if(error){
        console.log(error);
        return NextResponse.json({ error: error.message });
    }
    return NextResponse.json({ data });
}