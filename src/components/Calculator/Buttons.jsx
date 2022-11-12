import { buttons } from "../data/data";

const Buttons = () => {
    return(
        <>
        {buttons.map((buttons, index) => <button key={index} id={buttons.name} value={buttons.symbol} onClick={()=> console.log(buttons.name)}>{buttons.symbol}</button>)}
        </>
    );
}
export default Buttons;