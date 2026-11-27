
import app from "./app";
import { env } from "./config/env";
import prisma from "./config/database";

const server = app.listen(env.PORT, () => {
  console.log(`Aptixon API listening on port ${env.PORT}`);
});

let isShuttingDown = false;

async function shutdown(signal: string) {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;

  console.log(`${signal} received. Shutting down API server...`);

  server.close(async (error) => {
    try {
      await prisma.$disconnect();

      if (error) {
        console.error("HTTP server shutdown failed:", error.message);
        process.exitCode = 1;
      } else {
        console.log("Database disconnected successfully.");
        console.log("API server shut down successfully.");
      }
    } catch (disconnectError) {
      console.error("Database disconnection failed.");
      process.exitCode = 1;
    }
  });
}

process.on("SIGINT", () => {
  void shutdown("SIGINT");
});

process.on("SIGTERM", () => {
  void shutdown("SIGTERM");
});
