import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
    // const result = await prisma.$queryRaw`select * from "users" where email ='shahadat@gmail.com'`
    // console.log(result);

    // const boom = await prisma.$queryRaw`truncate "users" cascade`
    // console.log(boom);
}

main()