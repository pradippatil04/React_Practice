import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = useParams();
  const {sendRequest , status ,data : loadedComments } = useHttp(getAllComments);

  useEffect(()=>{
    sendRequest(quoteId)
  },[sendRequest ,quoteId])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  const addedCommenthandler = useCallback(() => {
    sendRequest(quoteId);
  } ,[sendRequest ,quoteId]);

  let comments ;
  if(status === 'pending'){
    comments = <div className="centered"><LoadingSpinner/></div>;
  }
  
   if(status === 'completed' && (loadedComments || loadedComments.length > 0 )){
     comments =<CommentsList comments={loadedComments} />
   }

   if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
    comments = <div className="centered">No Comments were added yet !</div>
  }


  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onCommentAdd={addedCommenthandler}  />}
     {comments}
    </section>
  );
};

export default Comments;
