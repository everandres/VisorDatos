/*
require("dotenv").config();
import { Pool } from "pg";

const conexion = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432, // El puerto por defecto de PostgreSQL
});

export default conexion;
*/

// models/User.ts

import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId; // Include this if your documents have MongoDB's default _id field
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
}
