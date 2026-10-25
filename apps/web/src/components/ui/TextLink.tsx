import type { FC, ReactNode, MouseEvent } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './TextLink.module.css';

export interface TextLinkProps {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: 'standard' | 'vermilion' | 'subtle' | 'inverted';
  underline?: boolean;
  navLink?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

export const TextLink: FC<TextLinkProps> = ({
  to,
  href,
  children,
  className = '',
  variant = 'standard',
  underline = false,
  navLink = false,
  onClick,
  ariaLabel,
  target,
  rel,
}) => {
  const variantClass = {
    standard: styles.variantStandard,
    vermilion: styles.variantVermilion,
    subtle: styles.variantSubtle,
    inverted: styles.variantInverted,
  }[variant];

  const combinedClasses = [
    styles.textLink,
    variantClass,
    underline ? styles.underline : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    if (navLink) {
      return (
        <NavLink
          to={to}
          onClick={onClick}
          aria-label={ariaLabel}
          className={({ isActive }) => `${combinedClasses} ${isActive ? styles.active : ''}`.trim()}
        >
          {children}
        </NavLink>
      );
    }

    return (
      <Link to={to} onClick={onClick} aria-label={ariaLabel} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
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
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={combinedClasses}>
      {children}
    </button>
  );
};
