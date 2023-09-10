import logo from './logo.svg';
import './App.css';
import Fibo from './Fibo.js';
import OtherPage from './OtherPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h3 className='App-link'>fibonacci calculator kubernetes</h3>
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>Other Page</Link>
        </header>
        <Routes>
          <Route exact path='/' element={<Fibo />} />
          <Route path='/otherpage' element={<OtherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
