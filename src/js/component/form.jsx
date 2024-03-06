import React, {useState, useEffect, useRef} from "react";


const Forms =({placeHolder, val, change})=>{


    return  <div className="col">
      <input type="text" className="form-control"  placeholder={placeHolder} aria-label="StartingValue" ></input>
    </div>
  
}

export default Forms