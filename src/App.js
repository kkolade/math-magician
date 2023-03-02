import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';

function App() {
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
  </>;
  return (
    <div className="App">
      <Calculator initialValue={0} />
    </div>
  );
}

export default App;
