import React from 'react'
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBreweries } from '../Actions/BreweryActions';

const AllBreweries = () => {
  const breweries = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchIndex = async () => {
    const response = await axios.get('https://api.openbrewerydb.org/breweries')
    .then(response =>{console.log("Response:", response)})
    .catch((error) => {
      console.log("Error:", error);
    });
    dispatch(setBreweries(response.data));
  };


  // if (breweries) {
  //   var BreweryIndex = breweries.map(brewery => {
  //     const {id, name, state } = brewery.attributes
  //     console.log(brewery.id);
  //     return (<ul key={id}>
  //       <li><a href={`/CityBreweries/AllBreweries/StateToState/${brewery.id}`}>{name}, {state}</a></li>
  //       </ul>)
  //   })
  // }
  return(
    <>
    <div>Brewery Area</div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    brewery: state.brewery
  }

}

     const mapDispatchToProps = (dispatch) => {
       return{
         findEntry: (brewery) => { dispatch({type: 'SELECTED_BREWERIES', brewery})}
       }
     }



  export default connect(mapStateToProps, mapDispatchToProps)(AllBreweries); 