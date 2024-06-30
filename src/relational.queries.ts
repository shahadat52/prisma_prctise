import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async () => {

    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     },
    //     include: {
    //         post: true
    //     }
    // })
    // console.log(result);

    // const result = await prisma.user.findMany({
    //     include: {
    //         post: {
    //             where: {
    //                 published: true
    //             }
    //         }
    //     }
    // });

    // console.log({ result });

    // console.dir(result, { depth: Infinity })





}


main()

// console.dir(publishedPostForUser, {depth: infinity})
