'use client';

import CardPost from '@/components/CardPost';
import { useMyPosts } from '@/hooks/useData';
import useToken from '@/hooks/useToken';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function MyPostPage() {
	const { data, error, isLoading } = useMyPosts();
	const token = useToken();

	if (!token) {
		redirect('/login');
	}

	return (
		<>
			<div className="container mx-auto p-4">
				<Link href={'/create-post'}>
					<button className="btn btn-primary px-8">Buat Post</button>
				</Link>

				<p className="text-2xl font-bold py-8">My Post</p>

				<div>
					{isLoading ? (
						<p>Loading...</p>
					) : (
						<div className="flex flex-col items-start gap-4">
							{data.data?.map(item => (
								<CardPost key={item.id} data={item} />
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
}
