import React from 'react';

const styles = {
  ImageContainer: {
    top: '40px',
    left: '124px',
    width: '128px',
    height: '128px',
    borderRadius: '100000px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/9bd39d7e-8d08-47db-aaf3-bae7996390a8.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;