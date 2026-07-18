import * as React from 'react';

export interface EyebrowProps {
  /** Label text, rendered in spaced Cinzel caps gold. */
  children: React.ReactNode;
  /** Center the label (for centered section intros). */
  center?: boolean;
  className?: string;
}

/**
 * Spaced-caps gold label in Cinzel, used above every heading on the site
 * ("THE PROCESS", "SIGNATURE READING"). Renders the site's `.eyebrow` class.
 */
export function Eyebrow({ children, center, className }: EyebrowProps) {
  return (
    <span className={cx('eyebrow', center && 'eyebrow--center', className)}>
      {children}
    </span>
  );
}

export interface HeadingProps {
  /** Heading level; h1 is reserved for hero titles. Default 2. */
  level?: 1 | 2 | 3 | 4;
  /** Main heading text. Any `<em>` inside renders italic gold. */
  children: React.ReactNode;
  /** Optional accent line rendered after a line break as italic gold ("What People / *Experience*"). */
  accent?: React.ReactNode;
  className?: string;
}

/**
 * Display heading in light-weight Cormorant Garamond. The site's signature
 * pattern is a plain first line with an italic gold accent line beneath —
 * pass the accent via the `accent` prop or inline `<em>` in children.
 */
export function Heading({ level = 2, children, accent, className }: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
  return (
    <Tag className={className}>
      {children}
      {accent != null && (
        <>
          <br />
          <em>{accent}</em>
        </>
      )}
    </Tag>
  );
}

export interface DividerProps {
  /** Stretch the lines to the container width instead of the compact 80px ornament. */
  full?: boolean;
  className?: string;
}

/**
 * The site's signature ornament divider: a thin gold line, a rotated gold
 * diamond, and a thin gold line. Used between hero title and subtitle and
 * between section blocks.
 */
export function Divider({ full, className }: DividerProps) {
  return (
    <div className={cx('sp-divider', full && 'sp-divider--full', className)} role="separator">
      <div className="sp-divider__line" />
      <div className="sp-divider__diamond" />
      <div className="sp-divider__line" />
    </div>
  );
}

export interface GoldRuleProps {
  /** Center the rule horizontally. */
  center?: boolean;
  className?: string;
}

/** Short 48px gold horizontal rule used under left-aligned headings. */
export function GoldRule({ center, className }: GoldRuleProps) {
  return <hr className={cx('gold-rule', center && 'gold-rule--center', className)} />;
}

export interface PullQuoteProps {
  /** Quote text, rendered large italic Cormorant Garamond. */
  children: React.ReactNode;
  /** Optional attribution line below the quote. */
  attribution?: React.ReactNode;
  className?: string;
}

/**
 * Large italic Cormorant pull quote for scripture lines and teacher quotes
 * ("I searched for God and found only myself…").
 */
export function PullQuote({ children, attribution, className }: PullQuoteProps) {
  return (
    <figure className={className} style={{ margin: 0 }}>
      <blockquote className="pullquote" style={{ margin: 0 }}>
        {children}
      </blockquote>
      {attribution != null && (
        <figcaption
          className="label-cinzel"
          style={{ color: 'var(--gold)', marginTop: 18, fontSize: 10 }}
        >
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
