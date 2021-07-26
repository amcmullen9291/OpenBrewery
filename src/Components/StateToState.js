import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


import React from 'react'

export default function StateToState() {

    const State = useParams();
    console.log("Received State:", State)

  return (
    <div>
      <Link to={"/CityBreweries"}>Return to Lobby</Link>
    </div>
  )
}


