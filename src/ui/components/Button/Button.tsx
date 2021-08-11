import React, { cloneElement, ElementType, isValidElement } from 'react';
import getExternalLinkProps from '../../utils/getExternalLinkProps';
import StyledButton from './StyledButton';
import { ButtonProps, scales, variants } from './types';

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, isText, ...rest } = props;
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];

  if (isLoading) {
    classNames.push('zeni-button--loading');
  }

  if (isDisabled && !isLoading) {
    classNames.push('zeni-button--disabled');
  }

  return (
    <StyledButton
      $isLoading={isLoading}
      className={classNames.join(' ')}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      <>
        {/* {isLoading && (
          <CircularSpinner light={props.variant === 'secondary'} size={24} containerStyle={{ marginRight: 8 }} />
        )} */}
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: '0.5rem'
          })}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            ml: '0.5rem'
          })}
      </>
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false
};

export default Button;
