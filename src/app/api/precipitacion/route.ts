/*import conexion from "@/app/(model)/conexion";
import { NextResponse, NextRequest } from "next/server";

export const GET = async () => {
  const { rows } = await conexion.query("SELECT * FROM public.precipitacion");
  return NextResponse.json(rows, { status: 200 });
};
*/

import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/(model)/mongodb";
import { Db } from "mongodb";
import { User } from "@/app/(model)/conexion";

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db: Db = client.db("visor");

    const users = (await db
      .collection("precs")
      .find()
      .toArray()) as unknown as User[];

    return new NextResponse(JSON.stringify(users), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return new NextResponse(
      JSON.stringify({ message: "Error al conectar a la base de datos ${e}" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
