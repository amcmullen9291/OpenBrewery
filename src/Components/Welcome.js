import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBreweries } from '../Actions/BreweryActions';

import { connect } from 'react-redux';
import Swal from 'sweetalert2'

const Welcome =() => {
  const dispatch = useDispatch();

  const fetchBreweries = async () => {
    const response = await axios.get('https://api.openbrewerydb.org/breweries')
    .then(response => {dispatch(setBreweries(response))})
    .catch((error) => {
      console.log("Error:", error);
    });
  };

  useEffect(() => {
    fetchBreweries();
  }, [])


    return (
      <div className="front">
      <div className="frontPage">
      <center><div className="welcomePage">
      <center><p className="welcomeBanner">OpenBrewery</p></center>

        <center><button className="look_around" onClick={consent}> Have a Look Around</button>
        {/* <br></br><button className="sign_in" onClick={loggingIn}>Sign-in</button><button className="sign_in" onClick={register}>Register</button> */}
        </center>
      </div></center>
      </div>
      </div>
    )
}

function register (e){
  e.preventDefault();
  const { value: formValues } = Swal.fire({
    title: 'OpenBrewery',
    inputLabel: 'Log-in:',
    html:
    'First name'+
      '<input id="swal-input1" class="swal2-input">' +
      'Password'+
      '<input id="swal-input2" class="swal2-input">',
    input: 'checkbox',
    inputValue: 0,
    inputPlaceholder:
      'I am 21 years old or older!',
      inputValidator: (result) => {
        return !result && 'You need to be at least 21 years old to enter.'
      },
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}

function consent(e){
  e.preventDefault();
  Swal.fire({
    title: 'OpenBrewery',
    input: 'checkbox',
    inputValue: 0,
    inputPlaceholder:
      'I am 21 years old or older!',
    confirmButtonText:
      'Continue <i class="fa fa-arrow-right"></i>',
    inputValidator: (result) => {
      return !result && 'You need to be at least 21 years old to enter.'
    },
  }).then(function() {
    window.location = "/CityBreweries"})
}


function loggingIn(){
  const { value: formValues } = Swal.fire({
    title: 'OpenBrewery',
    inputLabel: 'Log-in:',
    html:
    'Firstname'+
      '<input id="swal-input1" class="swal2-input">' +
      'Password'+
      '<input id="swal-input2" class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }
}
const mapStateToProps = (state) => {
  return {
    Breweries: state.Breweries
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log("function is being called")
  return{
    findBrewery: (Brewery) => { dispatch({type: 'SELECTED_BREWERY', Brewery})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);