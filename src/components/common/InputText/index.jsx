import { Tooltip } from '@cimpress/react-components';
import { IconInformationCircle } from '@cimpress-technology/react-streamline-icons/lib';
import PropTypes from 'prop-types';
import React from 'react';

export function InputText({
  value,
  type = 'text',
  onChange,
  onBlur,
  alertMessage,
  label,
  required,
  name,
  tooltip,
  containerClass,
  isDisabled,
  description,
  variant,
  leftIcon,
  rightIcon,
  ...rest
}) {
  const alertMessageClass =
    variant === 'success' || variant === 'error' ? `${variant}-message` : '';
  return (
    <div className={`form-group mb-2 ${containerClass || ''}`}>
      {label && (
        <label className="form-label text-light-grey text-12 mb-0">
          {`${label}${required ? '*' : ''}`}
        </label>
      )}
      {tooltip && (
        <Tooltip direction="right" contents={tooltip}>
          <IconInformationCircle className="text-light-grey cursor-pointer ms-1" />
        </Tooltip>
      )}
      {description && <div className="text-10">{description}</div>}
      <div className="text-box-container">
        {leftIcon && (
          <span className={`left-icon ${alertMessageClass}`}>{leftIcon}</span>
        )}
        <input
          className={`form-control mt-1 ${variant || ''} ${rightIcon ? 'input-with-right-icon' : ''}`}
          style={{ height: '36px', borderRadius: '4px' }}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          disabled={isDisabled}
          {...rest}
        />
        {rightIcon && (
          <span className={`right-icon ${alertMessageClass}`}>{rightIcon}</span>
        )}
      </div>

      {alertMessage && (
        <div className={`text-10 mt-1 ${alertMessageClass}`}>
          {alertMessage}
        </div>
      )}
    </div>
  );
}

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  onBlur: PropTypes.func,
  alertMessage: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  tooltip: PropTypes.string,
  containerClass: PropTypes.string,
  isDisabled: PropTypes.bool,
  description: PropTypes.string,
  variant: PropTypes.string,
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,
};
