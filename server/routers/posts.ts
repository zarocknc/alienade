import { router, procedure } from "../trpc";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { postSchema } from "@/pages/posts/PostForm";
import { useSession } from "next-auth/react";

const prisma = new PrismaClient();

export const postsRouter = router({
  listPosts: procedure.query(async () => {
    return {
      posts: await prisma.post.findMany({
        include: { author: true },
        orderBy: {
            createdAt: "desc"
        }
      }),
    };
  }),
  uploadPost: procedure.input(postSchema).mutation(async ({ input }) => {
    //doint things
    console.log("trcp received", input.title);
    console.log("title", input.content);
    console.log("email", input.userMail);
    const post = await prisma.post.create({
      data: {
        title: input.title,
        content: input.content,
        author: { connect: { email: input.userMail } },
      },
    });
    return {
      text: "idk",
    };
  }),
});
