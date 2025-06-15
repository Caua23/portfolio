import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { HomeMain } from "../components/HomeMain";
import { About } from "../components/About";
import { Technologies } from "../components/Technologies";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experiencias";
import { Certificados } from "../components/Certificado";
// import { Experience } from "../components/Experience";

export function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain/>}/>
        <Route path="/sobre" element={<About/>} />
        <Route path="/tecnologias" element={<Technologies/>} />
         <Route path="/experiencias" element={<Experience/>} /> 
         <Route path="/certificados" element={<Certificados/>} /> 
        <Route path="/projetos" element={<Projects/>} />
      </Routes>
    </div>
  );
}
