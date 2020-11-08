import React from "react";

const ImageList = (props) => {
  // return <div>Found: {props.images.length} images</div>;
  const images = props.images.map((image) => {
    return <img src={image.urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
