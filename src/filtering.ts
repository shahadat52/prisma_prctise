import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const main = async () => {
    // const andFiltering = await prisma.post.findMany({
    //     where: {
    //         AND: [
    //             { title: { contains: "ES6" } },
    //             { published: true }
    //         ]
    //     }
    // });


    // const orFiltering = await prisma.post.findMany({
    //     where: {
    //         OR: [
    //             { title: { contains: "ES6" } },
    //             { published: true }
    //         ]
    //     }
    // });
    // console.log(orFiltering);

    // const startWith = await prisma.user.findMany({
    //     where: {
    //         email: {
    //             startsWith: "org"  // endWith, contains, equals
    //         }
    //     }
    // });
    // console.log(startWith);

    const inDepthData = await prisma.user.findUnique({
        where: {
            id: 2
        },
        include: {
            post: {
                include: {
                    post_Category: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    });

    console.dir(inDepthData, { depth: Infinity });
}



main()