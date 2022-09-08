import React from "react";
import "../App.css";
import Tooltip from "@mui/material/Tooltip";

const PageColor = ({bgColor, setBgColor}) => {
    const color = ["#064251", "#004141", "#292c3d", "#282c34"]
        
    function handleClick(i){
        setBgColor(`${color[i]}`); 
    }
    
    const circles = [{},{},{},{}];
    return(
        <div className="color-circles" >
            {circles.map((item, i) => (
                <div key={`color-${i}`}>
                <Tooltip title="Try this color">
                    <button 
                        style={{ backgroundColor: `${color[i]}` }}
                        onClick={() => handleClick(i)} >
                    </button>
                </Tooltip>
                </div>
            ))}
   
        </div>
    )
}

export default PageColor;