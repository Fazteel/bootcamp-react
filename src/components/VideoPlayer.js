// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="w-3/5 flex flex-col relative -mt-40 py-4 px-4 items-center justify-center">
      {videoId ? (
        <>
          <iframe
            className="w-full h-3/5 border border-gray-200 rounded-lg dark:border-gray-700"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Video Player"
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <div className="w-full h-3/5 justify-center border border-gray-200 rounded-lg dark:border-gray-700">
          <p className="text-gray-500">Select a video to play</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
