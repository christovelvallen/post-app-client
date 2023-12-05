'use client';

import { useUserState } from '@/contexts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navigation() {
	const { state, dispatch } = useUserState();
	const router = useRouter();

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' });
		router.replace('/');
	};

	return (
		<div className="container mx-auto py-8 px-4">
			<div className="flex justify-between">
				<div className="flex gap-4">
					<Link href={'/'}>
						<button className="btn">All Post</button>
					</Link>
					{state.data?.jwt && (
						<Link href={'/my-post'}>
							<button className="btn">My Post</button>
						</Link>
					)}
				</div>

				<div className="flex gap-4">
					{state.data?.jwt ? (
						<button onClick={handleLogout} className="btn">
							Logout
						</button>
					) : (
						<Link href={'/login'}>
							<button className="btn">Login</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
