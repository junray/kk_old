import React from 'react';

const Video = ({ videoSrcURL, videoTitle, videoSubTitle, ratio, ...props }) => {
  console.log(videoSubTitle);
  return (
    <React.Fragment>
      <h2 style={{ marginBottom: '10px' }}>{videoTitle}</h2>
      <p style={{ marginTop: 0 }}>{videoSubTitle}</p>
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
