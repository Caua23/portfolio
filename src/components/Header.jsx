import { Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

export function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

    // Função para detectar o scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setIsScrolled(true);  
            } else {
                setIsScrolled(false);  
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <header className={`select-none z-20 text-[#c70601] flex justify-around font-semibold fixed w-screen  h-20 items-center  ${isScrolled ? 'transform -translate-y-full' : ''}`}>
      <div className="">
        <h1
          className=" text-4xl font-medium hover:cursor-pointer hover:text-white duration-500 "
          style={{ fontFamily: "'Smooch Sans', sans-serif" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Dev. Vargas
        </h1>
      </div>

      <ul className="flex gap-10 ">
        <li
          className="hover:cursor-pointer hover:text-white duration-500 "
          onClick={() => {
            navigate("/sobre");
          }}
        >
          About me
        </li>
        <li
          className="hover:cursor-pointer hover:text-white duration-500  "
          onClick={() => {
            navigate("/tecnologias");
          }}
        >
          Technologies
        </li>
        <li
          className="hover:cursor-pointer hover:text-white duration-500 "
          onClick={() => {
            navigate("/experiencias");
          }}
        >
          Experience
        </li> 
        <li
          className="hover:cursor-pointer hover:text-white duration-500 "
          onClick={() => {
            navigate("/certificados");
          }}
        >
          Certificates
        </li>
        <li
          className="hover:cursor-pointer hover:text-white duration-500 "
          onClick={() => {
            navigate("/projetos");
          }}
        >
          Projects
        </li>
      </ul>
      <div className="flex gap-4">
        <a className="hover:cursor-pointer" href="https://github.com/Caua23">
          <Github color="#c70601" size={25}  />
        </a>
        <a className="hover:cursor-pointer" href="">
          <Linkedin color="#c70601"  size={25}  />
        </a>
      </div>
    </header>
  );
}
