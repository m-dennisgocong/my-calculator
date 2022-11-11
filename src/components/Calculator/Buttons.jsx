import { numbers, operators, otherFunction } from "../data/data";

const Buttons = () => {

    const operator = operators.map((operator, index) => 
        <button key={index} value={operator.operator} className={operator.name} onClick={()=> console.log(operator.name)}>{operator.operator}</button>
    );
    const num = numbers.map((num, index) => 
        <button key={index} value={num.number} className={num.name} onClick={()=> console.log(num.name)}>{num.number}</button>
    );

    const otherCalculatorFunction = otherFunction.map((func, index) => 
    <button key={index} value={func.symbol} className={func.name} onClick={()=> console.log(func.name)}>{func.symbol}</button>
    );

    return(
        <>
            {operator}
            {num}
            {otherCalculatorFunction}
        </>
    );
}
export default Buttons;