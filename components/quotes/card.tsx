export const QuoteCard = ({ content }) => {
	return (
		<div>
			<div>
				<p>{content.content}</p>
				<span>
					{content.author}
				</span>
			</div>
		</div>
	);
};
