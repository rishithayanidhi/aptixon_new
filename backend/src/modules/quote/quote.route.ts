
import { Router } from "express";
import { submitQuote } from "./quote.controller";
import { quoteSchema } from "./quote.schema";
import { validateBody } from "../../middleware/validation.middleware";
import { formRateLimiter } from "../../middleware/rate-limit.middleware";

const router = Router();

router.post(
  "/",
  formRateLimiter,
  validateBody(quoteSchema),
  submitQuote
);

export default router;
