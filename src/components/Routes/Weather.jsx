import React from "react";
import { useEffect, useState } from "react";
import FetchData from "../FetchData";

const Weather = () =>{
  const locations = [
    {
      location: "Lerum",
      latitude: "57.7689708",
      longitude: "12.2526081"    
    },
    {
      location: "Stockholm",
      latitude: "59.32932349999999",
      longitude: "18.068580800000063"    
    },
    {
      location: "Göteborg",
      latitude: "57,7087",
      longitude: "11,9751"    
    },
    {
      location: "Malmö",
      latitude: "55.604981",
      longitude: "13.003822000000014"    
    }
  ]
  
  const [lat, setLat] = useState("57.7689708");
  const [long, setLong] = useState("12.2526081");
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    fetchWeatherData();
    return() => console.log("Här skulle man kunna aborta api-callet, tex genom AbortController")

},[lat, long]);


 const handleOnClick = (index) => {
  setCoordinates(locations[index].latitude, locations[index].longitude)
  fetchWeatherData(index);
  setShowData(true);
};

 async function fetchWeatherData(index){
  const apiKey= "34aae72a68460271e96c8ffc1d631d61"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locations[index].latitude}&lon=${locations[index].longitude}&appid=${apiKey}&units=metric`;
  const fetchedData = await FetchData(url);
  setData(fetchedData);
 }

 const setCoordinates = (latitude, longitude) => {
  setLat (latitude); //Tänk på att setFunktioner är asynkrona varför vi måste lyfta ut dessa i en egen funktion för att garantera att de har blivit satta innan url:en skickas iväg med parametrarna
  setLong(longitude);
  
 }
  return(
    <div className="component-frame">
      <h1 className="component-heading">Weather Forecast</h1>
      <p>Pick one of the following places to get it's current weather. </p>
      <div className="weather-card">
        <div className="weather-card-buttons" style={{width:"400px"}}>
          {locations.map((item, index) => (
          <button className="my-button" 
          onClick= {() => {handleOnClick(index)}}>{item.location}</button>
          ))}
        </div>

        {showData && data && 
          data.map(({weather, main, id, name}) => (
            <div key={id} className="weather-card-data">
              <h2>{name}</h2>
              <img alt="weather icon" src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}/> 
              <p>{weather[0].description}</p>
              <p>{Math.round(main.temp)} &#8451;</p>
            </div>
          ))}  
      </div>
    </div>
  )
}

export default Weather;