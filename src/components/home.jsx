import React from 'react'
import AgentCard from './agent-card.jsx'
import {getAgentInfo} from '../agent-info.js'

let info = getAgentInfo(null);

let itemList=[];
for(let i = 0; i < Object.keys(info).length; i++){
  let id = Object.keys(info)[i]
  itemList.push(<AgentCard id={id} name={info[id].name} achievement={info[id].achievements} number={(i+1)}/>);
}

const Home = () => {
  return (
    <div className="App">     
        <div id="container">
            <h1>The super secret list of super secret agents</h1>
            <div id="agent-container">
                {itemList}
            </div>
        </div>
    </div>
  )
}

export default Home