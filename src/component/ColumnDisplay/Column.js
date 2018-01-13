import React from 'react';

export const Column = ({ gifs }) => (
  <div className="column-display__column">
    {
      gifs.map((gif) => {
        return (
          <div key={gif.id} className="column-display__column__item">
            {
              <img src={gif.images.fixed_width.url} alt="" />
            }
          </div>
        );
      })
    }
  </div>
);
