import React from "react";

const LeyendaPrecipitacion: React.FC = () => {
  // Ajusta ItemLeyenda para manejar colores hexadecimales y clases de Tailwind
  const ItemLeyenda = ({ color, texto }: { color: string; texto: string }) => {
    // Verifica si el color es un valor hexadecimal
    const isHexColor = /^#([0-9A-F]{3,4}){1,2}$/i.test(color);

    return (
      <div className="flex justify-left items-center mb-2 text-sm px-4 w-auto overflow-x-auto">
        <span
          className={`inline-block h-4 w-4 rounded-full mr-2 ${
            !isHexColor ? color : ""
          }`}
          style={isHexColor ? { backgroundColor: color } : {}}
        ></span>
        {texto}
      </div>
    );
  };

  return (
    <div className="flex flex-col ml-2 md:ml-5 mb-2 md:mb-8 bg-slate-100 bg-opacity-40 p-2 md:p-5 rounded-lg">
      <ItemLeyenda color="#808080" texto="Sin información de precipitación" />
      <ItemLeyenda color="#F55B5B" texto="0.0 mm" />
      <ItemLeyenda color="#59B6F3" texto="de 0.1 a 20.0 mm" />
      <ItemLeyenda color="#146AA2" texto="> 20 mm y <50 mm" />
      <ItemLeyenda color="#0204A7" texto="> 50 mm" />
      <ItemLeyenda color="#800080" texto="Superó el registro histórico" />
    </div>
  );
};

export default LeyendaPrecipitacion;
