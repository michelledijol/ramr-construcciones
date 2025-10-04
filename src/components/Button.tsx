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
  type = 'button'
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
      e.preventDefault();
      handleClick();
      handleAnalytics();
    },
    disabled: disabled || loading
  };

  if (href) {
    return (
      <a href={href} {...commonProps}>
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
