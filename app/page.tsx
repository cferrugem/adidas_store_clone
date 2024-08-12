import prisma from "@/app/lib/db";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";



export default async function Home() {
  const sales = await prisma.sales_adidas_2.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Página Principal</h1>
      { <div>
        {sales.map((sale) => (
          <div key={sale.index} className="flex flex-col items-center">
            <h2>{sale.name}</h2>
            <p>{sale.selling_price}</p>
          </div>
        ))}
      </div> }
    </main>
  );
}
