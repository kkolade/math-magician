import { Link, Route, Routes } from 'react-router-dom';
import './app.css';
import CalcPage from './Pages/CalcPage';
import Home from './Pages/Home';
import Quotes from './Pages/Quotes';

function App() {
  return (
    <div className="App container">
      <>
        <nav className="navbar">
          <h1 className="site-title">Math-Magicians</h1>
          <ul className="links">
            <li className="link-item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="link-item">
              <Link to="/calculator" className="link">
                Calculator
              </Link>
            </li>
            <li className="link-item">
              <Link to="/quotes" className="link">
                Quotes
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalcPage />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
