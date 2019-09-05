import React from 'react';
import PropTypes from 'prop-types';

const Furniture = ({ title, description, image }) => {
  const imageData = image.childImageSharp.fluid;
  console.log(imageData, title, description);

  return (
    <span>{title}</span>
  );
};

Furniture.propTypes = {
  image: PropTypes.object.isRequired, // eslint-disable-line
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Furniture;
