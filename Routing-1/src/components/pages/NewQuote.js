import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import QuoteForm from "../quotes/QuoteForm";
import {  addQuote  } from '../../lib/api';
import { useEffect } from "react";

const NewQuote = () => {
    const history = useHistory();
    const { sendRequest, status } = useHttp(addQuote);
  
    useEffect(()=>{
      if(status === 'completed'){
        history.push('/quotes')
      }
    },[status,history]);  
  
    const addQuoteHandler = (quote) =>{
     sendRequest(quote);
     history.push('/quotes');
   }


    return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
}

export default NewQuote;