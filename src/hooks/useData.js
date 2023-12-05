'use client';

import { useUserState } from '@/contexts';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';

export const useMyPosts = () => {
	const { state } = useUserState();

	const { data, error, isLoading } = useSWR(
		`/api/posts?filters[user][id]=${state.data?.user.id}&populate=*&sort=createdAt%3Adesc&sort=updatedAt%3Adesc`,
		fetcher
	);

	return { data, error, isLoading };
};

export const useAllPosts = () => {
	const { data, error, isLoading } = useSWR(
		`/api/posts?populate=*&sort=createdAt%3Adesc&sort=updatedAt%3Adesc`,
		fetcher
	);

	return { data, error, isLoading };
};

export const useContent = () => {
	const { data, error, isLoading } = useSWR(
		`/api/contents?populate=*`,
		fetcher
	);

	return { content: data, error, isLoading };
};
