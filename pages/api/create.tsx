import { NextApiRequest, NextApiResponse} from 'next';
import { createQuote } from "../../dao/quotes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { content, author } = JSON.parse(req.body);
  try{
    await createQuote(content, author);
    return res.status(200);
  }
  catch(e){
    return res.status(500).send('An error occurred');
  }
}
