import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel';

export const getProducts = asyncHandler(async (req: Request, res: Response): Promise<any> => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (err: unknown) {
		if (typeof err === 'string') {
			res.status(500);
			throw new Error(err);
		} else if (err instanceof Error) {
			res.status(500);
			throw new Error(err.message);
		} else {
			res.status(500);
			console.log('Unknown error occurred');
		}
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

export const getProduct = asyncHandler(async (req: Request, res: Response): Promise<any> => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		if (!product) {
			res.status(404);
			throw new Error(`We could not find any product with ID ${id}`);
		}
		res.status(200).json(product);
	} catch (err: unknown) {
		if (typeof err === 'string') {
			res.status(500);
			throw new Error(err);
		} else if (err instanceof Error) {
			res.status(500);
			throw new Error(err.message);
		} else {
			res.status(500);
			console.log('Unknown error occurred');
		}
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

export const addProduct = asyncHandler(async (req: Request, res: Response) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (err: unknown) {
		if (typeof err === 'string') {
			res.status(500);
			throw new Error(err);
		} else if (err instanceof Error) {
			res.status(500);
			throw new Error(err.message);
		} else {
			res.status(500);
			console.log('Unknown error occurred');
		}
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

export const updateProduct = asyncHandler(async (req: Request, res: Response): Promise<any> => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
		if (!product) {
			res.status(404);
			throw new Error(`We could not find any product with ID ${id}`);
		}
		res.status(200).json(product);
	} catch (err: unknown) {
		if (typeof err === 'string') {
			res.status(500);
			throw new Error(err);
		} else if (err instanceof Error) {
			res.status(500);
			throw new Error(err.message);
		} else {
			res.status(500);
			console.log('Unknown error occurred');
		}
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

export const deleteProduct = asyncHandler(async (req: Request, res: Response): Promise<any> => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndDelete(id);
		if (!product) {
			res.status(404);
			throw new Error(`We could not find any product with ID ${id}`);
		}
		res.status(200).json(product);
	} catch (err: unknown) {
		if (typeof err === 'string') {
			res.status(500);
			throw new Error(err);
		} else if (err instanceof Error) {
			res.status(500);
			throw new Error(err.message);
		} else {
			res.status(500);
			console.log('Unknown error occurred');
		}
		res.status(500).json({ message: 'Internal Server Error' });
	}
});
