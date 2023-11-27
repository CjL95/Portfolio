import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    const experience = await prisma.experience.findMany({});
    res.status(200).json(experience);
}