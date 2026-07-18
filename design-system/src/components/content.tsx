import * as React from 'react';
import { cx } from './foundations';

export interface CardProps {
  /** `default` = dark card surface, `featured` = raised surface with gold border. */
  variant?: 'default' | 'featured';
  /** Lift border + background on hover (for clickable/linked cards). */
  hoverable?: boolean;
  /** Small gold badge pinned to the top-right edge ("MOST POPULAR"). */
  badge?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Base card surface: near-black panel with a subtle border, square corners.
 * `featured` raises the background and swaps the border to gold — used for
 * the signature reading. Compose freely: Tag, Heading, DotList, PriceBlock,
 * Button all nest inside.
 */
export function Card({ variant = 'default', hoverable, badge, children, className }: CardProps) {
  return (
    <div
      className={cx(
        'sp-card',
        variant === 'featured' && 'sp-card--featured',
        hoverable && 'sp-card--hoverable',
        className
      )}
    >
      {badge != null && <span className="sp-card__badge">{badge}</span>}
      {children}
    </div>
  );
}

export interface StarsProps {
  /** Number of stars, 1–5. Default 5. */
  count?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

/** Gold star rating row (★★★★★) used at the top of testimonials. */
export function Stars({ count = 5, className }: StarsProps) {
  return (
    <div className={cx('sp-stars', className)} aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </div>
  );
}

export interface AvatarProps {
  /** Initial letter(s) shown inside the gold circle. */
  initial: string;
  /** `md` 36px (testimonials) or `lg` 52px. Default `md`. */
  size?: 'md' | 'lg';
  className?: string;
}

/** Gold-bordered circular initial avatar (the site never uses photos). */
export function Avatar({ initial, size = 'md', className }: AvatarProps) {
  return (
    <span className={cx('sp-avatar', size === 'lg' && 'sp-avatar--lg', className)}>
      {initial}
    </span>
  );
}

export interface StatItem {
  /** The number, large Cormorant gold ("2.3M", "99K+", "∞"). */
  value: React.ReactNode;
  /** Small Cinzel caption below ("MONTHLY REACH"). */
  label: React.ReactNode;
}

export interface StatsRowProps {
  /** Stats rendered as equal columns separated by hairlines. 3–4 reads best. */
  stats: StatItem[];
  className?: string;
}

/**
 * Horizontal band of statistics between hairlines: large gold Cormorant
 * numbers over tiny Cinzel labels. Used at the bottom of the hero.
 */
export function StatsRow({ stats, className }: StatsRowProps) {
  return (
    <div className={cx('sp-stats', className)}>
      {stats.map((s, i) => (
        <div className="sp-stats__item" key={i}>
          <span className="sp-stats__val">{s.value}</span>
          <span className="sp-stats__label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export interface TestimonialCardProps {
  /** The testimonial text (rendered italic, without surrounding quotes — they are added). */
  quote: React.ReactNode;
  /** Reviewer name ("Ananya S."). */
  name: React.ReactNode;
  /** Reviewer location ("Mumbai, India"). */
  location?: React.ReactNode;
  /** Avatar initial; defaults to the first character of `name` when it is a string. */
  initial?: string;
  /** Star count 1–5. Default 5. */
  stars?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

/**
 * Testimonial card: gold stars, italic quote, then author row (initial
 * avatar, Cinzel name, muted location) above a hairline.
 */
export function TestimonialCard({
  quote,
  name,
  location,
  initial,
  stars = 5,
  className,
}: TestimonialCardProps) {
  const init = initial ?? (typeof name === 'string' ? name.charAt(0) : '·');
  return (
    <div className={cx('sp-testimonial', className)}>
      <Stars count={stars} />
      <p className="sp-testimonial__quote">“{quote}”</p>
      <div className="sp-testimonial__author">
        <Avatar initial={init} />
        <div>
          <div className="sp-testimonial__name">{name}</div>
          {location != null && <div className="sp-testimonial__loc">{location}</div>}
        </div>
      </div>
    </div>
  );
}

export interface ProcessStepItem {
  /** Step title ("Book Your Session"). */
  title: React.ReactNode;
  /** Step description. */
  body: React.ReactNode;
  /** Optional small gold Cinzel note ("60 MINUTES · GOOGLE MEET"). */
  note?: React.ReactNode;
}

export interface ProcessStepsProps {
  /** Steps in order; numbers (01, 02, …) are added automatically. 3–5 reads best. */
  steps: ProcessStepItem[];
  className?: string;
}

/**
 * Numbered process row ("How a Reading Works"): square gold-bordered number
 * boxes joined by a hairline, with a title and description under each.
 */
export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <div
      className={cx('sp-steps', className)}
      style={{ ['--sp-steps-count' as string]: steps.length }}
    >
      {steps.map((s, i) => (
        <div className="sp-steps__step" key={i}>
          <div className="sp-steps__num">{String(i + 1).padStart(2, '0')}</div>
          <div className="sp-steps__title">{s.title}</div>
          <p className="sp-steps__body">{s.body}</p>
          {s.note != null && <span className="sp-steps__note">{s.note}</span>}
        </div>
      ))}
    </div>
  );
}

export interface DotListProps {
  /** Optional gold Cinzel caption above the list ("THIS READING UNCOVERS"). */
  title?: React.ReactNode;
  /** List entries, each preceded by a small gold diamond. */
  items: React.ReactNode[];
  className?: string;
}

/**
 * Feature list with small gold diamond markers, used inside reading and
 * course cards to enumerate what's included.
 */
export function DotList({ title, items, className }: DotListProps) {
  return (
    <div className={className}>
      {title != null && <span className="sp-dotlist__title">{title}</span>}
      {items.map((item, i) => (
        <div className="sp-dotlist__item" key={i}>
          <span className="sp-dotlist__dot" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export interface PriceBlockProps {
  /** The price, large gold Cormorant ("₹6,500"). */
  price: React.ReactNode;
  /** Small Cinzel meta line below ("60 MINUTES · ONLINE"). */
  meta?: React.ReactNode;
  className?: string;
}

/** Price display: large gold Cormorant amount over a tiny Cinzel meta line. */
export function PriceBlock({ price, meta, className }: PriceBlockProps) {
  return (
    <div className={className}>
      <div className="sp-price__amount">{price}</div>
      {meta != null && <div className="sp-price__meta">{meta}</div>}
    </div>
  );
}
