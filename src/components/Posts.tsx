import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddPostMutation, useGetPostsQuery } from "../services/postsApi";

type Inputs = {
  title: string;
  author: string;
};

export function Posts() {
  const [title, setTitle] = useState("");
  const { data, isLoading: isLoadingPosts } = useGetPostsQuery(title);
  const [addPost, { isLoading: isLoadingAddPost }] = useAddPostMutation();

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    addPost({ ...data, id: Math.floor(Math.random() * 100), checked: false });
    reset();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Titulo</span>
          <input {...register("title")} />
          <span>Autor</span>
          <input {...register("author")} />
          <button type="submit">criar</button>
        </form>
        {isLoadingAddPost && "Criando..."}
        <br />
        <span>filtrar por título</span>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <ul>
        {isLoadingPosts
          ? "Carregando..."
          : data?.map((item) => (
              <li key={item.id}>
                <span>Titulo: {item.title}</span>
                <br />
                <span>Autor: {item.author}</span>
                <br />
                <span>Lido?</span>
                <input defaultChecked={item.checked} type="checkbox" />
                <br />
                <button>Remover</button>
              </li>
            ))}
      </ul>
    </>
  );
}
