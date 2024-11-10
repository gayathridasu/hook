import { useContext } from "react";
import Examp2 from "./index2";
import { context } from "../App";

function Examp1(){
var i = useContext(context);
console.log(i, "first");

   
    return(
        <>
        <h1>first Component</h1>
        <Examp2 />
        </>
    )
}
export default Examp1;