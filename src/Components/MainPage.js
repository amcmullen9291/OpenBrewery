import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import AllBreweries from './AllBreweries'

class Home extends React.Component {

  componentDidMount = async() => {
    await fetch("https://api.openbrewerydb.org/breweries")
    .then(response => {console.log("Response:", response)})
    .catch((error) => {
      console.log("Error:", error);
    });

  }
    render() {
      return (
          <>
        <div className="App">
        {/* <AllBreweries/> */}
          <section className="MainLogo"></section>
            <div>Open Brewery</div>
          <center><button  type="button" className="myButton" onClick={showMenu}>Full Listings</button></center>
          <center><Link className="myButton" to="/DearDiary/NewEntry">Search By State</Link></center>
          </div>

          <Link to={"/"}>Leave OpenBrewery</Link>
        </>
      )
    }
}
function showMenu() {
    var x = document.getElementById("sidenav");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  export default Home;