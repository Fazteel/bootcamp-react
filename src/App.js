// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './layout/Navbar';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const fetchVideos = async (query) => {
    if (!query) return; 
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyCAf9W-nASejHLcf5L6qZ5Mg95tQEAEvZU`);
    const data = await response.json();
    setVideos(data.items);
    if (data.items.length > 0) {
      setSelectedVideoId(data.items[0].id.videoId);
    }
  };

  useEffect(() => {
    fetchVideos('react tutorial'); 
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar onSearch={fetchVideos} />
      <div className="flex flex-grow">
        <VideoPlayer videoId={selectedVideoId} />
        <VideoList videos={videos} onVideoSelect={setSelectedVideoId} />
      </div>
    </div>
  );
};

export default App;
