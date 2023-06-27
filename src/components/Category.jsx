import React from 'react';

import { categories } from '../utils/contents';

const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div className="category__list">
      {categories.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? '#d7ff7b90' : 'transparent',
          }}
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectCategory ? '#000' : 'aliceblue',
            }}
            className="list__name"
          >
            {category.name}
          </span>
          <span className="list__icon">{category.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default Category;
