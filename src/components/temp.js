//https://api.openweathermap.org/data/2.5/weather?q=contai&appid=acafb883f642db5f6b89a5aae60e0cbf

import React, { useEffect, useState } from 'react'
import './style.css'
import WeatherCard from "./WeatherCard";

const Temp = () => {
    const[dataItem,setData]=useState("contai");
    const[weatherInfo,setWeatherInfo]=useState({});
    const getWeather= async()=>{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${dataItem}&units=metric&appid=acafb883f642db5f6b89a5aae60e0cbf`;
            const res=await fetch(url);
            const data=await res.json();

            const {temp,humidity,pressure}=data.main;
            const{main:weathermood}=data.weather[0];
            const{name}=data;
            const{speed}=data.wind;
            const{country,sunset}=data.sys;
            const myWeatherInfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            
            setWeatherInfo(myWeatherInfo);
            // console.log(setWeatherInfo);
            // console.log(temp,humidity,pressure,weathermood,name,speed,country);
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getWeather();
    },[]);
  return (
    <>
    {/* search icons */}
    <div className="wrap">
        <div className="search">
            <input type="search" placeholder='search..' className='searchTerm' id='search' autoFocus
            value={dataItem} onChange={(e)=>setData(e.target.value)}/>
            <button className='searchButton' type='button' onClick={getWeather}>Search</button>
        </div>
    </div>
    {/* weather landing page */}
    
    <WeatherCard weatherInfo={weatherInfo}/>
    </>
  )
}

export default Temp