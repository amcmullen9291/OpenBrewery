import React from 'react';
import { Link } from 'react-router-dom';
import Index from './Index';
import Logo from './Logo';
// import LikeButton from './likeButton';

class Home extends React.Component {

    render() {
      return (
          <>
        <div className="App">
        <Index/>
        <center><Logo/></center>
          <section className="MainLogo"></section>
            <div>Open Brewery</div>
          <center><button  type="button" className="myButton" onClick={showMenu}>Full Listings</button></center>
          <center><Link className="myButton" to="/DearDiary/NewEntry">Search By State</Link></center>
          </div>
          {/* <LikeButton/> */}
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
