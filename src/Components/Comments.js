import React from 'react';
import DOMPurify from 'dompurify';

const Comments = ({ data }) => {

    const author = data?.snippet?.topLevelComment?.snippet?.authorDisplayName;
    const comment = data?.snippet?.topLevelComment?.snippet?.textDisplay;

    // Sanitize the comment to remove any malicious scripts
    const sanitizedComment = DOMPurify.sanitize(comment || '');

    return (
        <div className='m-1 px-10'>
            <div className='flex'>
                <img
                    className="h-8"
                    alt="user-icon"
                    src="https://th.bing.com/th/id/R.d334e18fc39188f95d0f97e93757fce6?rik=YyGh0I3ai2O7Cw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_337531.png&ehk=vOUxpk7WqUPnWI%2ft0dfXzjVhVSJ7AwHxX3v5oPKEsZs%3d&risl=&pid=ImgRaw&r=0"
                />
                <div className='px-4'>
                    <p className='text-lg font-bold'>{author || 'Anonymous'}</p>
                    <p className='text-lg' dangerouslySetInnerHTML={{ __html: sanitizedComment }} />
                </div>
            </div>
        </div>
    );
}

export default Comments;
