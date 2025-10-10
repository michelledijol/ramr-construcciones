import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  'aria-label'?: string;
  'data-cta'?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  href,
  onClick,
  disabled = false,
  loading = false,
  className = '',
  'aria-label': ariaLabel,
  'data-cta': dataCta,
  type = 'button',
  target,
  rel
}) => {
  const baseClasses = `btn btn--${variant}`;
  const sizeClasses = {
    small: 'btn--small',
    medium: 'btn--medium',
    large: 'btn--large'
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`.trim();

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const handleAnalytics = () => {
    if (dataCta) {
      // Aquí iría la lógica de analytics
      console.log(`CTA clicked: ${dataCta}`);
    }
  };

  const content = (
    <>
      {loading && (
        <span className="btn__spinner" aria-hidden="true"></span>
      )}
      <span className="btn__label">{children}</span>
    </>
  );

  const commonProps = {
    className: classes,
    'aria-label': ariaLabel,
    'data-cta': dataCta,
    onClick: (e: React.MouseEvent) => {
      handleClick();
      handleAnalytics();
      // No prevenir el comportamiento por defecto para enlaces
      if (!href) {
        e.preventDefault();
      }
    },
    disabled: disabled || loading
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...commonProps}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} {...commonProps}>
      {content}
    </button>
  );
};

export default Button;
