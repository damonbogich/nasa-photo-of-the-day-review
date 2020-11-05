import React, {useState, useEffect} from "react";
import axios from 'axios';
import NasaCard from './components/NasaCard'
import "./App.css";

function App() {
  //get api data
  const [nasaData, setNasaData] = useState({});
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=XzaVcR7IYzDAD6SvNB4vLyIcpEroE0DMGDyuG1X1')
    .then(res => {
    console.log('first response', res.data);
    setNasaData(res.data)
  })
    .catch(err => {
    console.log(err);
  })
  }, []);
  
  return (
    <div className="App">
      <h1>Nasa Project</h1>
      <NasaCard data={nasaData}/>
    </div>
  );
}

export default App;
