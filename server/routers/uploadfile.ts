import { z } from "zod";
import { router, procedure } from "../trpc";
import { PrismaClient } from "@prisma/client";
import Minio from "minio";

const minioClient = new Minio.Client({
  endPoint: "http://192.168.1.33:9000",
  port: 9000,
  useSSL: false,
  accessKey: "minioadmin",
  secretKey: "minioadmin",
});


export const postsRouter = router({
  listPosts: procedure.query(async () => {
    return {
      //posts: await prisma.post.findMany({ include: { author: true } }),
    };
  }),
});
