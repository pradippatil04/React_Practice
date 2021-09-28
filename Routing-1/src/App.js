import { div } from 'prelude-ls';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
//import AllQuotes from "./components/pages/AllQuotes";
//import NewQuote from "./components/pages/NewQuote";
//import NotFound from "./components/pages/NotFound";
//import Quote from "./components/pages/Quote";
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(()=> import('./components/pages/NewQuote'));
const Quote = React.lazy(()=>import('./components/pages/Quote'));
const NotFound = React.lazy(()=> import('./components/pages/NotFound'));
const AllQuotes = React.lazy(()=> import('./components/pages/AllQuotes'));

function App() {
  return (
    <div>
      <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner /> </div>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <Quote />
          </Route>
          <Route path="/new-quote">
               <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
