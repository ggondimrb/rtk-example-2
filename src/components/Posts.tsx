import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGetPostsQuery } from "../services/postsApi";

type Inputs = {
  title: string;
  author: string;
};

export function Posts() {
  const [title, setTitle] = useState("");
  const { data } = useGetPostsQuery();

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
        <br />
        <span>filtrar por título</span>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <ul>
        {data?.map((item: any) => (
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
