export type TypeLoginUser = {
	email: string;
	password: string;
};

export type TypeLoginUserResponse = {
	token: string;
	user: {
		id: number;
		name: string;
		email: string;
	};
};
