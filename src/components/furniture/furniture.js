import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from './furniture.module.scss';

const Furniture = ({ title, description, image }) => {
  const imageData = image.childImageSharp.fluid;
  console.log(imageData, title, description);

  return (
    <div className={styles.furnitureContainer}>
      <Img className={styles.image} fluid={imageData} />
      <div>
        <span>{title}</span>
      </div>
    </div>
  );
};

Furniture.propTypes = {
  image: PropTypes.object.isRequired, // eslint-disable-line
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Furniture;
