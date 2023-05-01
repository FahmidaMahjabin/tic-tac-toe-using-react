// make a board of 9 square 
import Square from "./Square";
import { useState } from "react";

export default function Board(){
   const squares = Array(9);
   squares.fill(null);
   
    const [values, setValues] = useState(squares);
    const [isXnext, setIsXnext] = useState(true);
    function handleSquares(index){
      if(values[index]){
         return
      }
      const newValues = values.slice();
      if(isXnext){
         newValues[index] = "X";
      }
      else{
         newValues[index] = "0";
      }
      setIsXnext(!isXnext);
      
      setValues(newValues);
      console.log("values:", values);
      

    }
   //  function = get winner 
   
    return (
        <>
        <div>
           <Square value = {values[0]} setValueFunction = {() => { handleSquares(0)}} ></Square>
           <Square value = {values[1]} setValueFunction = {() => { handleSquares(1)}}></Square>
           <Square value = {values[2]} setValueFunction = {() => { handleSquares(2)}}></Square>
        </div>
        <div>
           <Square value = {values[3]} setValueFunction = {() => { handleSquares(3)}}></Square>
           <Square value = {values[4]} setValueFunction = {() => { handleSquares(4)}}></Square>
           <Square value = {values[5]} setValueFunction = {() => { handleSquares(5)}}></Square>
        </div>
        <div>
           <Square value = {values[6]} setValueFunction = {() => { handleSquares(6)}}></Square>
           <Square value = {values[7]} setValueFunction = {() => { handleSquares(7)}}></Square>
           <Square value = {values[8]} setValueFunction = {() => { handleSquares(8)}}></Square>
        </div>
        </>
    )
}