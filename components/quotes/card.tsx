export const QuoteCard = ({ content }) => {
	return (
		<div className="bg-white shadow-md p-7 text-zinc-800">
			<div className="pl-5 text-3xl break-words h-20 overflow-auto">
				<p className="font-lato">"{content.content}"</p>
			</div>
			<div className="text-right">
				<p className="pt-2 pr-2 text-md font-indie">- {content.author}</p>
			</div>
		</div>
	);
};
