import * as React from 'react';
import { cx, Eyebrow, Divider } from './foundations';
import { StatsRow, StatItem } from './content';

export interface SectionHeaderProps {
  /** Spaced-caps gold eyebrow above the title ("THE PROCESS"). */
  eyebrow?: React.ReactNode;
  /** Section title; `<em>` inside renders italic gold. */
  title: React.ReactNode;
  /** Accent rendered after a line break as italic gold ("How a Reading / *Works*"). */
  accent?: React.ReactNode;
  /** Center the header (default) or leave it left-aligned. */
  align?: 'center' | 'left';
  /** Show the line·diamond·line ornament under the title. */
  divider?: boolean;
  className?: string;
}

/**
 * Standard section intro: eyebrow, large Cormorant title with an italic gold
 * accent, optional ornament divider. Every content section on the site opens
 * with this.
 */
export function SectionHeader({
  eyebrow,
  title,
  accent,
  align = 'center',
  divider,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cx('sp-section-header', align === 'center' && 'sp-section-header--center', className)}>
      {eyebrow != null && <Eyebrow center={align === 'center'}>{eyebrow}</Eyebrow>}
      <h2 className="sp-section-header__title">
        {title}
        {accent != null && (
          <>
            <br />
            <em>{accent}</em>
          </>
        )}
      </h2>
      {divider && <Divider />}
    </div>
  );
}

export interface HeroProps {
  /** Bordered identity tag above the title ("ASTROLOGIST · PSYCHIC · MYSTIC"). */
  tag?: React.ReactNode;
  /** Main title line. */
  title: React.ReactNode;
  /** Second title line rendered italic gold ("A Karmic Map"). */
  accent?: React.ReactNode;
  /** Italic subtitle under the ornament divider. */
  subtitle?: React.ReactNode;
  /** Action buttons (compose with Button). */
  actions?: React.ReactNode;
  /** Stats shown in a bordered row at the bottom. */
  stats?: StatItem[];
  /** Faint rotating mandala line-art behind the content. Default true. */
  mandala?: boolean;
  className?: string;
}

/**
 * Full hero section: identity tag, huge two-line Cormorant title (second
 * line italic gold), ornament divider, italic subtitle, button row, and an
 * optional stats band — over layered radial glows and a slowly rotating
 * mandala.
 */
export function Hero({
  tag,
  title,
  accent,
  subtitle,
  actions,
  stats,
  mandala = true,
  className,
}: HeroProps) {
  return (
    <section className={cx('sp-hero', className)}>
      {mandala && <Mandala />}
      <div className="sp-hero__inner">
        {tag != null && <span className="hero-tag">{tag}</span>}
        <h1 className="sp-hero__title">
          {title}
          {accent != null && (
            <>
              <br />
              <em>{accent}</em>
            </>
          )}
        </h1>
        <Divider />
        {subtitle != null && <p className="sp-hero__sub">{subtitle}</p>}
        {actions != null && <div className="sp-hero__actions">{actions}</div>}
        {stats != null && stats.length > 0 && <StatsRow stats={stats} />}
      </div>
    </section>
  );
}

function Mandala() {
  return (
    <svg className="sp-hero__mandala" viewBox="0 0 700 700" fill="none" aria-hidden="true">
      {[300, 240, 180, 120, 60].map((r) => (
        <circle key={r} cx="350" cy="350" r={r} stroke="#C9A84C" strokeWidth="0.5" />
      ))}
      <line x1="50" y1="350" x2="650" y2="350" stroke="#C9A84C" strokeWidth="0.4" />
      <line x1="350" y1="50" x2="350" y2="650" stroke="#C9A84C" strokeWidth="0.4" />
      <line x1="137" y1="137" x2="563" y2="563" stroke="#C9A84C" strokeWidth="0.4" />
      <line x1="563" y1="137" x2="137" y2="563" stroke="#C9A84C" strokeWidth="0.4" />
      <polygon points="350,80 600,480 100,480" stroke="#C9A84C" strokeWidth="0.4" fill="none" />
      <polygon points="350,620 100,220 600,220" stroke="#C9A84C" strokeWidth="0.4" fill="none" />
    </svg>
  );
}

export interface CTASectionProps {
  /** Spaced-caps gold eyebrow ("BEGIN"). */
  eyebrow?: React.ReactNode;
  /** CTA title; `<em>` inside renders italic gold. */
  title: React.ReactNode;
  /** Accent rendered after a line break as italic gold. */
  accent?: React.ReactNode;
  /** Italic supporting line under the title. */
  children?: React.ReactNode;
  /** Action buttons (compose with Button). */
  actions?: React.ReactNode;
  className?: string;
}

/**
 * Full-width call-to-action band between hairlines with a soft gold radial
 * glow: eyebrow, Cormorant title with gold accent, italic supporting line,
 * centered buttons. Closes nearly every page on the site.
 */
export function CTASection({ eyebrow, title, accent, children, actions, className }: CTASectionProps) {
  return (
    <section className={cx('sp-cta', className)}>
      {eyebrow != null && <Eyebrow center>{eyebrow}</Eyebrow>}
      <h2 className="sp-cta__title">
        {title}
        {accent != null && (
          <>
            <br />
            <em>{accent}</em>
          </>
        )}
      </h2>
      {children != null && <p className="sp-cta__body">{children}</p>}
      {actions != null && <div className="sp-cta__actions">{actions}</div>}
    </section>
  );
}
