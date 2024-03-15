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
      <ItemLeyenda color="#FFFF13" texto="0.0 mm" />
      <ItemLeyenda color="#FFFFFF" texto="> 0.1 mm y <= 20.0 mm" />
      <ItemLeyenda color="#0000FF" texto="> 20 mm y <= 40 mm" />
      <ItemLeyenda color="#FF0000" texto="> 40 mm" />
      <ItemLeyenda
        color="#800080"
        texto="Superó el registro histórico de precipitación"
      />
    </div>
  );
};
// #F55B5B #0204A7
export default LeyendaPrecipitacion;
