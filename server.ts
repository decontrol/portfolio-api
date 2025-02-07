import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';
import cors from 'cors';
import jobRouter from './routes/jobRoute';
import productRouter from './routes/productRoute';
import { errorMiddleware } from './middleware/errorMiddleware';

const app: Express = express();

const config = {
	MONGO_URI: process.env.MONGO_URI as string,
	PORT: process.env.PORT ? Number(process.env.PORT) : 5000,
	FRONTEND: process.env.FRONTEND as string,
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to use form urlencoded option in Insomnia, Postman etc
const corsOptions = {
	origin: [config.FRONTEND, 'http://localhost:5173', 'https://hyungjukwon.netlify.app'],
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Routes
app.use('/api/v1/products', productRouter);
app.use('/api/v1/jobs', jobRouter);

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
