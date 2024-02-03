import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Montserrat',
    lineHeight: '24px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Welcome to VDOHNOVENIE!',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;