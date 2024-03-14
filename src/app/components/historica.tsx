import { User } from "../(model)/conexion";

export function contarEstacionesSuperanMaxHist(users: User[]): number {
  let contador = 0;

  users.forEach((user) => {
    // Verifica que MAX_HIST tenga un valor válido antes de realizar la comparación
    if (user.MAX_HIST != null) {
      let superaMaxHist = user.precipitacion.some((precipitacion) => {
        const [dia, valor] = Object.entries(precipitacion)[0];
        return valor > user.MAX_HIST;
      });

      if (superaMaxHist) {
        contador++;
      }
    }
  });

  return contador;
}

interface EstacionesSuperanMaxHistProps {
  users: User[];
}

const EstacionesSuperanMaxHist: React.FC<EstacionesSuperanMaxHistProps> = ({
  users,
}) => {
  const estacionesQueSuperan = contarEstacionesSuperanMaxHist(users);

  return (
    <div className="flex justify-center items-center max-w-sm p-4 bg-white border border-cyan-200 rounded-lg shadow dark:bg-yellow-300 dark:border-gray-700">
      {estacionesQueSuperan > 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          Un total de <strong>{estacionesQueSuperan}</strong> estación(es) han
          superado su valor máximo histórico de precipitación en lo transcurrido
          del mes.
        </p>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">
          No se encontraron estaciones que hayan superado su máximo histórico de
          precipitación en lo transcurrido del mes.
        </p>
      )}
    </div>
  );
};

export default EstacionesSuperanMaxHist;
