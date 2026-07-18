import * as React from 'react';
import { cx } from './foundations';

export interface ButtonProps {
  /** Visual style: `primary` = solid gold fill, `ghost` = transparent with gold border. Default `primary`. */
  variant?: 'primary' | 'ghost';
  /** Render as a link to this URL instead of a `<button>`. */
  href?: string;
  /** Button label, rendered in spaced Cinzel caps. */
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  /** Stretch to the container width (the site does this on mobile). */
  fullWidth?: boolean;
  /** Button type when rendered as a `<button>`. Default `button`. */
  type?: 'button' | 'submit';
  className?: string;
}

/**
 * The site's two button styles: solid gold `primary` ("Book a Reading") and
 * outlined `ghost` ("Explore the Path"). Labels are short spaced-caps Cinzel.
 * Renders an `<a>` when `href` is given, else a `<button>`.
 */
export function Button({
  variant = 'primary',
  href,
  children,
  onClick,
  disabled,
  fullWidth,
  type = 'button',
  className,
}: ButtonProps) {
  const cls = cx(
    variant === 'primary' ? 'btn-primary' : 'btn-ghost',
    fullWidth && 'sp-btn--full',
    className
  );
  if (href && !disabled) {
    return (
      <a className={cls} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export interface TagProps {
  /** `outline` = bordered identity tag (hero), `pill` = small filled meta pill (cards). Default `outline`. */
  variant?: 'outline' | 'pill';
  /** Tag text in spaced Cinzel caps ("ASTROLOGIST · PSYCHIC · MYSTIC"). */
  children: React.ReactNode;
  className?: string;
}

/**
 * Gold Cinzel label tag. `outline` is the hero identity tag with a thin gold
 * border; `pill` is the smaller filled pill used for card metadata
 * ("SIGNATURE READING · KARMIC ASTROLOGY").
 */
export function Tag({ variant = 'outline', children, className }: TagProps) {
  return (
    <span className={cx(variant === 'outline' ? 'hero-tag' : 'meta-pill', className)}>
      {children}
    </span>
  );
}
