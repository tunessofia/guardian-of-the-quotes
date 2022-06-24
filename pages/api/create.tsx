import { NextApiRequest, NextApiResponse } from "next";
import { createQuote } from "../../dao/quotes";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { content, author } = JSON.parse(req.body);
	
	return createQuote(content, author)
		.then(() => res.status(200).end())
		.catch((e) => res.status(500).end("An error occurred"));
}
