import React from 'react';
import { buttonVariants } from './button.variants';
import { type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  label?: string;
}

function Button({
  onClick,
  variant,
  size,
  label,
  className,
  children,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(buttonVariants({ variant, size }), className)}
      aria-label={label}
      {...props}
    >
      {children || label}
    </button>
  );
}

export default Button;