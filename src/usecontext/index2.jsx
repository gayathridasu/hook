import { useContext } from "react";
import Examp3 from "./index3";
import { context } from "../App";

function Examp2(){

var j = useContext(context);
console.log(j,"second");

    return(
        <>
        <h1>second Component</h1>
        <Examp3 />
        </>
    )
}
export default Examp2;