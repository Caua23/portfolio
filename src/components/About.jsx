export function About() {
    let data = new Date();
    let ano = data.getFullYear();
    let idade =  ano - 2008;
    
    
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <h1
        className="text-3xl text-[#c70601] font-bold
            "
      >
        About me
      </h1>

      <p className="text-white text-md w-1/2 mt-8 text-justify ">
        Hello, my name is Cauã Vargas, Im Brazilian, {idade} years old, and Im
        passionate about the IT field. Currently, I am pursuing a Technical
        degree in Internet Computing at QI Faculdade & Escola Técnica, and, at
        the same time, I am working as an intern at Compass UOL, where I am a
        fullstack developer using Node.js and React. I am a committed and
        organized developer, always striving to improve my skills. Currently, I
        study React, TypeScript, and Java, with a focus on backend development
        using Spring Boot. I also have a solid foundation in Information
        Security, Hacking, and knowledge in mobile development, networking, and
        hardware. I am looking for new projects
      </p>
    </div>
  );
}
