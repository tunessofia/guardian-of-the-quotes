const requestDefault: RequestInit = {
	headers: new Headers({
		'Content-Type': 'application/json',
		Accept: 'application/json',
	  }),
	mode: "no-cors",
};

export const get = (url: string) => {
	const request = Object.assign({ method: "GET" }, requestDefault);
	return fetch(url, request).then(function (response) {
		return;
	});
};

export const post = (url: string, body: any): Promise<any> => {
	const request = Object.assign(requestDefault, { method: "POST", body: JSON.stringify(body) });
	return fetch(url, request).then(function (response) {
		return;
	});
};
