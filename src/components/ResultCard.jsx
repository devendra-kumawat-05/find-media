import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[17vw] relative h-60 bg-white">
      <a className="h-full" href={item.url} target="_blank">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "GIF" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between items-center px-6 py-10 w-full absolute bottom-0 text-white"
      >
        <h2 className="text-lg font-semibold capitalize">{item.title}</h2>
        <button className="bg-indigo-600 text-white rounded px-3 py-1 cursor-pointer font-medium">Save</button>
      </div>
    </div>
  );
};

export default ResultCard;
