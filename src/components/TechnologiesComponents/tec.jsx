// eslint-disable-next-line react/prop-types
export function Tec({ img, name, desc }) {
    return (
        <div className="w-44 h-[350px] bg-neutral-800 flex flex-col justify-baseline items-center rounded-md p-4 hover:translate-y-[-10px]  transform transition-all">
            <img src={img} alt={`Imagem de ${name}`} className="w-24 h-24 object-contain mb-4 mt-7" />
            <h2 className="text-white text-lg font-semibold m-3">{name}</h2>
            <p className="text-neutral-400 text-sm text-justify">{desc}</p>
        </div>
    );
}
