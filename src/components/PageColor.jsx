import React from "react";
import "../App.css";
import { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";

const PageColor = (backgroundColor, setBackgroundColor) => {
    const color = ["#0C6980", "#00A8A8", "#2EB5E0", "#4C5270"]
    console.log(backgroundColor)
    
    /* useEffect(() => {
        setBackgroundColor(backgroundColor);
      }, []); */

    const circles = [{},{},{},{}];
    return(
        <div className="color-circles component-frame" >
            {circles.map((item, i) => (
                <Tooltip title="Try this color">
                    <button 
                        style={{ backgroundColor: `${color[i]}` }}
                        onClick={() => {
                        setBackgroundColor(`${color[i]}`);
                     }}>
                    </button>
                </Tooltip>
            ))}
            
            
            
            {/* <button style={{ backgroundColor: `${color[1]}` }}></button>
            <button style={{ backgroundColor: `${color[2]}` }}></button>
            <button style={{ backgroundColor: `${color[3]}` }}></button> */}
        </div>
    )
}

export default PageColor;