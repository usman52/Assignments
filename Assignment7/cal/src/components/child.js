import {react, useContext, useRef} from 'react';
import {result} from './parent';

function Child(props){
    const results = useContext(result);
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);

    function cal(){
        if(props.sign === '+'){
            const num1 = Number(Ref1.current.value);
            const num2 = Number(Ref2.current.value);
            results.setResult1(num1 + num2);
        
        }
        else if(props.sign === '-'){
            const num1 = Number(Ref1.current.value);
            const num2 = Number(Ref2.current.value);
            results.setResult2(num1 - num2);
    }
    else if(props.sign === '/'){
        const num1 = Number(Ref1.current.value);
        const num2 = Number(Ref2.current.value);
        results.setResult3(num1 / num2);
}
    }
    return(
        <>
        <div>
        <input type="text" ref={Ref1} /><b>{props.sign}</b>
        <input type="text" ref={Ref2} />
        <button onClick={cal}>Calculate</button>
        </div>
        </>
    )
}
export default Child;