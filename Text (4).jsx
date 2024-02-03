import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    lineHeight: '16px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Need an account? Register',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;