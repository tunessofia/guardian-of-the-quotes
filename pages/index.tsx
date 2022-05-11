import { QuoteCard } from "../components/quotes/card";
import { getQuotes } from "../dao/quotes";

const Quotes = ({ quotes }) => (
	<div id="container" className="min-h-screen min-w-full bg-gray-100 lg:p-10">
		<div className="w-full max-w-full mx-auto">
			<div className="mx-10">
				<div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-3xl font-bebas">Guardian of the Quotes</h2>
          </div>
          <div className="flex justify-end">
            <button id="add-quote" className="w-32 rounded-3xl bg-cyan-400 text-white font-bebas border p-2">Add Quote</button>
          </div>
				</div>
				<div className="mt-10 grid grid-rows-2 w-3/4 gap-4">
					{quotes?.map((quote, idx) => (
						<QuoteCard content={quote} key={idx} />
					))}
				</div>
			</div>
		</div>
	</div>
);

export async function getStaticProps() {
	const allQuotes = await getQuotes();
	return {
		props: {
			quotes: allQuotes,
		},
	};
}

export default Quotes;
