import { trpc } from "@/utils/trpc";

export default function PostsPage() {
  const data = trpc.posts.listPosts.useQuery();
  return (
    <main className="flex-col">
      {data.data?.posts.map((post) => {
        return (
          <div key={post.id} className="flex bg-slate-200 shadow-xl m-6">
            <figure>
              <img
                src={post.author.image ?? "@/public/favicon"}
                alt={post.title}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.content}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Comentar</button>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
