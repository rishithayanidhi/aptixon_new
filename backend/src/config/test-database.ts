
import "dotenv/config";
import prisma from "./database";

async function testDatabase() {
  try {
    await prisma.$connect();

    const result = await prisma.$queryRaw<
      Array<{ database: string }>
    >`SELECT current_database() AS database`;

    console.log("Database connected successfully!");
    console.log("Database:", result[0]?.database);
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();
