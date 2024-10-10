import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="text-2xl">{count}</h1>
            <div className="flex space-x-4">
                <button 
                    onClick={() => dispatch(increment())} 
                    className="btn btn-primary"
                >
                    Tambah
                </button>
                <button 
                    onClick={() => dispatch(decrement())} 
                    className="btn btn-danger"
                >
                    Kurang
                </button>
            </div>
        </div>
    )
}

export default Counter;