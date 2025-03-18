import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ title, description }) => {
  return (
    <div className="group text-white border-2 border-white rounded-3xl px-15 pt-10 pb-5 text-left transition-all duration-300">
      <h1 className="text-4xl font-medium">{title}</h1>
      <p className="mt-4 w-full text-xl">{description}</p>
      <button className="flex w-auto gap-5 mt-6 items-center border px-4 py-3 border-white text-white rounded-4xl transition-all duration-300 group-hover:bg-black group-hover:text-white">
        <span className="text-2xl">Read More</span>
        <div className="p-2 border border-white rounded-4xl text-center transition-transform duration-300 group-hover:rotate-90 group-hover:border-amber-300">
          <FaArrowRightLong />
        </div>
      </button>
    </div>
  );
};

export default Card;
