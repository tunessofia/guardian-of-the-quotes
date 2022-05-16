import { prisma } from "../base";

export const createQuote = (content, author): Promise<any> => {
	return Promise.resolve(prisma.quote.create({ data: {
		content, author
	}}));
};

export const getQuotes = () => {
	return prisma.quote.findMany();
};

// export const updateQuote = (id, data): Promise<unknown> => {
// 	return new Promise(
// 		prisma.quote.update({
// 			where: { id },
// 			data: { updateAt: new Date(), ...data },
// 		})
// 	);
// };
