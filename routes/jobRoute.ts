import express from 'express';
import { getJobs, getJob, addJob, updateJob, deleteJob } from '../controllers/jobControllers';

const router = express.Router();

router.get('/', getJobs);

router.get('/:id', getJob);

router.post('/', addJob);

router.put('/:id', updateJob);

router.delete('/:id', deleteJob);

export default router;
