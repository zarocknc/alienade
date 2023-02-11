import { useSession } from "next-auth/react";
import Image from "next/image";
import { Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { BsInfoCircle } from "react-icons/bs";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trpc } from "@/utils/trpc";

type postSchemaType = z.infer<typeof postSchema>;

export const postSchema = z.object({
  title: z.string().min(3),
  content: z.string(),
  userMail: z.string(),
});

export default function PostForm() {
  const { data: session } = useSession();
  const mutation = trpc.posts.uploadPost.useMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<postSchemaType>({ resolver: zodResolver(postSchema) });
  if (!session) {
    return (
      <div className="alert alert-info shadow-xl">
        <div>
          <BsInfoCircle /> debes iniciar sesion para crear un post ps cholo
        </div>
      </div>
    );
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(async (values) => {
          await mutation.mutateAsync(values);
        })}
      >
        <div className="bg-base-300 flex flex-row border border-orange-300 gap-4 p-3">
          <div className="w-24 relative">
            <div className="avatar online mask mask-squircle">
              <Image
                src={session.user?.image as string}
                width="128"
                height="128"
                alt="avatar"
              />
            </div>
            <input
              className="btn btn-primary btn-sm absolute bottom-0 left-0"
              type="submit"
              placeholder="publicar"
            />
            <input type="hidden" {...register("userMail")} value={session.user?.email as string} />
          </div>
          <div className="w-full max-w-xl">
            <Input
              type="text"
              label="Titulo"
              variant="standard"
              {...register("title", { required: true, minLength: 3 })}
            />
            {errors.title && (
              <span className="text-warning-content text-sm">
                El titulo debe ser mayor a 3 letras:
              </span>
            )}
            <div className="mb-2"></div>
            <Textarea label="Contenido" {...register("content")} />
            {errors.content && "algo sucedio mal con el contenido"}
          </div>
        </div>
      </form>
    </div>
  );
}
