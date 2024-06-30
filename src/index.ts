import { PrismaClient, UserRole } from "@prisma/client";

export const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.user.create({
        data: {
            userName: "Rakib",
            email: "shahadat@gmail.com",
            role: UserRole.user,

        }
    })
    console.log({ result })
    // const result = await prisma.post.create({
    //     data: {
    //         title: 'This is test title',
    //         content: 'There is no content',
    //         authorName: 'Abul-Basar',
    //     }
    // });

    // console.log("result", result);

    // const data = await prisma.post.findMany();
    // console.log(data);

    // const result = await prisma.post.deleteMany({
    //     where: {
    //         title: 'This is test title'
    //     }
    // });

    // console.log("Data deleted", result)

    // const updateData = await prisma.post.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         title: 'Title updated'
    //     }
    // });

    // console.log("updateData", updateData);


    // const result = await prisma.post.findMany()

    // console.log({ result });
    // const result = await prisma.post.create({
    //     data: {
    //         title: 'test title-2',
    //         content: 'test content',
    //         authorName: 'Jos man'

    //     }
    // })

    // console.log({ result });


}

main()