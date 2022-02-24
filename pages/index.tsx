import {QuoteCard} from '../components/quotes/card'
import { getQuotes } from "../dao/quotes";

const Quotes = ({quotes}) => (
  <div>
    <div>
      <div>
        <div>
          <h2 className="text-3xl font-bold underline">Guardian of the Quotes</h2>
        </div>
      </div>
      <div>
        {quotes?.map((quote, idx) => (
          <QuoteCard content={quote} key={idx} />
        ))}
      </div>
    </div>
   </div>
)

export async function getStaticProps() {
  const allQuotes = await getQuotes();
  return {
    props: {
      quotes: allQuotes,
    },
  };
}

export default Quotes;