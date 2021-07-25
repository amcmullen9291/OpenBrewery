import React, { PureComponent } from 'react'

export default class Welcome extends PureComponent {
  render() {
    return (
      <div className="front">
      <div className="frontPage">
      <center><div className="welcomePage">
      <center><p className="welcomeBanner">OpenBrewery</p></center>

        <center><button className="look_around"> Have a Look Around</button>
        <br></br><button className="sign_in">Sign-in</button></center>
      </div></center>
      </div>
      </div>
    )
  }
}
