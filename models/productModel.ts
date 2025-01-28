import mongoose, { Schema } from 'mongoose';

const productShcema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter product name'],
		},
		quantity: {
			type: Number,
			required: true,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model('Product', productShcema);

export default Product;
