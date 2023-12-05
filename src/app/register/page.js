'use client';

import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { useUserState } from '@/contexts';

export default function RegisterPage() {
	const router = useRouter();

	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState(false);

	const { state, dispatch } = useUserState();

	const handleRegister = async e => {
		e.preventDefault();

		await axios
			.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/local/register`, {
				username,
				email,
				password,
			})
			.then(res => {
				dispatch({
					type: 'ADD_DATA',
					payload: res.data,
				});

				setError(false);
				router.replace('/');
			})
			.catch(err => {
				setError(err.response.data.error.message);
			});
	};

	return (
		<div className="container mx-auto p-4">
			<div className="max-w-[400px] mx-auto">
				<div className="pb-8">
					<button onClick={() => router.back()} className="btn btn-ghost">
						<BiArrowBack />
						<p className="font-bold">Kembali</p>
					</button>
				</div>

				<form
					onSubmit={handleRegister}
					className="flex flex-col items-center gap-4"
				>
					<input
						onChange={e => setUsername(e.target.value)}
						type="text"
						className="input input-bordered w-full"
						placeholder="Username"
						required
					/>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="input input-bordered w-full"
						placeholder="Email"
						required
					/>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="input input-bordered w-full"
						placeholder="Password"
						required
					/>

					{error && <p className="text-red-500">{error}</p>}

					<button type="submit" className="btn btn-primary px-8">
						Daftar
					</button>
				</form>
			</div>
		</div>
	);
}
