import QuoteList from "../quotes/QuoteList";
import { getAllQuotes } from '../../lib/api';
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

// const DUMMY_QUOTES =[
//     {id:1 , auther : 'pradip' , text:'learning React is great'},
//     {id:2 , auther : 'pradip patil' , text:'learning React-router is good'}
// ];

const AllQuotes = () => {

   const { sendRequest , status , data:loadedQuotes, error } = useHttp(getAllQuotes,true);

   useEffect(()=>{
       sendRequest();
   },[sendRequest])

if(status ==='pending'){
    return(
        <div className="centered">
            <LoadingSpinner />
        </div>
    )
}
if(status === 'error'){
    return <p className="centered focused">{error}</p>
}

if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
    return <NoQuotesFound />
}

return <QuoteList quotes={loadedQuotes} />
}

export default AllQuotes;