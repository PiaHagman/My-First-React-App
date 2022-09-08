import React from "react";
import { useEffect, useState } from "react";
import FetchData from "./FetchData";


const Weather = () =>{
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [data, setData] = useState([]);

 const setCoordinates = (latitude, longitude) => {
  setLat (latitude); //Tänk på att setFunktioner är asynkrona varför vi måste lyfta ut dessa i en egen funktion för att garantera att de har blivit satta innan url:en skickas iväg med parametrarna
  setLong(longitude);
 }
 
 async function fetchWeatherData(){
  const apiKey= "34aae72a68460271e96c8ffc1d631d61"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
  const fetchedData = await FetchData(url);
  setData(fetchedData.weather);
 }

  useEffect(() => {
        fetchWeatherData();
        return() => console.log("Här skulle man kunna aborta api-callet, tex genom AbortController")
    },[lat, long]);
  
  
  return(
    <div className="component-frame">
      <p className="component-heading">My weather</p>
        {data?.map((item) => (
          <div className="text-white" key={item.id}>
            <h3>{item.main}</h3>
          </div>
        ))}  
      <button className="my-button" onClick= {() => setCoordinates("57.7689708", "12.2526081")}>Hämta väder för Lerum</button>
    </div>
  )

}

export default Weather;