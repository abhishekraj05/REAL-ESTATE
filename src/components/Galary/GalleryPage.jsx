import React from "react";
import PhotoGallery from "./PhotoGallery";

const GalleryPage = () => {
  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <PhotoGallery />
      </div>
    </>
  );
};

export default GalleryPage;
