import * as React from 'react';
import { cx } from './foundations';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  /** Optional gold Cinzel label above the field ("YOUR EMAIL"). */
  label?: React.ReactNode;
  /** Error message shown below in rust italic; also tints the border. */
  error?: React.ReactNode;
  className?: string;
}

/**
 * Dark single-line input: card-surface background, hairline border that
 * turns gold on focus, italic placeholder. Accepts all native input props.
 */
export function TextInput({ label, error, className, ...rest }: TextInputProps) {
  const input = (
    <input className={cx('sp-input', error != null && 'sp-input--error', className)} {...rest} />
  );
  if (label == null && error == null) return input;
  return (
    <label className="sp-field">
      {label != null && <span className="sp-field__label">{label}</span>}
      {input}
      {error != null && <span className="sp-field__error">{error}</span>}
    </label>
  );
}

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  /** Optional gold Cinzel label above the field. */
  label?: React.ReactNode;
  /** Error message shown below in rust italic; also tints the border. */
  error?: React.ReactNode;
  className?: string;
}

/** Multi-line variant of TextInput for message fields. */
export function TextArea({ label, error, className, ...rest }: TextAreaProps) {
  const area = (
    <textarea
      className={cx('sp-textarea', error != null && 'sp-textarea--error', className)}
      {...rest}
    />
  );
  if (label == null && error == null) return area;
  return (
    <label className="sp-field">
      {label != null && <span className="sp-field__label">{label}</span>}
      {area}
      {error != null && <span className="sp-field__error">{error}</span>}
    </label>
  );
}

export interface NewsletterSignupProps {
  /** Italic Cormorant heading; `<em>` inside renders gold. Default "Walk the <em>Path</em>". */
  heading?: React.ReactNode;
  /** Italic muted line under the heading. */
  subtext?: React.ReactNode;
  /** Button label. Default "SUBSCRIBE". */
  buttonLabel?: React.ReactNode;
  /** Tiny Cinzel note under the row ("NO SPAM · UNSUBSCRIBE ANYTIME"). */
  note?: React.ReactNode;
  /** Email input placeholder. Default "your email". */
  placeholder?: string;
  /** Called with the entered email on submit. */
  onSubscribe?: (email: string) => void;
  className?: string;
}

/**
 * Centered email-capture panel: italic Cormorant heading, joined input +
 * gold button row, tiny Cinzel reassurance note. The site uses this on blog
 * posts and landing sections.
 */
export function NewsletterSignup({
  heading = (
    <>
      Walk the <em>Path</em>
    </>
  ),
  subtext,
  buttonLabel = 'Subscribe',
  note,
  placeholder = 'your email',
  onSubscribe,
  className,
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState('');
  return (
    <div className={cx('sp-signup', className)}>
      <h3 className="sp-signup__heading">{heading}</h3>
      {subtext != null && <p className="sp-signup__sub">{subtext}</p>}
      <form
        className="sp-signup__row"
        onSubmit={(e) => {
          e.preventDefault();
          onSubscribe?.(email);
        }}
      >
        <input
          className="sp-input"
          type="email"
          required
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button className="sp-signup__btn" type="submit">
          {buttonLabel}
        </button>
      </form>
      {note != null && <div className="sp-signup__note">{note}</div>}
    </div>
  );
}
