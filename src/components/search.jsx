import axios from "axios";
import Item from "./Item";
import Loader from "./loader";
import { useContext } from "react";
import Datacontext from "../context/context";

import { useEffect } from "react";

function Search() {
  const { Loading, setLoading, Term, setTerm, Data, setData, Error, setError } =
    useContext(Datacontext);

  const onChange = (e) => {
    setTerm(e.target.value);
    setLoading(true);
    console.log(Term);
    if (Term !== "") {
      setData([]);
    }
  };

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Term}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setData(response.data.drinks);
        console.log(Data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError("NETWORK ERROR");
        setLoading(false);
      });
    // eslint-disable-next-line
  }, [Term]);
  return (
    <section className="bg-gray-400 min-h-screen">
      <div className="flex container mx-auto items-center flex-col w-fit">
        <input
          className="p-1 border-blue-400 border-2 rounded-xl outline-none"
          placeholder="SEARCH A COCKTAIL"
          type="text"
          onChange={onChange}
        />
        <div className=" text-4xl">COCKTAILS</div>
        <div className="text-5xl text-red-700 p-10">{Error}</div>
      </div>
      {Loading ? (
        <Loader />
      ) : (
        <div className="flex justify-center pb-20">
          {Data ? (
            <div className=" justify-center flex">
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8 mx-auto">
                {Data?.map((item) => (
                  <Item
                    key={item.idDrink}
                    id={item.idDrink}
                    Drink={item.strDrink}
                    image={item.strDrinkThumb}
                    alcohol={item.strAlcoholic}
                    category={item.strCategory}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-5xl text-red-700 p-10">Cocktail Not Found</div>
          )}
        </div>
      )}
    </section>
  );
}
export default Search;
