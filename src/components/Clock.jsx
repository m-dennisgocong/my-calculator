import { useState } from "react";

const Clock = () => {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    
    const tick = () => { // update the element
        setCurrentTime(new Date().toLocaleTimeString());
    }

    setInterval(tick, 1000); // every second

    return(<time>{currentTime}</time>);
} 

export default Clock