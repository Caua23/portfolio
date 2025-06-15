/* eslint-disable react/prop-types */
import { AppWindow } from "lucide-react";

export function Pro({ img, name, desc, link, demo, techs }) {
  return (
    <div className="w-[500px] h-auto flex flex-col justify-evenly p-5 m-5 bg-[#131313] rounded-2xl shadow-lg">
      <img className="w-full h-56 rounded-2xl object-cover" src={img} alt={`Image of ${name}`} />
      
      <div >
        <h3 className="text-xl font-bold text-white mb-2 mt-5">{name}</h3>
        <p className="text-gray-400 max-w-[450px] mb-2 text-justify">{desc}</p>
        </div>
        {techs?.length > 0 && (
          <p className="text-white max-w-[450px] mb-2 text-justify">
            <strong>Technologies:</strong><br />{techs.join(", ")}
          </p>
        )}
      

      <div className="flex flex-col gap-3 mt-3">
        {link.map((l, index) => (
          <button
            key={index}
            onClick={() => window.open(l.redirect, "_blank", "noopener,noreferrer")}
            className="relative text-black bg-white px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-500 cursor-pointer w-full flex justify-center items-center"
          >
            <img
              src="https://img.icons8.com/?size=100&id=16318&format=png&color=000000"
              alt="Link icon"
              className="absolute left-4 w-6 h-6"
            />
            <span className="text-center font-semibold">{l.name}</span>
          </button>
        ))}
      </div>

      {demo && (
        <button
          onClick={() => window.open(demo, "_blank", "noopener,noreferrer")}
          className="mt-3 relative text-black bg-white px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-500 cursor-pointer w-full flex justify-center items-center"
        >
          <AppWindow className="absolute left-4 w-6 h-6" />
          <span className="text-center font-semibold">Demo</span>
        </button>
      )}
    </div>
  );
}
