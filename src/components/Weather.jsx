import React from "react";
import { useEffect, useState } from "react";
import FetchData from "./FetchData";
import "../weather/css/weather-icons-wind.css"
import"../weather/css/weather-icons-wind.min.css"
import "../weather/css/weather-icons.css"
import "../weather/css/weather-icons.min.css"

const Weather = () =>{
  const locations = [
    {
      location: "Lerum",
      latitude: "57.7689708",
      longitude: "12.2526081"    
    },
    {
      location: "Stockholm",
      latitude: "57.7689708",
      longitude: "12.2526081"    
    },
    {
      location: "Göteborg",
      latitude: "57.7689708",
      longitude: "12.2526081"    
    },
    {
      location: "Malmö",
      latitude: "57.7689708",
      longitude: "12.2526081"    
    }
  ]
  
  
  const [lat, setLat] = useState("57.7689708");
  const [long, setLong] = useState("12.2526081");
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

 

 const handleOnClick = () => {
  setShowData(!showData);
  fetchWeatherData();
};

 async function fetchWeatherData(){
/*   setCoordinates("57.7689708", "12.2526081");
 */  const apiKey= "34aae72a68460271e96c8ffc1d631d61"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  const fetchedData = await FetchData(url);
  setData(fetchedData);
 }

 const setCoordinates = (latitude, longitude) => {
  setLat (latitude); //Tänk på att setFunktioner är asynkrona varför vi måste lyfta ut dessa i en egen funktion för att garantera att de har blivit satta innan url:en skickas iväg med parametrarna
  setLong(longitude);
  
 }

 /*  useEffect(() => {
        fetchWeatherData();
        setShowData(!showData)
        return() => console.log("Här skulle man kunna aborta api-callet, tex genom AbortController")

    },[lat, long]); */
  
  return(
    <div className="component-frame">
      <p className="component-heading">Some weather</p>
      <p>Pick one of the following places to get it's current weather. </p>
      <div className="weather-card">
      <div className="weather-card-buttons" style={{width:"400px"}}>
      <button className="my-button">{locations[0].location}</button>
      <button className="my-button">{locations[1].location}</button>
      <button className="my-button">{locations[2].location}</button>
      <button className="my-button">{locations[3].location}</button>
      <button className="my-button" onClick= {handleOnClick}>Hämta väder för Lerum</button>

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