import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './Pages/Home';
import Quotes from './Pages/Quotes';

function App() {
  return (
    <div className="App">
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/calculator">Calculator</Link>
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
      {/* <Calculator initialValue={0} /> */}
    </div>
  );
}

export default App;
