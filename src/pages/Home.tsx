import { decrement, increment, incrementByAmount } from "../app/counterSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Posts } from "../components/Posts";

export function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* <div>
        <button onClick={() => dispatch(increment())}>Aumentar</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Aumentar por 5
        </button>
        <button onClick={() => dispatch(decrement())}>Diminuir</button>
        <br />
        <span>{count}</span>
      </div> */}
      <Posts />
    </div>
  );
}
