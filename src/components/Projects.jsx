import { Pro } from "./Projects/pro";

export function Projects() {
    return (
        <div className="flex h-screen flex-col justify-center items-center ">
            <h1 className="text-3xl text-[#c70601] font-bold ">
                Projects
            </h1>
            <div>
                <Pro name="Vita Valore" desc="A Mobile and Web application to manage your day to day tasks" demo={""} link="https://github.com/Caua23/VitaValore" img="https://raw.githubusercontent.com/Caua23/VitaValoreApp/refs/heads/main/assets/VitaValoreLogo2.png"/>
            </div>
        </div>
    );
}