import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../api/Url";  // Adjust as needed for base URL
import { Link } from "react-router-dom";

const AllVideo = ({ queryParams }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch videos from the API based on queryParams
  const getVideos = async () => {
    try {
      const response = await axios.post(`${url}/get_all_videos`, queryParams);
      const videoData = response.data.message;

      // Remove duplicates based on video name
      const seenNames = new Set();
      const uniqueVideos = videoData.filter(video => {
        if (!seenNames.has(video.video_name)) {
          seenNames.add(video.video_name);
          return true;
        }
        return false;
      });

      console.log("Unique Videos fetched:", uniqueVideos);
      setVideos(uniqueVideos);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError(err.response?.data?.message || "Failed to load videos");
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, [queryParams]);  // Depend on queryParams to refetch data if they change

  // Show loading spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error if fetching fails
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="mt-10">
      {/* Updated header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-left font-bold text-[22px]">
          All Videos
        </h1>
        <Link to="/sellerhome" className="text-blue-700">
         back
        </Link>
      </div>

      {/* Display videos in a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="bg-gray-100 p-3 rounded shadow-md">
              {/* Display the video using the weblink */}
              {video.weblink ? (
                <video
                  src={video.weblink}
                  title={video.video_name}
                  className="w-full h-40 mb-2"
                  controls
                  autoPlay
                  muted 
                  loop
                />
              ) : (
                <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-md mb-2">
                  <span>No Video Available</span>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </div>
  );
};

export default AllVideo;
