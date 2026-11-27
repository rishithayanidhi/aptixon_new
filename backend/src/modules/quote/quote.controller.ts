
import type { RequestHandler } from "express";
import { createQuote } from "./quote.services";

export const submitQuote: RequestHandler = async (req, res) => {
  const quote = await createQuote(req.body);

  res.status(201).json({
    success: true,
    message: "Your website requirements were submitted successfully.",
    data: quote,
  });
};
