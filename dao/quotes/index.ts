import { prisma } from "../base";

// export const createQuote = (data) => {
// 	return prisma.quote.create({ data });
// };

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
