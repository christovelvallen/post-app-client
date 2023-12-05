'use client';

import { useUserState } from '@/contexts';
import { BiSolidComment, BiSolidHeart } from 'react-icons/bi';

export default function CardPost({ data }) {
	const { state } = useUserState();

	return (
		<div className="p-4 min-w-[300px] max-w-[600px] bg-white border-gray-50 border-2 rounded-2xl shadow-md">
			<div className="flex items-center gap-2">
				<div className="w-[40px] h-[40px] bg-primary rounded-full"></div>
				<p className="text-xs font-semibold">
					Post by:{' '}
					{state.data
						? state.data.user.username ===
						  data?.attributes?.user?.data.attributes.username
							? 'saya'
							: data?.attributes?.user?.data.attributes.username
						: data?.attributes?.user?.data.attributes.username}
				</p>
			</div>

			<div className="mt-2">
				<p className="text-lg font-semibold">{data?.attributes?.title}</p>
				<p className="text-sm">{data?.attributes?.body}</p>
			</div>

			<div className="flex items-center gap-4 mt-4">
				<div className="flex items-center gap-1">
					<BiSolidHeart className="text-red-500 text-2xl" />
					<p className="text-xs font-semibold">(0)</p>
				</div>
				<div className="flex items-center gap-1">
					<BiSolidComment className="text-gray-500 text-xl" />
					<p className="text-xs font-semibold">(0)</p>
				</div>
			</div>
		</div>
	);
}
