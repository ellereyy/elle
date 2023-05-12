import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="flex justify-around">
        <Link to={'/'}>
          <h1 className="text-3xl">Elle Reynolds</h1>
        </Link>
        <Link to={'/about'}>
          <p>About</p>
        </Link>
        <Link>
          <p>Resume</p>
        </Link>
        <Link>
          <p>Projects</p>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
