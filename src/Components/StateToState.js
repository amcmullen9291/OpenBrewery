import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { stateBreweries } from '../Actions/BreweryActions';


const StateToState = () => {
  const StateData = useSelector((state) => state.StateBreweries);
  const dispatch = useDispatch();

  const Brewery = useParams();
  console.log("Received State:", Brewery.state)
  console.log("State Breweries:", StateData)

  const fetchStateBreweries = async () => {
    const response = await axios.get(`https://api.openbrewerydb.org/breweries?by_state=${Brewery.state}&per_page=50`)
    .then(response => {dispatch(stateBreweries(response))})
    .catch((error) => {
      console.log("Error:", error);
    });
  };
  
  useEffect(() => {
    fetchStateBreweries();
  }, [])

if(Object.keys(StateData).length > 1){
  console.log("DataSet after length check:", StateData.StateBreweries.data)
  var StateList = StateData.StateBreweries.data.map(pub => {
    const {id, state, city, name } = pub;
  return (<tr key={id}>
             <td>{state}</td>
             <td>{city}</td>
             <td><Link to={`/CityBreweries/AllBreweries/${state}/${name}`}>{name}</Link></td>
             <td className="moreInfo">Click for Additional information</td>
         </tr>)
  }
  )
}
  return (
    <>
    <div>
      <Link to={"/CityBreweries"}>Return to Lobby</Link>
    </div>
    <div>
    <table id="stateTable">
  <thead>
  <tr>
      <th colSpan="5"></th>
  </tr>
  <tr>
    <th>State</th>
    <th>City</th>
    <th>Location</th>
    <th></th>
  </tr>
</thead>
   <tbody>
      {StateList}
      </tbody>
   </table> 

    </div>
      </>
    )
}
const mapStateToProps = (state) => {
  return {
    Breweries: state.Breweries
  }

}

     const mapDispatchToProps = (dispatch) => {
       console.log("function is being called")
       return{
         findBrewery: (brewery) => { dispatch({type: 'SELECTED_BREWERY', brewery})}
       }
     }



  export default connect(mapStateToProps, mapDispatchToProps)(StateToState); 
