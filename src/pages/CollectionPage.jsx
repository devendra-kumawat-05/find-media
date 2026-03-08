import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import {
  clearCollection,
  clearCollectionToast,
} from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();
  const clearTheCollection = () => {
    dispatch(clearCollection());
    dispatch(clearCollectionToast());
  };

  return (
    <div className="overflow-auto px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl font-medium">Your Collection</h2>
          <button
            onClick={() => {
              clearTheCollection();
            }}
            className="active:scale-95 transition cursor-pointer bg-(--c4) px-8 py-3 text-base font-medium rounded text-(--c3)"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-5xl text-(--c4) text-center font-medium">
          Collection is Empty
        </h2>
      )}
      <div className="flex flex-wrap justify-center gap-8 rounded w-full">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
