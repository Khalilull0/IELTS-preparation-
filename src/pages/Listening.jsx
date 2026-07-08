export default function Listening() {
  return (
    <main className="container" style={{ padding: '40px 24px 80px' }}>
      <div style={{ marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--gold)', marginBottom: '6px' }}>
          LISTENING · COMING NEXT
        </div>
        <h1 style={{ fontSize: '26px' }}>Section 1: Everyday Conversation</h1>
      </div>

      <div style={{
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: '12px',
        padding: '32px',
        maxWidth: '520px',
      }}>
        <p style={{ color: 'var(--slate)', lineHeight: 1.7, fontSize: '15px' }}>
          This module is wired up but waiting on its first audio file. Once you
          add a recording and its question set, this page will behave exactly
          like the Reading module — timed, scored, instant feedback.
        </p>
        <p style={{ color: 'var(--slate-light)', fontSize: '13px', marginTop: '16px' }}>
          Next step: drop an audio file into <code>/public/audio/</code> and
          wire up an <code>&lt;audio&gt;</code> player + question set here,
          reusing the same question-rendering pattern from Reading.jsx.
        </p>
      </div>
    </main>
  )
}
