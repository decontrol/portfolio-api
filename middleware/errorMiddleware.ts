import { Request, Response, NextFunction } from 'express';
import 'dotenv/config.js';

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log('Here is a error middleware', typeof next);
	const statusCode = res.statusCode ?? 500;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'development' ? err.stack : null,
	});
};
