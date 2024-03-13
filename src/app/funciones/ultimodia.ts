interface Precipitacion {
  [key: string]: number;
}
const obtenerUltimoValorPrecipitacion = (
  precipitaciones: Precipitacion[] | null
): { dia: string; valor: number | null } | null => {
  // Proporciona un arreglo vacío como valor predeterminado si precipitaciones es null/undefined
  const precipitacionesSeguras = precipitaciones || [];
  if (precipitacionesSeguras.length === 0) return null;
  const ultimaPrecipitacion =
    precipitacionesSeguras[precipitacionesSeguras.length - 1];
  const dia = Object.keys(ultimaPrecipitacion)[0];
  const valor =
    ultimaPrecipitacion[dia] !== undefined ? ultimaPrecipitacion[dia] : null;
  return { dia, valor };
};

export default obtenerUltimoValorPrecipitacion;
