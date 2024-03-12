import React, {useState, useEffect, useRef} from "react";
import Button from "./buttons";
import Footer from "./footer";

const Timer=()=>{
    
    const [counter,setCounter]=useState(0)

     useEffect(()=>{
      handelTime()
        return ()=>clearInterval(id.current)    
     },[])
   
     let id= useRef()
     let od=useRef()
     const handelTime=()=>{
        id.current = setInterval(()=>{
            setCounter((count)=>count+1) 
         },1000);
     }

     const countDown=()=>{
       od.current = setInterval(()=>{
            if(counter > 0){setCounter((count)=>count -1)}
            },1000);
     }

   const defCounter=()=>{
        if(counter<0){clearInterval(od.current)
        setStratingV("")
        setCounter(0)}
            return counter
   }
   
const alertFunc=()=>{
    setAlertV("")
    alert("we got it")
}
    
   
   const [startingV, setStratingV]= useState("")
    const [alertV, setAlertV]=useState("")
        
    if(alertV==counter && alertV!=""){alertFunc()}
    if(counter<0 && startingV!==""){alert("Its Game Over Man!!!")}

console.log(counter)

return( 
<div id="mainDiv" > 
    <div className="bigCounter bg-dark">
            <div className="clock"><i class="far fa-clock"></i></div>
            <div>{(Math.floor(counter/1000000)) % 10}</div>
            <div>{(Math.floor(counter/100000)) % 10}</div>
            <div>{(Math.floor(counter/10000)) % 10}</div>
            <div>{(Math.floor(counter/1000)) % 10}</div>ws
            <div>{(Math.floor(counter/100))% 10}</div>
            <div>{(Math.floor(counter/10)) % 10}</div>
            <div>{defCounter()%10}</div>
    </div>
    <div className="d-flex justify-content-center p-3">
             <Button name="Stop" color="red" event={()=>{clearInterval(id.current)
                clearInterval(od.current)}}/>
		     <Button name="Start" color="green"  event={()=>{clearInterval(id.current)
                    clearInterval(od.current)
                    handelTime()}}/>
		     <Button name="Reset" color="blue" event={()=>{
                    clearInterval(id.current)
                    clearInterval(od.current)
                    setCounter(0)}}/>
             
    </div>
    <div className="container d-flex justify-content-center">
        <input type="text" className="form-control"  placeholder="Set Alert Here" aria-label="StartingValue" value={alertV} onChange={(e)=> setAlertV(e.target.value)}></input> 
        <input type="text" className="form-control"  placeholder="Set Starting Value Here" aria-label="StartingValue" value={startingV} onChange={(e)=> setStratingV(Number(e.target.value))}></input> 
    </div>
    <div className="container d-flex justify-content-center p-3">
            <Button color="yellow" name="Press to set Starting Value" textcolor="black" event={()=>{clearInterval(id.current)
                clearInterval(od.current)
                setCounter(startingV)}}/>
            <Button color="pruple" name="Press to Start countdown" textcolor="black" event={()=>{clearInterval(od.current)
                clearInterval(id.current)
                countDown()}} />
    </div>
    <Footer/>
</div>)
      

}




export default Timer