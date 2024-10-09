// src/App.js
import React, { useState, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import VideoList from '../components/VideoList';

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [query, setQuery] = useState('');

  const fetchVideos = async (searchQuery) => {
    if (!searchQuery) return;
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=AIzaSyCAf9W-nASejHLcf5L6qZ5Mg95tQEAEvZU`);
    const data = await response.json();
    setVideos(data.items);
    if (data.items.length > 0) {
      setSelectedVideoId(data.items[0].id.videoId);
    }
  };

  useEffect(() => {
    fetchVideos('react tutorial');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchVideos(query);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white sticky top-0 z-50 text-white p-3">
        <div className="container mx-auto flex items-center justify-between">
          <form onSubmit={handleSearch} className="flex flex-grow gap-3 items-center justify-center">
            <div className="relative w-2/3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button type="submit" className="absolute top-0 right-0 px-4 h-full text-sm font-medium text-white bg-gray-100 rounded-e-full border border-blue-700 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="text-black w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-grow">
        <VideoPlayer videoId={selectedVideoId} />
        <VideoList videos={videos} onVideoSelect={setSelectedVideoId} />
      </div>
    </div>
  );
};

export default Youtube;
