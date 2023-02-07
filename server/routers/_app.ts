import { z } from "zod";
import { procedure, router } from "../trpc";
import { postsRouter } from "./posts";


export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
  pong: procedure.input(z.string()).query((input) => {
    return { pongRes: `ping also : ${input.input}` };
  }),
  posts: postsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
