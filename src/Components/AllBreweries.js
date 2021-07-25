import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import SelectedEntry from './SelectedEntry';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBreweries } from '../Actions/EntryActions';

const AllBreweries = () => {
  const breweries = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchIndex = async () => {
    const response = await axios.get(' http://[::1]:3001').catch((error) => {
      console.log("Error:", error);
    });
    dispatch(setBreweries(response.data));
  };

  

  useEffect(() => {
    fetchIndex();
  }, [])

  if (breweries) {
    var BreweryIndex = breweries.map(brewery => {
      const {id, name, state } = entry.attributes;
      console.log(entry.id);
      return (<ul key={id}>
        <li><a href={`/CityBreweries/AllBreweries/StateToState/${entry.id}`}>{name}, {state}</a></li>
        </ul>)
    })
  }
  return(
    <>
    <div>{BreweryIndex}</div>
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