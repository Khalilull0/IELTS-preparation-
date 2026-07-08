import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Reading from './pages/Reading.jsx'
import Listening from './pages/Listening.jsx'

function Nav() {
  const location = useLocation()
  const linkStyle = (path) => ({
    padding: '8px 4px',
    fontWeight: 500,
    fontSize: '15px',
    borderBottom: location.pathname === path ? '2px solid var(--gold)' : '2px solid transparent',
  })

  return (
    <header style={{
      borderBottom: '1px solid var(--line)',
      background: 'var(--paper)',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px',
      }}>
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600 }}>
          Bandway
        </Link>
        <nav style={{ display: 'flex', gap: '28px' }}>
          <Link to="/" style={linkStyle('/')}>Home</Link>
          <Link to="/reading" style={linkStyle('/reading')}>Reading</Link>
          <Link to="/listening" style={linkStyle('/listening')}>Listening</Link>
        </nav>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/listening" element={<Listening />} />
      </Routes>
    </div>
  )
}
