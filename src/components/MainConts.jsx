import React, { useEffect, useState } from 'react';
import { Category, Videos } from './';
import { PiYoutubeLogoDuotone } from 'react-icons/pi';

const MainCont = () => {
  const [selectCategory, setSelectCategory] = useState();
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=music&type=video&key=AIzaSyAdTxi82dcM4uZKlRFskdgep0aNJErlb6E`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          {selectCategory} <em>'s Playlist</em>
          <PiYoutubeLogoDuotone className="youtube__icon" />
        </h2>
        <Videos youtubes={youtubes} />
      </section>
    </main>
  );
};

export default MainCont;
