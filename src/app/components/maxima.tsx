import { User } from "../(model)/conexion";

export function encontrarMaximaPrecipitacion(users: User[]): {
  nombreEstacion: string;
  maximaPrecipitacion: number;
  departamentoEstacion: string;
  municipioEstacion: string;
  diaMaximaPrecipitacion: string;
} {
  let maximaPrecipitacion = 0;
  let nombreEstacion = "";
  let departamentoEstacion = "";
  let municipioEstacion = "";
  let diaMaximaPrecipitacion = "";

  users.forEach((user) => {
    user.precipitacion.forEach((precipitacion) => {
      const [dia, valor] = Object.entries(precipitacion)[0];
      if (valor !== null && valor > maximaPrecipitacion) {
        maximaPrecipitacion = valor;
        nombreEstacion = user.ESTACION;
        departamentoEstacion = user.DPTO;
        municipioEstacion = user.MUNICIPIO;
        diaMaximaPrecipitacion = dia;
        // Asumiendo que 'user' tiene una propiedad 'nombre'
      }
    });
  });

  return {
    nombreEstacion,
    maximaPrecipitacion,
    departamentoEstacion,
    municipioEstacion,
    diaMaximaPrecipitacion,
  };
}

interface EstacionMaximaPrecipitacionProps {
  users: User[];
}

const EstacionMaximaPrecipitacion: React.FC<
  EstacionMaximaPrecipitacionProps
> = ({ users }) => {
  const {
    nombreEstacion,
    maximaPrecipitacion,
    departamentoEstacion,
    municipioEstacion,
    diaMaximaPrecipitacion,
  } = encontrarMaximaPrecipitacion(users);

  return (
    <>
      <div className="items-center max-w-sm p-4 bg-white border border-cyan-200 rounded-lg shadow dark:bg-yellow-300 dark:border-gray-700">
        {nombreEstacion ? (
          <p className="text-gray-500 dark:text-gray-400">
            La estación con la mayor <strong>precipitación</strong> registrada
            al momento es <strong>{nombreEstacion}</strong>, del municipio de{" "}
            <strong>
              {municipioEstacion}({departamentoEstacion}
              {})
            </strong>{" "}
            con un total de <strong>{maximaPrecipitacion} mm</strong> registrado
            el día <strong>{diaMaximaPrecipitacion}</strong> del presente mes.
          </p>
        ) : (
          <p>No se encontraron datos de precipitación.</p>
        )}
      </div>
    </>
  );
};

export default EstacionMaximaPrecipitacion;
