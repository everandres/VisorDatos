import Link from "next/link";

export default function BotonBienvenida() {
  return (
    <div className="absolute top-0 right-0 p-4">
      <button
        onClick={() => window.open("http://192.168.156.8:4500/", "_blank")}
        className="bg-gray-100 hover:bg-violet-100 text-gray-800 font-bold py-2 px-4 rounded-l size-26"
      >
        Visor Alertas
      </button>
      <button className="bg-gray-100 hover:bg-green-100 text-gray-800 font-bold py-2 px-4 rounded-r size-26">
        <Link href="/estaciones">Precipitación</Link>
      </button>
      <button className="bg-gray-100 hover:bg-green-100 text-gray-800 font-bold py-2 px-4 rounded-r size-26">
        <Link href="/temperaturas">Temperaturas</Link>
      </button>
    </div>
  );
}
