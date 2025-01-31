import { AppWindow, Github } from "lucide-react";

// eslint-disable-next-line react/prop-types
export function Pro({ img, name, desc, link, demo }) {
  return (
    <div
      className="
        flex  items-center bg-neutral-800  rounded-[20px] 
         w-7xl h-80 p-10 m-5 gap-2 hover:-translate-y-3 
          transform transition-all border-2 border-white
          "
    >
      <img
        src={img}
        width="350"
        height="350"
        className=" rounded-[10px]  lg:col-span-5"
        alt=""
      />

      <div className="flex flex-col w-full h-full ">
        <div className="flex justify-between  w-full items-center">
          <h1 className="text-5xl text-white font-bold text-justify">{name}</h1>
          <div className="flex gap-5">
            {demo && (
              <button className="">
                <a href={demo} target="_blank" rel="">
                  <AppWindow size={40} className="bg-neutral-500 rounded-full p-2 w-13 h-13" color="white" />
                </a>
              </button>
            )}
            <a href={link} className="  ">
              <Github size={40} className="bg-neutral-500 rounded-full p-2 w-13 h-13" color="white" />
            </a>
          </div>
        </div>
        <p className="text-white text-md  w-full  mt-8 text-justify ">{desc}</p>
      </div>
    </div>
  );
}
