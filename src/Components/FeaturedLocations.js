import React from 'react';
import { useSelector } from 'react-redux';
// import Likes  from './likes'


 const FeaturedLocations = () => {
  const Breweries = useSelector((state) => state.Breweries);
  console.log ("Feature Component Data:", Breweries)
  const X = Math.floor((Math.random() * 10) + 1);


  const FeaturedLocations =() =>{
    if(Breweries){
        const id = Breweries.brewery.data[X].id;
        const State = Breweries.brewery.data[X].state;
        const City = Breweries.brewery.data[X].city;
        const Location = Breweries.brewery.data[X].name;

        console.log("Named Brewery:", Location)
        return (
        <tr key={id}>
          <td><a href={`/CityBreweries/AllBreweries/${State}`}>{State}</a></td>
          <td>{City}</td>
          <td><a href={`/CityBreweries/AllBreweries/${State}/${Location}`}>{Location}</a></td>
          </tr>)
      }
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