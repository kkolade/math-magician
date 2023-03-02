import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './Pages/Home';
import Quotes from './Pages/Quotes';

function App() {
  return (
    <div className="App">
      <>
        <nav className="navbar">
          <h1 className="site-title">Math-Magicians</h1>
          <ul className="links">
            <li className="link-item">
              <Link to="/">Home</Link>
            </li>
            <li className="link-item">
              <Link to="/calculator">Calculator</Link>
            </li>
            <li className="link-item">
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
