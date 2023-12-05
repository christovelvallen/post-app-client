'use client';

import { useUserState } from '@/contexts';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function CreatePostPage() {
	const [title, setTitle] = useState();
	const [body, setBody] = useState();

	const router = useRouter();
	const { state, dispatch } = useUserState();

	const handlePost = async e => {
		e.preventDefault();

		await axios
			.post(
				`${process.env.NEXT_PUBLIC_URL}/api/posts?populate=user`,
				{
					data: {
						title,
						body,
						user: [state.data?.user.id],
					},
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${state.data.jwt}`,
					},
				}
			)
			.then(res => {
				router.replace('/my-post');
			})
			.catch(err => {
				console.log(err.response.data.error.message);
			});
	};

	return (
		<div className="container mx-auto px-4">
			<button onClick={() => router.back()} className="btn btn-ghost">
				<BiArrowBack />
				<p className="font-bold">Kembali</p>
			</button>

			<p className="text-xl font-bold text-primary py-4">Buat Post</p>

			<form
				onSubmit={handlePost}
				className="max-w-[400px] flex flex-col items-start gap-2"
			>
				<input
					onChange={e => setTitle(e.target.value)}
					type="text"
					className="input input-bordered w-full"
					placeholder="Judul"
					required
				/>
				<textarea
					onChange={e => setBody(e.target.value)}
					className="textarea textarea-bordered w-full h-[150px] resize-none"
					placeholder="Apa yang anda pikirkan?"
					required
				></textarea>
				<button type="submit" className="btn btn-primary px-8">
					Post
				</button>
			</form>
		</div>
	);
}
