
import "dotenv/config";
import { z } from "zod";

const envSchema = z
  .object({
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),

    PORT: z.coerce.number().int().positive().default(5000),

    DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
    DIRECT_URL: z.string().min(1, "DIRECT_URL is required"),

    FRONTEND_URL: z.string().url().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.NODE_ENV === "production") {
      if (!data.FRONTEND_URL) {
        ctx.addIssue({
          code: "custom",
          path: ["FRONTEND_URL"],
          message: "FRONTEND_URL is required in production",
        });
        return;
      }

      const frontend = new URL(data.FRONTEND_URL);

      if (frontend.protocol !== "https:") {
        ctx.addIssue({
          code: "custom",
          path: ["FRONTEND_URL"],
          message: "Production FRONTEND_URL must use HTTPS",
        });
      }

      if (
        frontend.hostname === "localhost" ||
        frontend.hostname === "127.0.0.1"
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["FRONTEND_URL"],
          message: "Localhost is not allowed in production",
        });
      }
    }
  });

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment configuration:");
  console.error(parsedEnv.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = {
  ...parsedEnv.data,
  FRONTEND_URL:
    parsedEnv.data.FRONTEND_URL ?? "http://localhost:3000",
};
