import { Pro } from "./Projects/pro";
import vitaValore from "../assets/VitaValore.png";
import monito from "../assets/monito.png";
export function Projects() {
  return (
    <div className="flex h-screen flex-col  items-center ">
      <h1 className="text-3xl text-[#c70601] font-bold mt-28">Projects</h1>
      <div className=" grid grid-cols-2 gap-10 pl-5 pr-5 ">
        <Pro
          name="Vita Valore"
          desc="Vita Valore is an integrated ecosystem designed for individuals looking to organize their daily routines. It also features a marketplace where fitness-oriented businesses can sell their products. The platform offers a wide range of powerful features, including interactive dashboards, seamless integration between services, and much more"
          link={[
            {
              name: "Front End",
              redirect: "https://github.com/Caua23/VitaValoreFront",
            },
            {
              name: "Back End",
              redirect: "https://github.com/Caua23/VitaValore",
            },
            {
              name: "Mobile",
              redirect: "https://github.com/Caua23/VitaValoreApp",
            },
          ]}
          techs={[
            "React",
            "Java",
            "Spring Boot",
            "Spring Security",
            "MySQL",
            "TailwindCSS",
            "TypeScript",
            "Flutter",
            "Dart",
          ]}
          img={vitaValore}
        />


        <Pro
           name={"Monito Pet"}
          //  demo={}
           desc={"Monito Pet was a basic project developed as part of a challenge proposed by Compass UOL. It was designed to evaluate data structures and system design fundamentals, and it also features integration with AWS services"}
           img={monito}
           link={[
             {
               name: "Front End",
               redirect: "https://github.com/Caua23/Front-MonitoPetCompassUol",
             },
              {
                name: "Back End",
                redirect: "https://github.com/Caua23/Back-MonitoPetCompassUol",
              },
            ]}
           techs={
              [
                "React",
                "TypeScript",
                "Nest.js",
                "MongoDB",
                "AWS S3",
              ]
           }
           key={"Monito Pet"}
        />
      </div>
    </div>
  );
}
