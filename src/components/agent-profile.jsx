import React from 'react'
import {useParams} from "react-router-dom";
import {getAgentInfo, images} from '../agent-info.js'


const AgentProfile = () => {    
  //get agent id from params
  let {id} = useParams();

  //check if the agent data already exists in the local storage
  //in case it's not, we add the data to the local storage
  if(!localStorage.getItem(id)){
    const agentInfo = getAgentInfo(id);
    console.log(`get agent info:: ${JSON.stringify(agentInfo)}`);
    window.localStorage.setItem(id, JSON.stringify(agentInfo));
  }

  //in case it exists, we get that data from the local storage, 
  //so we don't need to access the data source again
  const info = JSON.parse(localStorage.getItem(id))
  
  //below we insert the component based on the info in the local storage
  return (
    <div id="agent-info">
      <h1>Secret agent identity revealed</h1>
      <p>The ultra secret info below:</p>

      <div className="agent-page" id={id}>
        <p><b>Name: </b>{info.name}</p>
        <p><b>Image: </b></p>
        <img src={images[info.name]}></img>
        <p><b>Description: </b>{info.text}</p>
        <p><b>Achievements: </b> {info.achievements}</p>
        <p><b>Secret: </b>{info.secret}</p>
        <p><b>ID: </b>{id}</p>
        <br/>
        <a href="/">&lt; Back</a>
      </div>
    </div>
  )
}

export default AgentProfile