import axios from "axios";
import Loader from "./loader";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

function Search() {
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState();
  const { id } = useParams();
  const [Error, setError] = useState("");

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}
  `;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTimeout(() => {
          setData(response.data.drinks[0]);
          setLoading(false);
        }, 2000);

        console.log(Data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError("NETWORK ERROR");
        setLoading(false);
      }); // eslint-disable-next-line
  }, []);
  const ingre = [
    Data?.strIngredient1,
    ",",
    Data?.strIngredient2,
    ",",
    Data?.strIngredient3,
    ",",
    Data?.strIngredient4,
    ",",
    Data?.strIngredient5,

    // eslint-disable-next-line
  ];

  return (
    <section className="bg-gray-400 py-5 min-h-screen">
      <div className="flex container mx-auto items-center flex-col w-fit">
        <div className=" text-4xl">COCKTAILS</div>
        <div className="text-5xl text-red-700 p-10">{Error}</div>
        <div>{Loading && <Loader />}</div>
      </div>
      {!Loading && (
        <div className="flex justify-around container flex-col mx-auto md:flex-row">
          <img
            className="md:w-[40%] w-[70%] rounded-md ]"
            src={Data?.strDrinkThumb}
            alt=""
          />
          <div className="md:w-[40%] w-[70%] flex flex-col space-y-3 ">
            <div className="flex space-x-6 items-center">
              <span className=" text-2xl font-bold">Name :</span>
              <p className="text-xl">{Data?.strDrink}</p>
            </div>
            <div className="flex space-x-6 items-center">
              <span className=" text-2xl font-bold">Category : </span>{" "}
              <p className="text-xl">{Data?.strCategory}</p>
            </div>
            <div className="flex space-x-6 items-center">
              <span className=" text-2xl font-bold">Info :</span>
              <p className="text-xl">{Data?.strAlcoholic}</p>
            </div>
            <div className="flex space-x-6 items-center">
              <span className=" text-2xl font-bold">Glass :</span>
              <p className="text-xl">{Data?.strGlass}</p>
            </div>
            <div className="flex  flex-col  ">
              <span className=" text-2xl font-bold">Instructions :</span>
              <p className="text-xl">{Data?.strInstructions}</p>
            </div>
            <div className="flex flex-col space-y-2 ">
              <span className=" flex  text-2xl font-bold">Ingredients :</span>

              <div className="text-xl">{ingre}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default Search;
