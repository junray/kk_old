import React from 'react';

const Video = ({ videoSrcURL, videoTitle, ratio, ...props }) => {
  return (
    <React.Fragment>
      <h2>{videoTitle}</h2>
      <div className={`video r${ratio}`}>
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          width="100%"
          height="100%"
        />
      </div>
    </React.Fragment>
  );
};
export default Video;
