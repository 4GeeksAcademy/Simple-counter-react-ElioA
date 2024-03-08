import React, {useState, useEffect, useRef} from "react";
import Button from "./buttons";

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

    const [startingV, setStratingV]= useState("")
    const [alertV, setAlertV]=useState("")
        
    if(alertV==counter && alertV!=""){alert("we got it")}

    const [isButtonDisabled, setButtonDisabled] = useState(true);
	
    const disableButton = () => {
		setButtonDisabled(true);
		
	};

	const enableButton = () => {
		setButtonDisabled(false);
		
	};

  

  
  
console.log(counter)

return( 
<div> 
    <div className="bigCounter">
            <div className="clock"><i class="far fa-clock"></i></div>
            <div>{(Math.floor(counter/1000000)) % 10}</div>
            <div>{(Math.floor(counter/100000)) % 10}</div>
            <div>{(Math.floor(counter/10000)) % 10}</div>
            <div>{(Math.floor(counter/1000)) % 10}</div>
            <div>{(Math.floor(counter/100))% 10}</div>
            <div>{(Math.floor(counter/10)) % 10}</div>
            <div>{counter%10}</div>
    </div>
    <div className="d-flex justify-content-center p-3">
             <Button name="Stop" color="red" event={()=>{clearInterval(id.current)
                clearInterval(od.current)
                    enableButton()}}/>
		     <Button name="Start" color="green"  event={()=>{handelTime()
                    disableButton()}} disabled={isButtonDisabled}/>
		     <Button name="Reset" color="blue" event={()=>{
                    clearInterval(id.current)
                    clearInterval(od.current)
                    enableButton()
                    setCounter(0)}}/>
             
    </div>
    <div className="container d-flex justify-content-center">
        <input type="text" className="form-control"  placeholder="Set Alert Here" aria-label="StartingValue" value={alertV} onChange={(e)=> setAlertV(e.target.value)}></input> 
        <input type="text" className="form-control"  placeholder="Set Starting Value Here" aria-label="StartingValue" value={startingV} onChange={(e)=> setStratingV(Number(e.target.value))}></input> 
    </div>
    <div className="container d-flex justify-content-center p-3">
            <Button color="yellow" name="Press to set Starting Value" textcolor="black" event={()=>{clearInterval(id.current)
            clearInterval(od.current)
            setCounter(startingV)
            enableButton()}}/>
            <Button color="pruple" name="Press to Start countdown" textcolor="black" event={()=>{countDown()
                disableButton()}} disabled={isButtonDisabled}/>
    </div>
</div>)
      

}




export default Timer