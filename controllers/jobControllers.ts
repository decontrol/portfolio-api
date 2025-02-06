import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Job from '../models/jobModel';

export const getJobs = asyncHandler(async (req: Request, res: Response): Promise<any> => {
	try {
		const jobs = await Job.find({});
		res.status(200).json(jobs);
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

export const getJob = asyncHandler(async (req: Request, res: Response): Promise<any> => {
	try {
		const { id } = req.params;
		const job = await Job.findById(id);
		if (!job) {
			res.status(404);
			throw new Error(`We could not find any job with ID ${id}`);
		}
		res.status(200).json(job);
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

export const addJob = asyncHandler(async (req: Request, res: Response) => {
	try {
		const job = await Job.create(req.body);
		res.status(200).json(job);
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

export const updateJob = asyncHandler(async (req: Request, res: Response): Promise<any> => {
	try {
		const { id } = req.params;
		const job = await Job.findByIdAndUpdate(id, req.body, { new: true });
		if (!job) {
			res.status(404);
			throw new Error(`We could not find any job with ID ${id}`);
		}
		res.status(200).json(job);
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

export const deleteJob = asyncHandler(async (req: Request, res: Response): Promise<any> => {
	try {
		const { id } = req.params;
		const job = await Job.findByIdAndDelete(id);
		if (!job) {
			res.status(404);
			throw new Error(`We could not find any job with ID ${id}`);
		}
		res.status(200).json(job);
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
