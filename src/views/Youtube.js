import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import VideoList from '../components/VideoList';
import Comment from '../views/Comment';

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [query, setQuery] = useState('');
  const [videoStats, setVideoStats] = useState({});

  const API_KEY = 'AIzaSyCAf9W-nASejHLcf5L6qZ5Mg95tQEAEvZU';

  const handleSearch = async () => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        key: API_KEY,
        q: query,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
    
    // Fetch video statistics
    const videoIds = response.data.items.map(video => video.id.videoId).join(',');
    const statsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'statistics',
        id: videoIds,
        key: API_KEY,
      },
    });

    // Map statistics to corresponding videos
    const statsMap = {};
    statsResponse.data.items.forEach((item) => {
      statsMap[item.id] = {
        views: item.statistics.viewCount,
        likes: item.statistics.likeCount,
      };
    });
    setVideoStats(statsMap);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-s-full p-2.5 px-4 w-3/5"
          placeholder="Telusuri"
        />
        <button onClick={handleSearch} className="bg-gray-200 text-white rounded-e-full px-4 py-2">
          <svg className="text-black w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <VideoPlayer video={selectedVideo} />
          <Comment/>
        </div>
        <VideoList 
          videos={videos.map(video => ({
            ...video,
            statistics: videoStats[video.id.videoId] || {},
          }))} 
          onVideoSelect={setSelectedVideo} 
        />
      </div>
    </div>
  );
};

export default Youtube;
