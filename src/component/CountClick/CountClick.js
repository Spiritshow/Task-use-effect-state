import React, { useEffect, useReducer } from "react";
import "./CountClick.css";

const CountClick = ({onToggle}) => {

    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return{ count: state.count+1};
            default:
                throw new Error();
        }
    }
    //const [count, setCount] = useState();
    const [state, dispatch] = useReducer(reducer,{count: 0});

    useEffect(() => {
        if(state.count === 25) onToggle(true);
    },[state.count])

    return(
        <div className="CounterBox">
            <h2 className="TextCounter">Счёт: {state.count}</h2>
            <button className="ButtonCounter" onClick={() => dispatch({type: "increment"})}>Тык!</button>
        </div>
    )

}

export default CountClick;