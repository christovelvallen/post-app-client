'use client';

import CardPost from '@/components/CardPost';
import { useUserState } from '@/contexts';
import { useAllPosts } from '@/hooks/useData';

export default function Home() {
	const { state } = useUserState();
	const { data, error, isLoading } = useAllPosts();

	return (
		<>
			<div className="container mx-auto p-4">
				<p className="text-2xl font-bold">
					Selamat berpost {state.data ? state.data.user.username : 'teman'} 😉
				</p>

				<div className="mt-8">
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
