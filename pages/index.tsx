import { useEffect, useState } from "react";
import { QuoteCard } from "../components/quotes/card";
import { get } from "../utils/api";

const Quotes = () => {
	const [data, setData] = useState(null)
	useEffect(() => {
		get('/api/get')
		  .then((data) => {
			setData(data)
		  })
	  }, [])

	return (
		<div id="container" className="min-h-screen min-w-full bg-gray-100 lg:p-10">
			<div className="w-full max-w-full mx-auto">
				<div className="mx-10 py-10">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<h2 className="text-3xl font-bebas">Guardian of the Quotes</h2>
						</div>
						<div className="flex justify-end">
							<a href="/add" className="w-32 rounded-3xl bg-cyan-400 text-white text-center font-bebas border p-2">
								Add Quote
							</a>
						</div>
					</div>
					<div className="mt-10 grid grid-rows-2 w-3/4 gap-4">
						{data?.map((quote, idx) => (
							<QuoteCard content={quote} key={idx} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quotes;
