import React from 'react'
import {useParams} from "react-router-dom";
import {getAgentInfo, images} from '../agent-info.js'


const AgentProfile = () => {
    let {id} = useParams();
    let info = getAgentInfo(id)
    // const silviu = require('../images/orange-cat.jpg')
    
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
      </div>
    </div>
  )
}

export default AgentProfile