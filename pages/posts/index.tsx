import { trpc } from "@/utils/trpc";
import Image from "next/image";
import PostForm from "./PostForm";

export default function PostsPage() {
  const data = trpc.posts.listPosts.useQuery();
  return (
    <main>
      <div className="container mx-auto  flex flex-col gap-y-6 mt-6">
        <PostForm />

        {data.data?.posts.map((post) => {
          return (
            <div
              key={post.id}
              className="flex flex-row bg-base-200 shadow-xl border-8 border-orange-500"
            >
              <div className="">
                <Image
                  src={post.author.image ?? "@/public/favicon"}
                  alt={post.author.name as string}
                  width="128"
                  height="128"
                />
                <h1>{post.author.name}</h1>
                <p>{post.author.id}</p>
              </div>

              <div className="col-span-12 flex-col">
                <h1 className="text-2xl">{post.title}</h1>
                <div>
                  <p className="text-base break-all">{post.content}</p>
                  <div className="">
                    <button className="btn btn-primary">Comentar</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
