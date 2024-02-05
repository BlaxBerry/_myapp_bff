import { type Request, type Response } from "express";

export default function logger(req: Request, res: Response) {
  const now = new Date();
  const formattedDate = now.toISOString();

  const statusCode = res.statusCode;
  const method = req.method;
  const path = req.originalUrl;

  // TODO:
  /* eslint-disable-next-line no-console */
  console.log(`[BFF] ${formattedDate}\t${statusCode}\t\t${method}\t${path}`);
}
