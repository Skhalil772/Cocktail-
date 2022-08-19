import { createContext } from "react";
import { useState } from "react";
const Datacontext = createContext({});
export const DataProvider = ({ children }) => {
  const [Loading, setLoading] = useState(false);
  const [Term, setTerm] = useState("a");
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");

  return (
    <Datacontext.Provider
      value={{
        Loading,
        setLoading,
        Term,
        setTerm,
        Data,
        setData,
        Error,
        setError,
      }}
    >
      {children}
    </Datacontext.Provider>
  );
};
export default Datacontext;
