import React from 'react';

const LiveMessage = ({ name, text }) => {
  return (
    <div className='flex items-center p-2 bg-white rounded-md shadow-sm'>
      {/* User Icon */}
      <div className="flex-shrink-0">
        <img
          className="h-8 w-8 rounded-full"
          alt="user-icon"
          src="https://th.bing.com/th/id/R.d334e18fc39188f95d0f97e93757fce6?rik=YyGh0I3ai2O7Cw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_337531.png&ehk=vOUxpk7WqUPnWI%2ft0dfXzjVhVSJ7AwHxX3v5oPKEsZs%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>

      {/* Chat Message */}
      <div className='flex flex-col ml-2'>
        <p className='text-gray-600 font-bold'>{name}</p>
        <p className='text-gray-800 break-words'>{text}</p>
      </div>
    </div>
  );
};

export default LiveMessage;
