import { useReducer } from "react";
import Context from "./Context";
import reducer, { initialSate } from "./Reducer";
function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialSate);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export default Provider;
