import React,{useState} from "react";
import "./style.css";


export default function App() {
  const [result,setResult]=useState(0)
  const [calc,setCalc]=useState("")
  const digits = ()=>{
    let digits_array=[]
    for (let i =1;i<10;i++){
      digits_array.push(<button key={i} onClick={()=>updateCalc(`${i}`)}>{i}</button>) 
    }
    return digits_array

  }
  const updateCalc = v=>{
    const operands = ["*","/","-","+"]
    if (calc.length==0){
      if (operands.includes(v)){
        setCalc("")
      } 
      else{
        setCalc(calc+v)
      }

    }
    if (calc.length>0){

      const last = calc.charAt(calc.length - 1);
      if (operands.includes(last)){

        if (operands.includes(v)){
          console.log("cant take two operators at a time")
        }
        else{
          setCalc(calc+v)
        }
      }
      else{
        setCalc(calc+v)
      }
      

    }
    
  }
  const deleteCalc=()=>{

    setCalc(calc.slice(0,-1))
  }
  const displayResult=()=>{
    const operands = ["*","/","-","+","."]
    if (operands.includes(calc.charAt(calc.length - 1))){
      console.log("last character is invalid")
    }
    else{
    setResult(eval(calc))
    setCalc(String(eval(calc))) 
    }
  }
  const clearCalc=()=>{ 
    setResult(0)
    setCalc("")
  }
  return (
    <div className ="calculator">
      <div className="display">
        <h1>{result}</h1>
        <h4>{calc}</h4>

      </div> 

      <div className="operators">
        <button onClick={()=>updateCalc("+")}>+</button>
        <button onClick={()=>updateCalc("-")}>-</button>
        <button onClick={()=>updateCalc("*")}>X</button>
        <button onClick={()=>updateCalc("/")}>/</button>
        <button onClick={()=>deleteCalc()}>DEL</button>
        <button onClick={()=>clearCalc()}>CLR</button>
      </div>
      
      <div className="numbers">
      {digits()}
      <button onClick={()=>updateCalc("0")}>0</button>
      <button onClick={()=>updateCalc(".")}>.</button>
      <button onClick={()=>displayResult()}>=</button>

      </div>


      
    </div>
  );
}
