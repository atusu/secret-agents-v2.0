import React from 'react'
import image from '../images/secret-agent.jpg'

const AgentCard = (props) => {

  return (
    <div className="agent">
        <img src={image}/>
        <p className="agent-name">{props.number}. {props.name}</p>
        <p>{props.achievement}</p>
        <a href={`./agent/${props.id}`}>Reveal identity</a>
    </div>
  )
}

export default AgentCard;