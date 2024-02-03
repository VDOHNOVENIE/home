import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '10px',
    fontFamily: 'Montserrat',
    lineHeight: '13px',
    textAlign: 'right',
  },
};

const defaultProps = {
  text: 'Forgot your password?',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;