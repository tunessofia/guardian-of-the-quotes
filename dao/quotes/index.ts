import { prisma } from "../base";

export const createQuote = (content, author): Promise<any> => {
	return Promise.resolve(prisma.quote.create({ data: {
		content, author
	}}));
};

export const getQuotes = () => {
	return prisma.quote.findMany();
};
