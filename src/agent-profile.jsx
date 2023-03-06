import React from 'react'
import {useParams} from "react-router-dom";

const AgentProfile = () => {
    let {id} = useParams();

  return (
    <div>
        <h1>This is the agent profile ++ {id}</h1>
    </div>
  )
}

export default AgentProfile