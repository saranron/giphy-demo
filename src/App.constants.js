import PropTypes from 'prop-types';

export const ImageObjectShape = PropTypes.shape({
  id: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
});

export const GifObjectShape = PropTypes.shape({
  url: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.shape({
    fixed_width: ImageObjectShape,
    original: ImageObjectShape,
  })
});

export const PaginationObjectShape = PropTypes.shape({
  count: PropTypes.number,
  total_count: PropTypes.number,
  offset: PropTypes.number,
});
