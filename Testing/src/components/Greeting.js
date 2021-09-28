import { useState } from "react";
import Async from "./Async";
import Output from "./Output";

const Greeting = () => {
    const [changedText,setChangedText,] = useState(false);

    const changeTextHandler = ()=> {
        setChangedText(true);
    };

 return (
     <div>
         <h2>Hello World!</h2>
        { !changedText && <Output>It's Good to see you!</Output>}
        { changedText && <Output>Changed!</Output>}
         <button onClick={changeTextHandler}>Change Text!</button>
         <Async />
     </div>
 )
}

export default Greeting;