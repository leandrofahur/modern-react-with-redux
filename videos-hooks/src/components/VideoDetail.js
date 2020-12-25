import React from "react";
import Spinner from "./Spinner";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <div className="ui embed">
          <div className="video-detail-spinner">
            <Spinner message="Loading" />
          </div>
        </div>
        <div className="ui segment">
          <h4 className="ui header"></h4>
          <p className="description"></p>
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="Video Player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
