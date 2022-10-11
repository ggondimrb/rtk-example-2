import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  author: string;
};

export function Posts() {
  const data: any = [];
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
      </div>
      <ul>
        {data?.map((item: any) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <br />
            <span>{item.author}</span>
            <br />
            <input defaultChecked={item.checked} type="checkbox" />
            <button>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}