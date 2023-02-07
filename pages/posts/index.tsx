import { trpc } from "@/utils/trpc";
import Image from "next/image";

export default function PostsPage() {
  const data = trpc.posts.listPosts.useQuery();
  return (
    <main>
      <div className="container mx-auto ">
        {data.data?.posts.map((post) => {
          return (
            <div
              key={post.id}
              className="flex flex-row bg-base-200 shadow-xl m-6 border-8 border-orange-500"
            >
              <div className="">
                <Image
                  src={post.author.image ?? "@/public/favicon"}
                  alt={post.author.name as string}
                  width="128"
                  height="128"
                />
                <h1>{post.author.name}</h1>
              </div>

              <div className="col-span-12 flex-col">
                <h1 className="text-2xl">{post.title}</h1>
                <p className="text-base">{post.content}</p>
                <div className="">
                  <button className="btn btn-primary">Comentar</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
