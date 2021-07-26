import React from 'react';
import { useParams } from 'react-router-dom';

export default function StateToState() {

    const State = useParams();
    console.log("Received State:", State)
  return (
    <div>
      
    </div>
  )
}

