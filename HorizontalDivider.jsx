import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '505px',
    left: '24px',
    width: '141px',
    height: '1px',
    backgroundColor: '#f0f0f0',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;