import React from "react";
import "../App.css";

const PageColor = (backgroundColor, setBackgroundColor) => {
    const color = ["#0C6980", "#00A8A8", "#2EB5E0", "#4C5270"]


    return(
        <div className="color-circles component-frame" >
            <button 
                style={{ backgroundColor: `${color[0]}` }}
                    onClick={() => {
                        //console.log(color[0])
                        setBackgroundColor(`${color[0]}`);
                        
                     }}>

            </button>
            <button style={{ backgroundColor: `${color[1]}` }}></button>
            <button style={{ backgroundColor: `${color[2]}` }}></button>
            <button style={{ backgroundColor: `${color[3]}` }}></button>
        </div>
    )
}

export default PageColor;