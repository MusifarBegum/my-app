import React from 'react';
import CommentsList from './CommentsList';
import useCommentThreads from '../hooks/useCommentThreads';

const CommentsSection = ({ videoId }) => {
 const message=  useCommentThreads({ videoId })
  return (
    <div>
      <h1 className="font-bold px-14 p-2 m-2 text-lg">Comments</h1>
      <CommentsList comments={message} />
    </div>
  );
};

export default CommentsSection;
