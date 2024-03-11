import Link from "next/link";

export default function BotonBienvenida() {
  return (
    <div className="absolute top-0 right-0 p-4">
      <button className="bg-gray-100 hover:bg-violet-100 text-gray-800 font-bold py-2 px-4 rounded-l size-26">
        <Link href="/">Casa</Link>
      </button>
      <button className="bg-gray-100 hover:bg-green-100 text-gray-800 font-bold py-2 px-4 rounded-r size-26">
        <Link href="/estaciones">Estaciones</Link>
      </button>
    </div>
  );
}
