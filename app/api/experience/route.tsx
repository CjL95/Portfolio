import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    try {
        const exp = await prisma.experience.findMany();
        return NextResponse.json({ exp });
    } catch (error: any) {
        //res.status(400).json({ error: error.message });
        console.error("Error fetching experience:", error);
        return NextResponse.json({ error: error.message });
    }
}