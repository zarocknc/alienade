import { router, procedure} from "../trpc"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const postsRouter = router({
    listPosts: procedure.query(async()=>{
        return {
            posts: await prisma.post.findMany({include:{author: true}})
        }
    }),

})