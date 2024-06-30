import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const aggregation = await prisma.user.aggregate({
        _avg: {
            age: true
        },
        _min: {
            age: true
        }
    })
    console.log(aggregation);
}

main()