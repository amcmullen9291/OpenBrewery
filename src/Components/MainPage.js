import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dropdown from 'react-dropdown';
// import Select from 'react-select';
import 'react-dropdown/style.css';

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


class Home extends React.Component {


  componentDidMount = async() => {
    await axios.get("https://api.openbrewerydb.org/breweries")
    .then(response => {console.log("Response:", response)})
    .catch((error) => {
      console.log("Error:", error);
    });

  }

    render() {
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
        <br></br><button className="sign_in" onClick={regionMenu}>State</button><button className="sign_in">Zip</button></center>
<hr></hr>
      </div>
      <div id="regionList">
<Dropdown options={West} onChange={(value) => console.log('change!', value)} value={defaultOption1} placeholder="Select an option"  className="StateMenus" id="West"/>;
<Dropdown options={Mountains} onSelect={(value) => console.log('selected!', value)} onChange={(value) => console.log('change!', value)} value={defaultOption2} placeholder="Select an option"  className="StateMenus" id="Mountains"/>;
<Dropdown options={Midsouth} onSelect={(value) => console.log('selected!', value)} onChange={(value) => console.log('change!', value)} value={defaultOption3} placeholder="Select an option"  className="StateMenus" id="Midsouth"/>;
<Dropdown options={Upper_Midwest} onSelect={(value) => console.log('selected!', value)} onChange={this._onSelect} value={defaultOption4} placeholder="Select an option"  className="StateMenus" id="Upper_Midwest"/>;
<Dropdown options={MidWest} onSelect={(value) => console.log('selected!', value)} onChange={this._onSelect} value={defaultOption5} placeholder="Select an option"  className="StateMenus" id="Midwest"/>;
<Dropdown options={NorthEast} onSelect={(value) => console.log('selected!', value)} onChange={this._onSelect} value={defaultOption6} placeholder="Select an option"  className="StateMenus" id="NorthEast"/>;
<Dropdown options={SouthEast} onSelect={(value) => console.log('selected!', value)} onChange={this._onSelect} value={defaultOption7} placeholder="Select an option"  className="StateMenus" id="SouthEast"/>;
</div>

        </>
      )
    }
}
function regionMenu() {
    var x = document.getElementById("regionList");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function hideMap(){
    var y = document.getElementById("regionList");
    if (y.style.display === "block") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }

  }

  export default Home;