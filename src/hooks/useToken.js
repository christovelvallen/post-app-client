'use client';

import { useUserState } from '@/contexts';

export default function useToken() {
	const { state } = useUserState();

	return state.data ? true : false;
}
