import { useContext } from "react";
import { context } from "../App";


function Examp3(){

    var h = useContext(context);
    console.log(h, "third");
    
    return(
        <>
        <h1>third Component</h1>
        </>
    )
}
export default Examp3;