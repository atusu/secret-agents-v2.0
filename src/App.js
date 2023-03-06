import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AgentCard from './components/agent-card.jsx'
import AgentProfile from './components/agent-profile.jsx';
import Home from './components/home.jsx';
import {getAgentInfo} from './agent-info.js'

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/agent/:id' element={<AgentProfile/>} />
      </Routes>
    </Router>

  );
}

export default App;
