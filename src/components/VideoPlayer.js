import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return (
      <div className='w-full h-96 flex items-center justify-center border bg-gray-200 rounded-lg dark:border-gray-700'>
        <p className='text-center'>Pilih video untuk diputar</p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col pr-8">
      <iframe
        title="Video Player"
        src={videoSrc}
        allowFullScreen
        className="w-full h-96 border border-gray-200 rounded-lg dark:border-gray-700"
      />
      <h4 className='my-3 font-bold'>{video.snippet.title}</h4>
      {/* Check if statistics is defined before accessing its properties */}
      <div className="mt-2 p-3 bg-gray-100 rounded-lg">
        <div className="flex">
          <p className='text-gray-600 mr-4'>
            Views: {video.statistics && video.statistics.views ? video.statistics.views : 'N/A'}
          </p>
          <p className='text-gray-600'>
            Likes: {video.statistics && video.statistics.likes ? video.statistics.likes : 'N/A'}
          </p>
        </div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
