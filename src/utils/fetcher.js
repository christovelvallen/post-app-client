import axios from 'axios';

export const fetcher = async endpoint => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}${endpoint}`);
	return res.data;
};
