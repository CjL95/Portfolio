import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
    const data = await request.json();
    console.log(data);
    try {
        const contact = await prisma.contact.create({
            data: {
                name: data.name,
                org: data.org,
                email: data.email,
                title: data.title,
                phone: data.phone,
                message: data.msg
            }
        });
        return NextResponse.json({ contact });
    } catch (error: any) {
        //res.status(400).json({ error: error.message });
        console.log(error);
    }
}