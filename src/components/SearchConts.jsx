import React, { useEffect, useState } from 'react';
import { PiYoutubeLogoDuotone } from 'react-icons/pi';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import Loader from './Loader';

const SearchConts = () => {
  const [videos, setvideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchTerm}&type=video&key=AIzaSyAdTxi82dcM4uZKlRFskdgep0aNJErlb6E`
    )
      .then((response) => response.json())
      .then((result) => setvideos(result.items))
      .catch((error) => console.log(error));
  }, [searchTerm]);

  if (!videos) return <Loader />;

  return (
    <main id="main">
      <section id="contents">
        <h2>
          {searchTerm} <em>'s Playlist</em>
          <PiYoutubeLogoDuotone className="youtube__icon" />
        </h2>
        <Videos youtubes={videos} />
      </section>
    </main>
  );
};

export default SearchConts;
