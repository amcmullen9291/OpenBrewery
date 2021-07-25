import React, { PureComponent } from 'react'
import Swal from 'sweetalert2'

export default class Welcome extends PureComponent {

  render() {
    return (
      <div className="front">
      <div className="frontPage">
      <center><div className="welcomePage">
      <center><p className="welcomeBanner">OpenBrewery</p></center>

        <center><button className="look_around" onClick={consent}> Have a Look Around</button>
        <br></br><button className="sign_in" onClick={loggingIn}>Sign-in</button><button className="sign_in" onClick={register}>Register</button></center>
      </div></center>
      </div>
      </div>
    )
  }
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