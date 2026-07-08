import { useEffect, useState } from 'react'

const PASSAGE_TITLE = 'The Silent Spread of Urban Heat Islands'

const PASSAGE = `Cities are, on average, several degrees warmer than the countryside that
surrounds them. This phenomenon, known as the urban heat island effect, arises
because concrete, asphalt, and glass absorb and retain solar radiation far more
efficiently than soil, grass, or trees. As natural land cover is replaced by
paved surfaces and buildings, the balance between absorbed and reflected heat
shifts, and cities become thermal islands within a cooler regional landscape.

The effect is not merely an inconvenience. During heatwaves, the temperature
difference between a city centre and its rural surroundings can exceed five
degrees Celsius, placing significant strain on public health systems and
electricity grids as air conditioning demand spikes. Vulnerable populations,
particularly the elderly and those without access to cooling, face
disproportionately higher risks of heat-related illness.

Urban planners have begun experimenting with a range of countermeasures. Reflective
'cool roof' coatings can lower rooftop surface temperatures by reflecting rather
than absorbing sunlight. Expanding urban tree canopy provides shade while also
cooling the air through evapotranspiration. Some cities have gone further,
replacing traditional dark asphalt with lighter-coloured or permeable paving
that reduces heat retention and improves drainage simultaneously.

Despite growing awareness, implementation remains uneven. Retrofitting existing
infrastructure is costly, and the benefits of heat mitigation are often diffuse
and long-term, making them a lower political priority than more immediate urban
concerns. Researchers argue that without coordinated investment, the urban heat
island effect will continue to intensify alongside global warming, compounding
the risks faced by city residents in the decades ahead.`

const QUESTIONS = [
  {
    id: 'q1',
    text: 'Urban surfaces such as concrete and asphalt reflect more solar radiation than natural land cover.',
    type: 'tfng',
    answer: 'False',
  },
  {
    id: 'q2',
    text: 'The temperature gap between cities and rural areas can rise above five degrees Celsius in extreme heat.',
    type: 'tfng',
    answer: 'True',
  },
  {
    id: 'q3',
    text: 'All cities have adopted cool-roof coatings as their primary heat mitigation strategy.',
    type: 'tfng',
    answer: 'Not Given',
  },
  {
    id: 'q4',
    text: 'According to the passage, why does heat mitigation often receive lower political priority?',
    type: 'mc',
    options: [
      'Because it is too technically difficult to implement',
      'Because its benefits are spread out and take a long time to appear',
      'Because city residents oppose the necessary changes',
      'Because it conflicts with electricity grid regulations',
    ],
    answer: 'Because its benefits are spread out and take a long time to appear',
  },
]

const TFNG_OPTIONS = ['True', 'False', 'Not Given']

export default function Reading() {
  const [secondsLeft, setSecondsLeft] = useState(60 * 60)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (submitted) return
    const id = setInterval(() => {
      setSecondsLeft((s) => (s <= 1 ? 0 : s - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [submitted])

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const ss = String(secondsLeft % 60).padStart(2, '0')

  const score = QUESTIONS.filter((q) => answers[q.id] === q.answer).length

  return (
    <main className="container" style={{ padding: '40px 24px 80px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '28px',
        paddingBottom: '20px',
        borderBottom: '1px solid var(--line)',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--sage)', marginBottom: '6px' }}>
            READING · SAMPLE PASSAGE
          </div>
          <h1 style={{ fontSize: '26px' }}>{PASSAGE_TITLE}</h1>
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '28px',
          color: secondsLeft < 60 ? '#B4453A' : 'var(--ink)',
          background: 'var(--paper-dim)',
          padding: '10px 18px',
          borderRadius: '8px',
        }}>
          {mm}:{ss}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
        <div style={{
          fontSize: '15.5px',
          lineHeight: 1.85,
          color: 'var(--slate)',
          whiteSpace: 'pre-line',
        }}>
          {PASSAGE}
        </div>

        <div>
          {QUESTIONS.map((q, i) => (
            <div key={q.id} style={{ marginBottom: '28px' }}>
              <p style={{ fontSize: '15px', fontWeight: 500, marginBottom: '12px' }}>
                {i + 1}. {q.text}
              </p>
              <div style={{ display: 'flex', flexDirection: q.type === 'mc' ? 'column' : 'row', gap: '10px' }}>
                {(q.type === 'tfng' ? TFNG_OPTIONS : q.options).map((opt) => {
                  const selected = answers[q.id] === opt
                  const isCorrect = submitted && opt === q.answer
                  const isWrongPick = submitted && selected && opt !== q.answer
                  return (
                    <button
                      key={opt}
                      disabled={submitted}
                      onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt }))}
                      style={{
                        textAlign: 'left',
                        padding: '9px 14px',
                        borderRadius: '7px',
                        border: '1px solid ' + (isCorrect ? 'var(--sage)' : isWrongPick ? '#B4453A' : selected ? 'var(--ink)' : 'var(--line)'),
                        background: isCorrect ? 'rgba(124,152,133,0.12)' : isWrongPick ? 'rgba(180,69,58,0.08)' : selected ? 'var(--ink)' : '#fff',
                        color: selected && !submitted ? 'var(--paper)' : 'var(--ink)',
                        fontSize: '14px',
                      }}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}

          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              style={{
                background: 'var(--gold)',
                color: 'var(--ink)',
                border: 'none',
                padding: '13px 26px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
              }}
            >
              Submit answers
            </button>
          ) : (
            <div style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              padding: '20px 24px',
              borderRadius: '10px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--gold-soft)', marginBottom: '6px' }}>
                RESULT
              </div>
              <div style={{ fontSize: '22px', fontWeight: 600 }}>
                {score} / {QUESTIONS.length} correct
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
