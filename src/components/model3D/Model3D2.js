import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { url } from "../api/Url";  
import loaderGif from './loader.gif';

const tripo3dApiKey = "tsk_tZd2LyKRAsbjFSrH8PKHLz3rZsue8wJAzFyKqvJzoqt";
const tripo3dBaseUrl = "https://api.tripo3d.ai/v2/openapi/task/";


const Model3D2 = ({ data, queryParams }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [taskId, setTaskId] = useState(null);

  const getVideos = async () => {
    try {
      const response = await axios.post(`${url}/get_all_videos`, queryParams);
      const videoData = response.data.message;

      const first3DModelVideo = videoData.find(video => video.video_type === "3dModel");
      if (first3DModelVideo) {
        setTaskId(first3DModelVideo.weblink);
      }

      const seenNames = new Set();
      const unique3DModelVideos = videoData.filter(video => {
        if (!seenNames.has(video.video_name) && video.video_type === "3dModel") {
          seenNames.add(video.video_name);
          return true;
        }
        return false;
      });

      console.log("Unique 3D Model Videos fetched:", unique3DModelVideos);
      setVideos(unique3DModelVideos);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError(err.response?.data?.message || "Failed to load videos");
      setLoading(false);
    }
  };

  const getModelFromTripo3D = async (taskId) => {
    const url = `${tripo3dBaseUrl}${taskId}`;
    const options = {
      headers: {
        'Authorization': `Bearer ${tripo3dApiKey}`
      }
    };

    try {
      const response = await axios.get(url, options);
      console.log("Model data:", response.data);
    } catch (err) {
      console.error("Error fetching model:", err);
    }
  };

  useEffect(() => {
    getVideos();
  }, [queryParams]);

  useEffect(() => {
    if (taskId) {
      getModelFromTripo3D(taskId);
    }
  }, [taskId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-left font-bold text-[22px]" style={{ color: `${data?.component?.image_gallery?.color}` }}>
          3D Models
        </h1>
        <Link to="/All3DModels" className="text-blue-700">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.slice(0, 8).length > 0 ? (
          videos.slice(0, 8).map((video) => (
            <div key={video.id} className="bg-gray-100 p-3 rounded shadow-md relative">
              {/* Placeholder for the video */}
              <div className="relative w-full h-40 bg-gray-300 flex items-center justify-center rounded-md mb-2">
                <img src={loaderGif} alt="Loading..." className="w-12 h-12" />
                {/* <span className="absolute text-gray-700">Loading...</span> */}
              </div>

              {/* Video name */}
              <h2 className="font-semibold text-sm">{video.video_name || `Video`}</h2>

              {/* Video description */}
              {video.video_description && (
                <p className="text-sm text-gray-600">{video.video_description}</p>
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

export default Model3D2;
