import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <div className="video__box">
      <Link to={`/video/${video.id.videoId}`}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </Link>
      <span className="videos__title">{video.snippet.title}</span>
    </div>
  );
};

export default VideoCard;
