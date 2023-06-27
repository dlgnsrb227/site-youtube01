import React, { useState } from 'react';
import { Category, Videos } from './';
import { PiYoutubeLogoDuotone } from 'react-icons/pi';

const MainCont = () => {
  const [selectCategory, setSelectCategory] = useState();
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
        <Videos />
      </section>
    </main>
  );
};

export default MainCont;
