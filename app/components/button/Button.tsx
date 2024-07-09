import React, { ForwardedRef, ReactNode, forwardRef } from 'react';
import { cls } from '../../../utils';

interface IButton {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'normal' | 'large';
  /**
   * Button contents
   */
  children: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  variant?: 'primary' | 'secondary' | 'outlined';
  disabled?: boolean;
  pill?: boolean;
}

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-5 py-2',
    large: 'px-7 py-[14px] text-lg',
  },
  variant: {
    primary:
      'bg-[var(--primary-1)] hover:brightness-90 focus:ring-2 focus:bg[#C5B8E4] focus:ring-opacity-50 text-white font-medium',
    secondary:
      'border bg-slate-900 hover:bg-slate-800 focus:ring-2 focus:bg[#C5B8E4] focus:ring-opacity-50 text-white font-medium',
    outlined:
      'border border-slate-900 hover:bg-slate-800 focus:ring-2 focus:bg[#C5B8E4] focus:ring-opacity-50 hover:text-white font-medium',
  },
};

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      children,
      type = 'button',
      className,
      variant = 'primary',
      size = 'normal',
      pill = true,
      disabled = false,
      ...props
    },
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={cls(`
    ${classes.base}
    ${classes.size[size]}
    ${classes.variant[variant]}
    ${pill && classes.pill}
    ${disabled && classes.disabled}
    ${className}
`)}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
