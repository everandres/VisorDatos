import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/(model)/mongodb";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const codigo = params?.id; // Asume que la ruta es algo como /api/estacion/:codigo
  try {
    const client = await clientPromise;
    const db = client.db("visor");
    const estacion = await db
      .collection("precs")
      .findOne({ CODIGO: parseInt(codigo, 10) });

    if (!estacion) {
      return new NextResponse(
        JSON.stringify({ message: "Estación no encontrada" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new NextResponse(JSON.stringify(estacion), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error al conectar a la base de datos" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
