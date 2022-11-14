import { useState } from "react";
import Buttons from "./Buttons";

const Screen = () => {
    return <div id="display"></div>
}

const Calculator = () => {
    
    return(
    <>
        <Screen/>
        <Buttons/>
    </>
    );
}
export default Calculator;