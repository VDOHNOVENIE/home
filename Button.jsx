import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '532px',
    left: '24px',
    width: '157px',
    height: '48px',
    padding: '0px 8px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#ffffff',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    lineHeight: '16px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Facebook',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;