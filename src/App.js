import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AgentComponent from './agent-component.jsx'
import AgentProfile from './agent-profile.jsx';
import Home from './home.jsx'
import {getAgentInfo} from './agent-info.js'

let info = getAgentInfo(null);
console.log(info)


function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/agent/:id' element={<AgentProfile/>} />
        {/* <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch> */}
      </Routes>
    </Router>

  );
}

export default App;
