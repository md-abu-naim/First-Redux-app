import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../Redux/Features/Counter/CounterSlice";

const Counter = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(5))} className="btn bg-gray-600 p-2">Increment by 5</button>
            <button onClick={() => dispatch(increment())} className="btn bg-green-500 p-2">Increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={() => dispatch(decrement())} className="btn bg-green-500 p-2">Decrement</button>
        </div>
    );
};

export default Counter;