// src/components/VideoList.js
import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
    return (
        <div className="w-2/5 overflow-y-auto h-screen py-3">
            {videos.map((video) => (
                <div
                    key={video.id.videoId}
                    className="flex items-start cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out p-2 rounded-lg"
                    onClick={() => onVideoSelect(video.id.videoId)}
                >
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        className="w-64 h-auto mr-4 rounded-lg shadow-md"
                    />
                    <div className="flex flex-col">
                        <p className="font-semibold text-lg mb-2">{video.snippet.title}</p>
                        <p className="text-gray-600 m-0">{video.snippet.channelTitle}</p>
                        <p className="text-gray-500 m-0">{video.snippet.publishedAt}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
