import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    lineHeight: '32px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'VDOHNOVENIE',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;