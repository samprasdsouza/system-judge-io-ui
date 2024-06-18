/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';

export function Button({
  variant = 'default',
  size,
  name,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...rest
}) {
  return (
    <button
      type="button"
      className={`button ${size || ''} ${variant || ''} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {leftIcon}
      <span className="mx-1">{name}</span>
      {rightIcon}
    </button>
  );
}

Button.prototype = {
  variant: PropTypes.string,
  size: PropTypes.string,
  name: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
