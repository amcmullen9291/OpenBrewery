import React from 'react';
import { useSelector } from 'react-redux';
// import Likes  from './likes'


 const FeaturedLocations = () => {
  const Breweries = useSelector((state) => state);

  if (Breweries) {
  var FeaturedLocations = Breweries.map(brewery => {
        const {id, name, city, state } = Breweries.brewery.data;
        return (
        <tr key={id}>
          <td><a href={`/CityBreweries/AllBreweries/${brewery.state}`}>{state}</a></td>
          <td>{city}</td>
          <td><a href={`/CityBreweries/AllBreweries/${brewery.state}/${breweries.name}`}>{name}</a></td>
          </tr>)
      })
    }

    return(
      <>
      <div>{FeaturedLocations}</div>
      </>
    )
  }

  // const title = notes[0].attributes.title;
  // const title2 = notes[1].attributes.title;
  // const title3 = notes[2].attributes.title;
export default FeaturedLocations;