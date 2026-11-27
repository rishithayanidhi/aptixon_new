
import type { ErrorRequestHandler } from "express";

export const errorMiddleware: ErrorRequestHandler = (
  error,
  _req,
  res,
  next
) => {
  if (res.headersSent) {
    next(error);
    return;
  }

  // Reject unauthorized frontend origins
  if (error?.message === "Not allowed by CORS") {
    res.status(403).json({
      success: false,
      message: "Origin not allowed",
    });
    return;
  }

  // Handle invalid JSON request bodies
  if (error?.type === "entity.parse.failed") {
    res.status(400).json({
      success: false,
      message: "Invalid JSON request body",
    });
    return;
  }

  // Handle oversized request bodies
  if (error?.type === "entity.too.large") {
    res.status(413).json({
      success: false,
      message: "Request body is too large",
    });
    return;
  }

  const statusCode =
    typeof error?.status === "number" &&
    error.status >= 400 &&
    error.status < 600
      ? error.status
      : 500;

  // Detailed errors only in development
  if (process.env.NODE_ENV !== "production") {
    console.error("API Error:", error);
  } else {
    console.error("API Error:", {
      name: error?.name || "UnknownError",
      statusCode,
    });
  }

  res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500
        ? "Internal server error"
        : "Request could not be processed",
  });
};
