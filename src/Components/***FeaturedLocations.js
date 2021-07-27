// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';
// // import Likes  from './likes'


//  const FeaturedLocations = async() => {
//   const Featured1 = [];
//   const Featured2 = [];
//   const Featured3 = [];
   
//   const BreweriesData = useState(state => state.Breweries.Breweries);
//   console.log ("Feature Component Data:", BreweriesData)
//   const X = Math.floor((Math.random() * 10) + 1);
//   const Y = Math.floor((Math.random() * 10) + 1);
//   const Z = Math.floor((Math.random() * 10) + 1);

//  if(BreweriesData){
//   let Featured1 = BreweriesData.data[X];
//   let Featured2 = BreweriesData.data[Y];
//   let Featured3 = BreweriesData.data[Z];


//   console.log("Random#1:", Featured1 )
//   console.log("Random#2:", Featured2 )
//   console.log("Random#3:", Featured3 )
 
//     return(
//       <>
//       <hr/>
//       <br/>
//       <center>
//         <p>Featured Locations</p>
// <table>
//     <thead>
//         <tr>
//             <th colspan="5">Featured Breweries</th>
//         </tr>
//         <tr>
//           <th>State</th>
//           <th>City</th>
//           <th>Location</th>
//           <th></th>
//           <th>Type</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>StateFarm</td>
//             <td>LaGrange</td>
//             <td>Mine</td>
//             <td></td>
//             <td>Chilly</td>
//         </tr>
//         <tr></tr>
//     </tbody>
// </table>
// </center>
//       </>
//     )
//   }
// }
//   const mapStateToProps = (state, Breweries) => {
//     return {
//       Breweries: state.Breweries
//     }
  
//   }
// export default connect(mapStateToProps)(FeaturedLocations);