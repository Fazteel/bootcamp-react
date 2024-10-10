import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
    if (videos.length === 0) {
        return (
            <div className='w-2/5 h-44 mx-4 flex items-center justify-center border bg-gray-200 rounded-lg dark:border-gray-700'>
                <p className='text-center'>
                    Tidak ada video yang ditampilkan. Pilih video untuk diputar.
                </p>
            </div>
        );
    }

    return (
        <div className="w-2/4 flex flex-col space-y-4">
            {videos.map((video) => (
                <div
                    key={video.id.videoId}
                    className="cursor-pointer"
                    onClick={() => onVideoSelect(video)}
                >
                    <div className="flex">
                        <img
                            className="w-64 h-auto mr-4 rounded-lg shadow-md"
                            src={video.snippet.thumbnails.medium.url}
                            alt={video.snippet.title}
                        />
                        <div className="flex flex-col">
                            <p className="font-semibold text-lg mb-2">{video.snippet.title}</p>
                            <p className="text-gray-600 m-0">{video.snippet.channelTitle}</p>
                            <p className="text-gray-500 m-0">{video.snippet.publishedAt}</p>
                            {/* Display views and likes */}
                            <p className="text-gray-500 m-0">
                                Views: {video.statistics.views ? video.statistics.views : 'N/A'}
                            </p>
                            <p className="text-gray-500 m-0">
                                Likes: {video.statistics.likes ? video.statistics.likes : 'N/A'}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
