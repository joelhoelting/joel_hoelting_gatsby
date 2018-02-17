import React from 'react';

import video from '../videos/showcase.mp4';

const Video = () => {
  return (
    <video muted loop id="background-video">
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;
