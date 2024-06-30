import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


const main = async () => {
    const groupResult = await prisma.user.groupBy({
        by: 'email',
        where: {
            email: {
                contains: 'gmail'
            }
        },
        having: {
            age: {
                _count: {
                    gte: 1
                }
            }
        }
    });
    console.log(groupResult);
};

main()