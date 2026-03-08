import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  return (
    <div className="w-[17vw] relative h-60 bg-white rounded-xl overflow-hidden">
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
        className="flex gap-3 justify-start items-center px-4 py-5 w-full absolute bottom-0 text-white"
      >
        <h2 className="text-lg h-14 overflow-hidden font-semibold capitalize">
          {item.title}
        </h2>
        <button
          className="bg-(--c3) text-(--c4) rounded px-3 py-1 cursor-pointer font-medium active:scale-95"
          onClick={() => {
            removeFromCollection(item);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
