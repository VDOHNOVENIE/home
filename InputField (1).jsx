import React from 'react';

const styles = {
  Input: {
    top: '320px',
    left: '24px',
    width: '327px',
    height: '48px',
    padding: '0px 8px',
    border: '1px solid #d9d9d9',
    boxSizing: 'border-box',
    borderRadius: '24px',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.08)',
    backgroundColor: '#ffffff',
    color: '#222222',
    fontSize: '14px',
    fontFamily: 'Montserrat',
    lineHeight: '22px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Password',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;