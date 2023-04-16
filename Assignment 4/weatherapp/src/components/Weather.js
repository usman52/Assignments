import './Weather.css';
import {useState, useEffect} from 'react';

const api = {
    key: "b47139f1a8ee99b6597bde6bd3634d6c",
    base: "https://api.openweathermap.org/data/2.5/"
};
function Weather(){
    
    
    const [select, setSelect] = useState("");
    const [weather, setWeather] = useState({});

    const selectInput = () => {
        fetch(`${api.base}weather?q=${select}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) =>{
            setWeather(result);
        });
    };
    return(
        <>
        <div className = "container">
            <div><h2>To Know Temperature</h2></div>
            <div><h4>Select Country and City</h4></div>
            <div>
            <select onChange={(e) => setSelect(e.target.value)}>
            
                <option>--Country--</option>
                <option>Pakistan</option>
                <option>Canada</option>
                
                
            </select> 
            <select onChange={(e) => setSelect(e.target.value)
            }>
            <option>--City--</option>
            <option>Islamabad</option>
            <option>Lahore</option>
            <option>Toronto</option>
            <option>Ottawa</option>
                
                
            </select>
            </div>
            <div>
                <button onClick = {selectInput}>Check</button>
            </div>
            {typeof weather.main != "undefined" ?(
            <div>
                <p>{weather.name}</p>
                <p>{weather.main.temp} °C</p>
            </div>
            ):(
                ""
            )}

         
        </div>
        
        </>
    );
}
export default Weather;