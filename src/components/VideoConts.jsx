import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams, Link } from 'react-router-dom';
import Loader from './Loader';
import { BiLike } from 'react-icons/bi';
import { RiSearchEyeLine } from 'react-icons/ri';

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=AIzaSyAdTxi82dcM4uZKlRFskdgep0aNJErlb6E`
    )
      .then((response) => response.json())
      .then((result) => setVideoDetail(result.items[0]))
      .catch((error) => console.log(error));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;
  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__sub">
          <div className="left">
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
            </div>
            <div className="desc">
              <div className="video__info">
                <h3>{title}</h3>
                <div className="channel__info">
                  <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
                  <div className="div">
                    <span className="view">
                      <RiSearchEyeLine className="icon" />
                      {viewCount}
                    </span>
                    <span className="like">
                      <BiLike className="icon" />
                      {likeCount}
                    </span>
                  </div>
                </div>
                <span>{description}</span>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoConts;
