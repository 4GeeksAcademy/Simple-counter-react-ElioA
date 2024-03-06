import React, {useState, useEffect} from "react";




const Button=({color, name, event})=>{

    
    return   <button type="button" className="btn btn-primary btn-lg mx-3 border-0" style={{backgroundColor: color}} onClick={event}>{name}</button>


}

export default Button