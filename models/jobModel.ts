import mongoose, { Schema } from 'mongoose';

const jobSchema = new Schema(
	{
		company: {
			type: String,
			required: [true, 'Please enter product name'],
		},
		duration: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		logo: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
		description: {
			type: [String],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Job = mongoose.model('Job', jobSchema);

export default Job;
