import { Tec } from "./TechnologiesComponents/tec";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";

export function Technologies() {
    return (
        <div className="flex overflow-auto select-none h-full flex-wrap gap-15 justify-center items-center pt-32 pb-10 p-10"> 
            <Tec name="React" img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" desc="React is a JavaScript library for building user interfaces." />
            <Tec name="TypeScript" img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" desc="TypeScript is a superset of JavaScript that adds static types." />
            <Tec name="Java" img={java} desc="Java is a popular object-oriented programming language." />
            <Tec name="Spring Boot" img="https://img.icons8.com/?size=512&id=90519&format=png" desc="Spring Boot simplifies Java application development with production-ready features." />
            <Tec name="MySQL" img={mysql} desc="MySQL is a fast, reliable relational database management system." />
            <Tec name="Git" img="https://img.icons8.com/color/512/git.png" desc="Git is a distributed version control system for tracking changes in source code." />
            <Tec name="Flutter" img="https://images.seeklogo.com/logo-png/35/2/flutter-logo-png_seeklogo-354671.png" desc="Flutter is an open-source mobile app development framework created by Google." />
            <Tec name="Node.js" img="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" desc="Node.js enables server-side JavaScript for scalable applications." />
            
        </div>
    );
}
