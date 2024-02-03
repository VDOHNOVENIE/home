import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Montserrat',
    lineHeight: '20px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'or',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;