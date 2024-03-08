import { config } from "dotenv";
config(); // Esto carga las variables de entorno desde '.env'

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "tu_uri_de_conexion_a_mongodb";
if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

const options = {};

let client = new MongoClient(uri, options);
let clientPromise: Promise<MongoClient>;

// Asumiendo un enfoque simplificado para manejo en ambos entornos
clientPromise = client.connect();

export default clientPromise;
