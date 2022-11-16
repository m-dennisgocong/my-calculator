import { buttons } from "../data/data";

const Buttons = ({handleNumbers, handleOperators, allClear, handleEvaluate, handleDecimal}) => {

    return(
        <>
            {buttons.map((buttons, index) => {
                switch(buttons.type){
                    case 'number': 
                        return <button key={index} id={buttons.name} value={buttons.symbol} onClick={(e) => handleNumbers(e)}>{buttons.symbol}</button>
                    case 'operator':
                        return <button key={index} id={buttons.name} value={buttons.symbol} onClick={(e) => handleOperators(e)}>{buttons.symbol}</button>
                    case 'remove': // clear all
                        return <button key={index} id={buttons.name} value={buttons.symbol} onClick={allClear}>{buttons.symbol}</button>
                    case 'equation':
                        return <button key={index} id={buttons.name} value={buttons.symbol} onClick={handleEvaluate}>{buttons.symbol}</button>
                    case 'point':
                        return <button key={index} id={buttons.name} value={buttons.symbol} onClick={handleDecimal}>{buttons.symbol}</button>
                    default:
                        return <button key={index} id={buttons.name} value={buttons.symbol} onClick={()=> console.log(buttons.name+ 'under construction')}>{buttons.symbol}</button>
                }
            })}
        </>
    );
}
export default Buttons;