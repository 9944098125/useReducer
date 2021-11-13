import React, { useReducer } from "react";
import "./App.css";

const initState = {
  count: 0,
};

function reducerFunction(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
/* if we want this reducer to use globally, we should mix useContext with this useReducer */

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initState);

  function plus() {
    dispatch({ type: "INCREMENT" });
  } /* here we are dispatching the type that are defined in the reducer function */
  function minus() {
    dispatch({ type: "DECREMENT" });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="app-head">Use Reducer Hook</h2>
        <h1 className="app-head">Count : {state.count}</h1>
        <button onClick={plus}>Plus One</button>
        <button onClick={minus}>Minus One</button>
      </header>
    </div>
  );
}

export default App;
/* redux is used for the global state management and
useReducer() is used for local state management. */
