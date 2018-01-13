import React from 'react';

export const Column = ({ gifs }) => (
  <div className="column-display__column">
    {
      gifs.map((gif) => {
        return (
          <div key={gif.id} className="column-display__column__item">
            <a href={gif.url} target="_blank">
              {
                <img src={gif.images.fixed_width.url} alt="" />
              }
            </a>
          </div>
        );
      })
    }
  </div>
);
