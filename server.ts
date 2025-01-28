import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';
import cors from 'cors';
import productRoute from './routes/productRoute';
import { errorMiddleware } from './middleware/errorMiddleware';

const app: Express = express();

const config = {
	MONGO_URI: process.env.MONGO_URI as string,
	PORT: process.env.PORT ? Number(process.env.PORT) : 5000,
	FRONTEND: process.env.FRONTEND as string,
};
const MONGO_URI: string = process.env.MONGO_URI as string;
const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to use form urlencoded option in Insomnia, Postman etc
const corsOptions = {
	origin: [config.FRONTEND, 'https://example.com'],
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions)); // implemented in productRoute.ts

// Routes
app.use('/api/v1/products', productRoute);
app.get('/', (req: Request, res: Response) => {
	res.send('Hello world');
});

app.get('/blog', (req: Request, res: Response) => {
	res.send('Hello Blogs');
});

app.use(errorMiddleware);

mongoose.set('strictQuery', false);
mongoose
	.connect(config.MONGO_URI!)
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(config.PORT, () => {
			console.log(`Server is running on port ${config.PORT}`);
		});
	})
	.catch((err) => console.log(err));
