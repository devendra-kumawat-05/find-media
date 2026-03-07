import React from "react";
import { fetchGiphy, fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen text-white w-full bg-gray-950">
      <button
        onClick={() => {
          fetchPhotos("cat");
        }}
      >
        Get Photo
      </button>
      <button
        onClick={() => {
          fetchVideos("cat");
        }}
      >
        Get Videos
      </button>
      <button
        onClick={() => {
          fetchGiphy("cat");
        }}
      >
        Get Gifs
      </button>
    </div>
  );
};

export default App;
