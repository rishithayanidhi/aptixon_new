
import express from "express";
import cors from "cors";
import helmet from "helmet";
import quoteRoutes from "./modules/quote/quote.route";
import { env } from "./config/env";
import { apiRateLimiter } from "./middleware/rate-limit.middleware";
import { errorMiddleware } from "./middleware/error.middleware";

const app = express();
app.set("trust proxy", 1);

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Aptixon API",
    health: "/api/v1/health",
  });
});

app.disable("x-powered-by");

app.use(helmet());

const allowedOrigins = [
  "http://localhost:3000",
  env.FRONTEND_URL,
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "1mb" }));

app.use("/api", apiRateLimiter);

app.use("/api/v1/quotes", quoteRoutes);

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Aptixon API is running",
    environment: env.NODE_ENV,
  });
});

app.use(errorMiddleware);

export default app;
