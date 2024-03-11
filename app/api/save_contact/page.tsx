import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: Request, res: Response) {
    const formData = await req.json();
    console.log(formData);
    const contact = await prisma.contact.create({
        data: {
            name: formData.name,
            org: formData.org,
            email: formData.email,
            title: formData.position,
            phone: formData.phone,
            message: formData.msg
        }
    });
    return NextResponse.json({  });
}

