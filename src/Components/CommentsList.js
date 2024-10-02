import React from 'react'
import Comments from './Comments'

const CommentsList = ({ comments }) => {
    if (!comments || !Array.isArray(comments)) {
      return null; // Safeguard when `comments` is undefined or not an array
    }
  
    return comments.map((comment, index) => (
      <div key={index}>
        <Comments data={comment} />
        {comment.replies && (
          <div className='pl-5 border-l-black ml-5'>
            <CommentsList comments={comment.replies} />
          </div>
        )}
      </div>
    ));
  };

export default CommentsList