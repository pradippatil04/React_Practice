import { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//   { id: 1, auther: "pradip", text: "learning React is great" },
//   { id: 2, auther: "pradip patil", text: "learning React-router is good" },
// ];

const Quote = () => {
  const { quoteId } = useParams();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const match = useRouteMatch();

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // console.log(match);
  // const quote = DUMMY_QUOTES.find((quote) => quote.id === +quoteId);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "error") {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }
  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default Quote;
