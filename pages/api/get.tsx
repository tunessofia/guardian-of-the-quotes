import { NextApiRequest, NextApiResponse } from "next";
import { getQuotes } from "../../dao/quotes";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	return getQuotes()
		.then((results) => res.json(results))
		.catch((e) => res.status(500).end("An error occurred"));
}
