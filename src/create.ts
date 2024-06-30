import { PrismaClient, UserRole } from "@prisma/client";

export const prisma = new PrismaClient()

const main = async () => {
    // const userData = await prisma.user.create({
    //     data: {
    //         userName: "Rubel-2",
    //         email: "shahadat@gmail.com",
    //         role: UserRole.user,

    //     }
    // })
    // console.log({ userData })

    // const result = await prisma.user.findMany()
    // console.log({ result });

    // const result = await prisma.profile.create({
    //     data: {
    //         bio: 'This is bio',
    //         userId: 3
    //     }
    // })

    // const result = await prisma.category.create({
    //     data: {
    //         name: 'Javascript'

    //     }
    // })

    const createPost = await prisma.post.create({
        data: {
            title: "Core concepts of ES6",
            content: "There is no content",
            authorId: 2,
            post_Category: {
                create: [
                    {
                        categoryId: 2
                    },
                    {
                        categoryId: 3
                    },
                    {
                        categoryId: 1
                    }

                ]
            }
        },
        include: {
            post_Category: true
        }

    });

    console.log(createPost);
}

main()