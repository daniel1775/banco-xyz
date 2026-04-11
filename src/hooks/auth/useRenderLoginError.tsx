import axios from 'axios';
import { useEffect, useState } from 'react';

import { ErrorMsg } from '@/src/UI/atoms/general/ErrorMsg';

type UseRenderErrorProps = {
	error: unknown;
	email: string;
	password: string;
};

export const useRenderError = ({
	error,
	email,
	password,
}: UseRenderErrorProps) => {
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		if (error) {
			setShowError(true);
		}
	}, [error]);

	useEffect(() => {
		setShowError(false);
	}, [email, password]);

	const renderError = () => {
		if (!showError || !error) return null;

		const message =
			axios.isAxiosError(error) && error.response?.status === 401
				? 'Email or password incorrect\nPlease try again'
				: 'Something went wrong. Try again later.';

		return <ErrorMsg message={message} />;
	};

	return { renderError };
};
