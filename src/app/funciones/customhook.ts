// useEstacion.ts
import { useState, useEffect } from "react";

// Definir el tipo de datos que esperas recibir, ajusta según la respuesta de tu API
interface EstacionData {
  CODIGO: number;
  LON: number;
  LAT: number;
  ELEV: number;
  ESTACION: string;
  DPTO: string;
  MUNICIPIO: string;
  AREA_HIDROGRAFICA: string;
  ZONA_HIDROGRAFICA: string;
  SUBZONA_HIDROGRAFICA: string;
  PRECTOTAL: number;
  PROM_MULT: number;
  MAX_MES: number;
  MAX_HIST: number;
  precipitacion: Array<{ [key: string]: number }>;
  T_MIN_MES: number;
  T_MIN_HIST: number;
  t_min: Array<{ [key: string]: number }>;
  T_MAX_MES: number;
  T_MAX_HIST: number;
  t_max: Array<{ [key: string]: number }>;
}

function useEstacion(id: string) {
  const [data, setData] = useState<EstacionData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEstacion = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/api/precipitacion/${id}`
        );
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchEstacion();
    }
  }, [id]); // El efecto se ejecuta cada vez que el ID cambia

  return { data, isLoading, error };
}

export default useEstacion;
