// import React from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-map-react";
// import { PropTypes } from "prop-types";

// const FooterMap = props => {
//   const mapStyles = {
//     width: "100%",
//     height: "100%"
//   };

//   return (
//     <Map
//       google={props.google}
//       zoom={10}
//       style={mapStyles}
//       initialCenter={{ lat: props.latitude, lng: props.longitude }}
//     >
//       <Marker
//         position={{ lat: props.latitude, lng: props.longitude }}
//         icon={{
//           url: "/assets/img/2.png"
//         }}
//         animation={props.google.maps.Animation.BOUNCE}
//       />
//     </Map>
//   );
// };

// FooterMap.propTypes = {
//   google: PropTypes.object,
//   latitude: PropTypes.string,
//   longitude: PropTypes.string
// };

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBzgS7wc4sPWbLwDtYayRfVmSN7O8B41xk"
// })(FooterMap);

