
import {useState, useEffect} from 'react';

const api = {
    key: "b47139f1a8ee99b6597bde6bd3634d6c",
    base: "https://api.openweathermap.org/data/2.5/"
};
function Weather(){
    const CountryList = [
        {   id: '1',
            name: 'Pakistan',
            
        },
        {
            id: '2',
            name: 'Canada',

        }
    ];
    const cityList = [
        {
            id: '1', countryId: '1', name: 'Islamabad'
        },
        {
        id: '2', countryId: '1', name: 'Lahore'},
        {
            id: '3', countryId: '2', name: 'Ottawa'
        },
        {
            id: '4', countryId: '2', name: 'Toronto'
        }
    ];
    
    
    const [select, setSelect] = useState("");
    const [weather, setWeather] = useState({});
    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);

    
    
    const selectInput = () => {
        fetch(`${api.base}weather?q=${select}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) =>{
            setWeather(result);
        });
    };
    useEffect(()=>{
        setCountry(CountryList);
    },[])

    const handleCountry = (id) =>{
        setSelect("select city");
        const dt = cityList.filter(name =>name.countryId === id);
        setCity(dt);
       
    }
    

    
    return(
        <>
        <div className = "container">
            <div><h2>To Know Temperature</h2></div>
            <div><h4>Select Country and City</h4></div>
            <div>
            <select onChange= {(e) => {handleCountry(e.target.value);
            }}>
            <option value = '0'>Select Country</option>
            {
                country && country !== undefined? country.map((ctr, index) => {
                    return(
                        <option key = {index} value={ctr.id} name = {ctr.name}>{ctr.name}</option>                    )

                })
                :'No Country'
            }
                
                
            </select>
            <br></br> 
            <select value={select}  onChange={(e) => setSelect(e.target.value)}>
            <option>--Select City--</option>
            
            {
            city && city !== undefined? city.map((ctr, index) => {
                    return(
                        <option key = {index} value={ctr.name}>{ctr.name}</option>                    )

                })
                :'No City'
            }
                
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