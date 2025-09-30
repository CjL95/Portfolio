import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    //console.log(data);
    try {
        const exp = await prisma.experience.findMany();
        return NextResponse.json({ exp });
    } catch (error: any) {
        //res.status(400).json({ error: error.message });
        console.log(error);
    }
}