import type { FC, ReactNode, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './ActionLink.module.css';

export interface ActionLinkProps {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: 'solid' | 'outline' | 'underline' | 'invertedSolid' | 'invertedOutline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  ariaLabel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

export const ActionLink: FC<ActionLinkProps> = ({
  to,
  href,
  children,
  className = '',
  variant = 'solid',
  size = 'md',
  onClick,
  ariaLabel,
  disabled = false,
  type = 'button',
  target,
  rel,
}) => {
  const variantClass = {
    solid: styles.variantSolid,
    outline: styles.variantOutline,
    underline: styles.variantUnderline,
    invertedSolid: styles.variantInvertedSolid,
    invertedOutline: styles.variantInvertedOutline,
  }[variant];

  const sizeClass = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
  }[size];

  const combinedClasses = [
    styles.actionLink,
    variantClass,
    variant !== 'underline' ? sizeClass : '',
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to && !disabled) {
    return (
      <Link to={to} onClick={onClick} aria-label={ariaLabel} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href && !disabled) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};
