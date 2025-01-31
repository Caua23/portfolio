import img from "../assets/img1.png";

export function HomeMain() {
  return (
    <div className="flex justify-around select-none">
        
      <div
        style={{ marginLeft: "5%" }}
        className="text-white   h-screen flex flex-col justify-center font-bold leading-20"
      >
        <p className="text-2xl text-[#c70601]">Hello 👋🏼</p>
        <h1 className="text-6xl">I am Vargas,</h1>
        <h2 className="text-3xl text-neutral-500">Full Stack Developer</h2>
      </div>
      <div className="flex  items-center justify-center ">
        <img className="h-56 rounded-full z-10 relative  " src={img} alt="" />
        <div className="bg-[#c70601] rounded-full h-[250px] w-[250px] absolute blur-3xl "></div>
      </div>
    </div>
  );
}
