import { config } from "dotenv";
config(); // Esto carga las variables de entorno desde '.env'

import { MongoClient } from "mongodb";

const uri: string = process.env.MONGODB_URI || "tu_uri_de_conexion_a_mongodb";
if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

const options = {};
const client: MongoClient = new MongoClient(uri, options);

// Define una función asincrónica para intentar conectar con reintentos
const connectWithRetry = async (
  client: MongoClient,
  maxAttempts: number = 3
): Promise<MongoClient> => {
  let attempt: number = 1; // Intento actual
  while (attempt <= maxAttempts) {
    try {
      console.log(`Intentando conectar, intento ${attempt}...`);
      const clientConnection: MongoClient = await client.connect();
      console.log("Conexión exitosa a la base de datos."); // Mensaje de conexión exitosa
      return clientConnection;
    } catch (error) {
      console.error(
        `Error al conectar a MongoDB en el intento ${attempt}`,
        error
      );
      if (attempt === maxAttempts) {
        throw new Error(
          "Maximo de intentos de conexión alcanzado. No se pudo conectar a MongoDB."
        );
      }
      // Incrementa el tiempo de espera para el próximo intento
      const backoffTime: number = Math.pow(2, attempt) * 100; // Exponencial backoff
      console.log(`Esperando ${backoffTime}ms antes del próximo intento...`);
      await new Promise((resolve) => setTimeout(resolve, backoffTime));
      attempt++;
    }
  }
  throw new Error("No se pudo conectar a MongoDB después de varios intentos.");
};

// Uso de la función de conexión con reintentos
let clientPromise: Promise<MongoClient> = connectWithRetry(client);

export default clientPromise;
