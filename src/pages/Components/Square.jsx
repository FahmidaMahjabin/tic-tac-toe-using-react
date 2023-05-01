import { useState } from "react";
import { Button } from "react-bootstrap";

export default function square({value, setValueFunction}){
  // square button e onClick korle -
// 1.player1 X default boshbe 
// 2.player = player2 0 set hobe
// 3.move increment hobe 

  function makeAmove(){
    console.log("player1");
    if(value == "X"){
      setValueFunction("0");
    }
    else{
      setValueFunction("X");
    }
  }
    return(
      <Button variant="outline-primary" onClick = {setValueFunction}>{value}</Button>

    )
}


