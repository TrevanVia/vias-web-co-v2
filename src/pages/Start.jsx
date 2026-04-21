import { useState } from 'react'
import SEO from '../components/SEO'

const WEB3FORMS_KEY = '36618ed9-6602-4daf-b3ef-2c2ea874c1d5'

export default function Start() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = e.target
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: 'New project inquiry: ' + form.business.value,
      from_name: 'viaswebco.com',
      replyto: form.email.value,
      name: form.name.value,
      email: form.email.value,
      business: form.business.value,
      notes: form.notes.value,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
      } else {
        throw new Error(json.message || 'Submit failed')
      }
    } catch (err) {
      setStatus('error')
      setError('Something glitched. Try again, or text me at (540) 239-4636.')
    }
  }

  return (
    <>
      <SEO title="Start a project" description="Tell me about your business. I'll read it today and get back to you within a few hours." path="/start" />

      <section style={styles.section}>
        <div className="start-grid-mobile" style={styles.inner}>
          <div className="start-left-mobile" style={styles.left}>
            <span className="section-label" style={{ marginBottom: 32, display: 'inline-block' }}>Start a project</span>
            <h1 style={styles.h1}>Tell me about your business.</h1>
            <p style={styles.lead}>
              Takes 90 seconds. I'll read it today and get back to you within a few hours with next steps. If we're a fit, we'll have your site live in two weeks.
            </p>

            <div style={styles.fallback}>
              Not a form person? Text me directly at{' '}
              <a href="sms:15402394636" style={styles.fallbackLink}>(540) 239-4636</a>{' '}or email{' '}
              <a href="mailto:trevan@viaswebco.com" style={styles.fallbackLink}>trevan@viaswebco.com</a>.
            </div>

            <div style={styles.paymentBlock}>
              <div style={styles.paymentLabel}>Already decided?</div>
              <p style={styles.paymentBody}>
                Online payment via Stripe is coming soon. For now, send the form above and we'll set up payment on our first call.
              </p>
              <button disabled style={styles.btnDisabled}>Stripe checkout — launching soon</button>
            </div>
          </div>

          <div style={styles.right}>
            {status === 'success' ? (
              <div style={styles.successBox}>
                <h3 style={styles.successH}>Got it. Talk soon.</h3>
                <p style={styles.successP}>
                  Your note is in my inbox. I'll read it today and get back to you within a few hours. If something's urgent, text me directly at (540) 239-4636.
                </p>
              </div>
            ) : (
              <form className="start-form-mobile" style={styles.form} onSubmit={onSubmit}>
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

                <div style={styles.field}>
                  <label htmlFor="f-name" style={styles.label}>Your name</label>
                  <input type="text" id="f-name" name="name" required placeholder="First & last" style={styles.input} />
                </div>

                <div style={styles.field}>
                  <label htmlFor="f-email" style={styles.label}>Email</label>
                  <input type="email" id="f-email" name="email" required placeholder="you@business.com" style={styles.input} />
                </div>

                <div style={styles.field}>
                  <label htmlFor="f-business" style={styles.label}>Business name</label>
                  <input type="text" id="f-business" name="business" required placeholder="What's the business called?" style={styles.input} />
                </div>

                <div style={styles.field}>
                  <label htmlFor="f-notes" style={styles.label}>What do you need?</label>
                  <textarea id="f-notes" name="notes" required placeholder="A new site? A rebuild? Just a conversation? Anything else I should know?" style={{ ...styles.input, minHeight: 100, resize: 'vertical' }} />
                </div>

                <button type="submit" disabled={status === 'sending'} style={styles.submit}>
                  {status === 'sending' ? 'Sending...' : 'Send it over →'}
                </button>

                {status === 'error' && <div style={styles.errorBox}>{error}</div>}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

const styles = {
  section: { padding: '180px 44px 140px' },
  inner: {
    maxWidth: 1360,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: 80,
    alignItems: 'start',
  },
  left: {},
  h1: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(38px, 5vw, 64px)',
    lineHeight: 1,
    letterSpacing: '-0.035em',
    color: 'var(--ink)',
    marginBottom: 28,
  },
  lead: {
    fontSize: 17,
    color: 'var(--ink-soft)',
    lineHeight: 1.6,
    maxWidth: 420,
    marginBottom: 40,
  },
  fallback: {
    borderTop: '1px solid var(--hairline)',
    paddingTop: 28,
    fontSize: 14,
    color: 'var(--ink-faint)',
    lineHeight: 1.6,
  },
  fallbackLink: {
    color: 'var(--accent)',
    fontWeight: 600,
  },
  paymentBlock: {
    marginTop: 56,
    padding: '32px',
    background: 'var(--paper-deep)',
    border: '1px solid var(--hairline)',
    borderRadius: 4,
  },
  paymentLabel: {
    fontFamily: "'Figtree', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: 16,
  },
  paymentBody: {
    fontSize: 14,
    color: 'var(--ink-soft)',
    lineHeight: 1.6,
    marginBottom: 20,
  },
  btnDisabled: {
    background: 'var(--paper)',
    color: 'var(--ink-faint)',
    border: '1px solid var(--hairline)',
    padding: '12px 20px',
    fontSize: 13,
    fontWeight: 500,
    borderRadius: 2,
    cursor: 'not-allowed',
    fontFamily: "'Figtree', sans-serif",
  },
  right: {},
  form: {
    background: 'var(--paper-deep)',
    border: '1px solid var(--hairline)',
    padding: 48,
    borderRadius: 4,
  },
  field: { marginBottom: 22 },
  label: {
    display: 'block',
    fontFamily: "'Figtree', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ink-soft)',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid var(--hairline-strong)',
    background: 'var(--paper)',
    fontFamily: "'Figtree', sans-serif",
    fontSize: 16,
    color: 'var(--ink)',
    borderRadius: 2,
    outline: 'none',
    fontWeight: 400,
  },
  submit: {
    width: '100%',
    padding: 18,
    background: 'var(--ink)',
    color: 'var(--paper)',
    border: 'none',
    borderRadius: 2,
    fontFamily: "'Figtree', sans-serif",
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: '0.02em',
    cursor: 'pointer',
    marginTop: 8,
  },
  errorBox: {
    marginTop: 16,
    padding: '12px 16px',
    background: 'rgba(160, 67, 42, 0.08)',
    border: '1px solid rgba(160, 67, 42, 0.2)',
    fontSize: 13,
    color: 'var(--accent-hover)',
    borderRadius: 2,
    textAlign: 'center',
  },
  successBox: {
    background: 'var(--paper-deep)',
    border: '1px solid var(--hairline)',
    padding: 48,
    borderRadius: 4,
    textAlign: 'center',
  },
  successH: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: 32,
    letterSpacing: '-0.02em',
    color: 'var(--ink)',
    marginBottom: 16,
  },
  successP: {
    fontSize: 16,
    color: 'var(--ink-soft)',
    lineHeight: 1.6,
    maxWidth: 380,
    margin: '0 auto',
  },
}
