import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-dropdown';
import { setBreweries } from '../Actions/BreweryActions';

const West = [
  'West Coast', 'California', 'Hawaii', 'Nevada', 'Oregon', 'Washington'
]; 
const Mountains = [
  'Mountain States', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'New Mexico', 'Utah', 'Wyoming'
];
const Midsouth = [
  'MidSouth', 'Kentucky', 'Maryland', 'North Carolina', 'Tennessee', 'Virginia', 'West Virginia'
];
const Upper_Midwest = [
  'Upper MidWest', 'Illinois', 'Indiana', 'Michigan', 'Minnesota', 'Ohio', 'Wisconsin', 'Iowa', 'North Dakota', 'South Dakota'
];
const MidWest = [
  'MidWestern States', 'Kansas', 'Missouri', 'Nebraska', 'Arkansas', 'Louisiana', 'Oklahoma', 'Texas'
];
const NorthEast = [
  'NorthEast', 'Delaware', 'District of Columbia', 'Connecticut', 'Maine', 'Massachusetts', 'New Hampshire', 'Rhode Island', 'Vermont', 'New Jersey', 'New York', 'Pennsylvania'
];

const SouthEast =[
  'SouthEast', 'Alabama', 'Florida', 'Georgia', 'Mississippi', 'South Carolina'
]

const defaultOption1 = West[0];
const defaultOption2 = Mountains[0];
const defaultOption3 = Midsouth[0];
const defaultOption4 = Upper_Midwest[0];
const defaultOption5 = MidWest[0];
const defaultOption6 = NorthEast[0];
const defaultOption7 = SouthEast[0];

const MainPage = () => {
  const BreweriesData = useSelector((state) => state.Breweries);
  const dispatch = useDispatch();

  const fetchBreweries = async () => {
    const response = await axios.get('https://api.openbrewerydb.org/breweries')
    .then(response => {dispatch(setBreweries(response))})
    .catch((error) => {
      console.log("Error:", error);
    });
  };

  function regionMenu() {
    var x = document.getElementById("regionList");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  function selectedState(state){
    console.log("Selected State:", state);
    var y = document.getElementById("regionList");
      y.style.display = "none";
      var base = "/CityBreweries/AllBreweries/" 
      var extension = state.value;
      var statePage = base+extension
      console.log("New Url:", statePage)
      window.location = statePage;
  }

async function ZipFind(){
  const { value: zip } = await Swal.fire({
    title: 'Open Brewery',
    input: 'text',
    inputLabel: 'Enter zip code.',
    inputPlaceholder: '(here would be fine)'
  })
  
  if (zip) {
    fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zip}`)
        .then(response => response.json())
        .then(data => {          
          Swal.fire({
          title: "Top Result:",
          html: `<a href="/CityBreweries/AllBreweries/${data[0].state}/${data[0].name}">${data[0].name}</a>`,
          text: data[0].city
        })})
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
      }
}


// async function FindZip() {
//   Swal.fire({
//     title: 'Submit your Github username',
//     input: 'text',
//     inputAttributes: {
//       autocapitalize: 'off'
//     },
//     showCancelButton: true,
//     confirmButtonText: 'Look up',
//     showLoaderOnConfirm: true,
//     preConfirm: (zip) => {
//       return fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zip}`)
//         .then(response => response.json())
//         .then(data => {console.log("Zip Search return:", data)})
//             .catch(error => {
//           Swal.showValidationMessage(
//             `Request failed: ${error}`
//           )
//         })
//     },
//     allowOutsideClick: () => !Swal.isLoading()
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: result.name,
//         imageUrl: result.city
//       })
//     }
//   })
// }

  useEffect(() => {
    fetchBreweries();
  }, [])

  console.log ("Feature Component Data in Main:", BreweriesData.Breweries)
  const X = Math.floor((Math.random() * 10) + 1);


if(Object.keys(BreweriesData).length > 1){
  console.log("Featured:", BreweriesData.Breweries.data[0]);

  const FeaturedOne = BreweriesData.Breweries.data[X+1];
  const FeaturedTwo = BreweriesData.Breweries.data[X+2]
  const FeaturedThree = BreweriesData.Breweries.data[X]

  console.log("Brewery Index:", BreweriesData)
  var FeaturedLocations = (
    <table>
    <thead>
        <tr>
            <th colSpan="5"></th>
        </tr>
        <tr>
          <th>State</th>
          <th>City</th>
          <th>Location</th>
          <th></th>
          <th>Brewery Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href={`/CityBreweries/AllBreweries/${FeaturedOne.state}`}>{FeaturedOne.state}</a></td>
            <td>{FeaturedOne.city}</td>
            <td><a href={`/CityBreweries/AllBreweries/${FeaturedOne.state}/${FeaturedOne.name}`}>{FeaturedOne.name}</a></td>
            <td></td>
            <td>{FeaturedOne.brewery_type}</td>
        </tr>
        <tr>
          <td id="filler" colSpan="5"></td>
        </tr>
        <tr>
        <td><a href={`/CityBreweries/AllBreweries/${FeaturedTwo.state}`}>{FeaturedTwo.state}</a></td>
            <td>{FeaturedTwo.city}</td>
            <td><a href={`/CityBreweries/AllBreweries/${FeaturedTwo.state}/${FeaturedTwo.name}`}>{FeaturedTwo.name}</a></td>
            <td></td>
            <td>{FeaturedTwo.brewery_type}</td>
        </tr>
        <tr>
          <td id="filler" colSpan="5"></td>
        </tr>
        <tr>
        <td><a href={`/CityBreweries/AllBreweries/${FeaturedThree.state}`}>{FeaturedThree.state}</a></td>
            <td>{FeaturedThree.city}</td>
            <td><a href={`/CityBreweries/AllBreweries/${FeaturedThree.state}/${FeaturedThree.name}`}>{FeaturedThree.name}</a></td>
            <td></td>
            <td>{FeaturedThree.brewery_type}</td>
        </tr>
    </tbody>
    </table> 
    )
}
  return (
    <>
    <div className="front">
    <Link to={"/"} className="returnLink">𝕃𝕖𝕒𝕧𝕖 𝕆𝕡𝕖𝕟𝔹𝕣𝕖𝕨𝕖𝕣𝕪</Link><br/>
    <Link to={"/"} className="returnLink">𝕊𝕖𝕖 𝕪𝕠𝕦 𝕟𝕖𝕩𝕥 𝕥𝕚𝕞𝕖!</Link>      
    <div className="frontPage">
    <center><div className="welcomePage">
    <center><p className="welcomeBanner">OpenBrewery</p></center>
    <center><button  href="#"className="mainPageWelcome">Welcome!</button></center>

    </div></center>
    </div>
    <center><button className="newMainPageButton" href="#">Peruse by:</button>
      <br></br><button className="sign_in" onClick={regionMenu}>State</button><button className="sign_in" onClick={ZipFind}>Zip</button></center>
<hr/>
<hr/>
<div className="middleFill">
  <p className="middleFill"><center>Featured Locations</center></p>
</div>
<div className="featuredSection">
  <div>
{FeaturedLocations}
</div>
</div>
</div>

    <div id="regionList">
<Dropdown options={West} onChange={(value) => {selectedState(value)}} value={defaultOption1} placeholder="Select an option"  className="StateMenus" id="West"/>;
<Dropdown options={Mountains} onChange={(value) => {selectedState(value)}} value={defaultOption2} placeholder="Select an option"  className="StateMenus" id="Mountains"/>;
<Dropdown options={Midsouth}  onChange={(value) => {selectedState(value)}} value={defaultOption3} placeholder="Select an option"  className="StateMenus" id="Midsouth"/>;
<Dropdown options={Upper_Midwest}  onChange={(value) => {selectedState(value)}} value={defaultOption4} placeholder="Select an option"  className="StateMenus" id="Upper_Midwest"/>;
<Dropdown options={MidWest}  onChange={(value) => {selectedState(value)}} value={defaultOption5} placeholder="Select an option"  className="StateMenus" id="Midwest"/>;
<Dropdown options={NorthEast}  onChange={(value) => {selectedState(value)}} value={defaultOption6} placeholder="Select an option"  className="StateMenus" id="NorthEast"/>;
<Dropdown options={SouthEast}  onChange={(value) => {selectedState(value)}} value={defaultOption7} placeholder="Select an option"  className="StateMenus" id="SouthEast"/>;
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



  export default connect(mapStateToProps, mapDispatchToProps)(MainPage); 