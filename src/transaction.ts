import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {

    // Batch transaction
    // const createUser = prisma.user.create({
    //     data: {
    //         userName: 'Abul-Kalam-30',
    //         email: 'abul@kalam.com',
    //         role: 'user'
    //     }
    // });

    // const createCategory = prisma.category.create({
    //     data: {
    //         name: 'Data science'
    //     }
    // });

    // const result = await prisma.$transaction([createUser, createCategory])
    // console.log({ result });


    // Interactive Transaction
    const result = await prisma.$transaction(async (transactionFn) => {
        // const postDelete = await transactionFn.post.delete({
        //     where: {
        //         id: 10
        //     }
        // })
        const deleteUser = await transactionFn.user.delete({
            where: {
                userName: 'sohid'
            }
        });

        const createUser = await transactionFn.user.create({
            data: {
                userName: 'sohid',
                email: 'sohid@gmail.com',
            }
        });

        const createPost = await transactionFn.post.create({
            data: {
                content: 'I am very bussy',
                title: 'My daily routine',
                authorId: createUser.id
            }
        });



        return {
            deleteUser,
            createUser,
            createPost
        }

    })
    console.log({ result });
}

main()