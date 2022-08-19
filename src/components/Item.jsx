import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Item({ image, Drink, category, alcohol, id }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      className="bg-orange-300 max-w-[300px]   rounded-lg shadow-md shadow-black"
    >
      <div className="flex flex-col  ">
        <img
          data-aos="zoom-in-up"
          className="rounded-t-lg"
          src={image}
          alt=""
        />
        <div className="px-2 py-4 flex flex-col space-y-1">
          <span className="text-4xl font-bold">{Drink}</span>
          <h2 className="text-xl font-semibold">{category}</h2>
          <h3 className="text-lg font-thin   text-gray-100">{alcohol}</h3>
          <Link
            rel="noopener"
            target="_blank"
            to={`/${id}`}
            className="px-3 py-1 bg-black text-white rounded-md w-fit "
          >
            DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Item;
