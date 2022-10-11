import { Posts } from "../components/Posts";

export function Home() {
  //const count = useSelector((state: RootState) => state.counter.value)

  return (
    <div>
      <div>
        <button>Aumentar</button>
        <button>Aumentar por 5</button>
        <span>{null}</span>
        <button>Diminuir</button>
      </div>
      <Posts />
    </div>
  );
}
