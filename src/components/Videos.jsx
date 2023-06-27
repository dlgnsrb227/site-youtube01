import React from 'react';
import { VideoCard } from './';

const Videos = ({ youtubes }) => {
  return (
    <div className="videos__inner">
      {youtubes.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default Videos;
