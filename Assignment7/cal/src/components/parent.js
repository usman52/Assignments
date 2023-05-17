import { createContext, useState } from "react";
import Child from './child';
import './Parent.css';
export const result = createContext();


function Parent(){
    const [result1, setResult1] = useState('');
    const [result2, setResult2] = useState('');
    const [result3, setResult3] = useState('');
    const value = {setResult1,setResult2,setResult3};

    return(
        <>
        <div className="box">
            <div>Them Sum of Two number is = {result1}</div>
            <div>Them Sub of Two number is = {result2}</div>
            <div>Them Div of Two number is = {result3}</div>
        </div>
        <result.Provider value ={value}>
            <Child sign = '+' />
            <Child sign = '-' />
            <Child sign = '/' />
        </result.Provider>

        </>
    );
}

export default Parent;