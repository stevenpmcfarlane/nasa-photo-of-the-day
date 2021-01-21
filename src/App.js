import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import Header from "./components/Header";
import Image from "./components/Image";
import Text from "./components/Text";
import "./App.css";

const App = (props) => {
  const {
    date,
    explanation,
    hdurl,
    media_type,
    service_version,
    title,
    url,
  } = props;

  const [images, setImages] = useState(null);

  const openDetails = (props.date) => {
    setImages(props.date);
  };

  const closeDetails = () => {
    setImages(null);
  };
};
const apod = (props) => (
  <div className="apod">
    {props.date}
    <button onClick={() => openDetails(props.date)}>See details</button>
  </div>
);

useEffect(() => {
  //fetch apod object from the API
  axios
    .get(`${BASE_URL}/?api_key=${API_KEY}`)
    .then((res) => {
      const keys = Object.keys(res.data);
      //res.data
      setImages(res.data);
    })
    .catch((error) => console.log(error));
}, []);
return (
  <div className="App">
    <h3>Click date to reveal more information</h3>
    <p>
      Read{" "}
      <span role="img" aria-label="go!">
        🚀
      </span>
      !
    </p>
  </div>
);

// {
//   "date": "2021-01-20",
//   "explanation": "Do magnetic fields always flow along spiral arms?  Our face-on view of the Whirlpool Galaxy (M51) allows a spectacularly clear view of the spiral wave pattern in a disk-shaped galaxy.  When observed with a radio telescope, the magnetic field appears to trace the arms' curvature.  However, with NASA’s flying Stratospheric Observatory for Infrared Astronomy (SOFIA) observatory, the magnetic field at the outer edge of M51's disk appears to weave across the arms instead.  Magnetic fields are inferred by grains of dust aligning in one direction and acting like polaroid glasses on infrared light.  In the featured image, the field orientations determined from this polarized light are algorithmically connected, creating streamlines.  Possibly the gravitational tug of the companion galaxy, at the top of the frame, on the dusty gas of the reddish star-forming regions, visible in the Hubble Space Telescope image, enhances turbulence -- stirring the dust and lines to produce the unexpected field pattern of the outer arms.",
//   "hdurl": "https://apod.nasa.gov/apod/image/2101/M51Bfield_Sofia_2286.jpg",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "The Magnetic Field of the Whirlpool Galaxy",
//   "url": "https://apod.nasa.gov/apod/image/2101/M51Bfield_Sofia_960.jpg"
// }

export default App;
