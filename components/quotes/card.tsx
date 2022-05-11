export const QuoteCard = ({ content }) => {
	return (
		<div className="bg-white shadow-md p-7 font-indie ">
			<div className="pl-5 text-5xl break-words h-40 overflow-auto">
				<p>{content.content}</p>
			</div>
			<div className="mt-20 border-t-2 text-right border-color: rgb(226 232 240)">
				<p className="pt-2 pr-2 text-md">- {content.author}</p>
			</div>
		</div>
	);
};
