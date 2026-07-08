import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ExamClock() {
  // Purely illustrative countdown, loops from 60:00 to give the hero
  // the feel of an actual timed test rather than a marketing banner.
  const [secondsLeft, setSecondsLeft] = useState(60 * 60)

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s <= 0 ? 60 * 60 : s - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const ss = String(secondsLeft % 60).padStart(2, '0')

  return (
    <div style={{
      background: 'var(--ink)',
      borderRadius: '14px',
      padding: '28px 32px',
      color: 'var(--paper)',
      minWidth: '260px',
    }}>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '12px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--gold-soft)',
        marginBottom: '10px',
      }}>
        Reading Test · Part 1 of 3
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '48px',
        fontWeight: 500,
        letterSpacing: '0.02em',
      }}>
        {mm}:{ss}
      </div>
      <div style={{
        marginTop: '14px',
        height: '4px',
        background: 'rgba(247,244,236,0.15)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${(secondsLeft / 3600) * 100}%`,
          height: '100%',
          background: 'var(--gold)',
          transition: 'width 1s linear',
        }} />
      </div>
    </div>
  )
}

function ModuleCard({ eyebrow, title, description, to, accent }) {
  return (
    <Link to={to} style={{
      display: 'block',
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: '12px',
      padding: '28px',
      transition: 'transform 0.15s ease, border-color 0.15s ease',
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = accent }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--line)' }}
    >
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: accent,
        marginBottom: '10px',
        letterSpacing: '0.06em',
      }}>
        {eyebrow}
      </div>
      <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: 'var(--slate)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
      <div style={{ marginTop: '18px', fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
        Start practicing →
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <main>
      <section style={{ padding: '72px 0 56px' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '48px',
          alignItems: 'center',
        }}>
          <div>
            <h1 style={{ fontSize: '44px', lineHeight: 1.15, marginBottom: '20px' }}>
              Practice like it's test day —
              <br />
              <span style={{ color: 'var(--gold)' }}>every single time.</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'var(--slate)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '28px' }}>
              Real timing, real question types, real feedback. Bandway gives you
              Reading and Listening practice that mirrors the actual exam, so nothing
              on test day catches you off guard.
            </p>
            <div style={{ display: 'flex', gap: '14px' }}>
              <Link to="/reading" style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                padding: '13px 24px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '15px',
              }}>
                Start a Reading test
              </Link>
              <Link to="/listening" style={{
                border: '1px solid var(--slate-light)',
                padding: '13px 24px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '15px',
              }}>
                Try Listening
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ExamClock />
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 0 88px', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--slate-light)', marginBottom: '8px' }}>
              Modules
            </div>
            <h2 style={{ fontSize: '28px' }}>Two skills. Fully timed. Instantly scored.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <ModuleCard
              eyebrow="60 MINUTES · 40 QUESTIONS"
              title="Reading"
              description="Academic-style passages with True/False/Not Given, matching headings, and multiple choice — scored the moment you finish."
              to="/reading"
              accent="var(--sage)"
            />
            <ModuleCard
              eyebrow="30 MINUTES · 4 SECTIONS"
              title="Listening"
              description="Audio recordings across everyday and academic contexts, with note completion and multiple choice questions."
              to="/listening"
              accent="var(--gold)"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
