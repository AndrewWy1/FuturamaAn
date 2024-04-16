import React from "react";
import star from "./images/StarAnimate.png";
import rocket from "./images/Rocket.png";
import './RightColumn.css';

class RightColumn extends React.Component{
    render(){
        return  <div className="star">
            <img  src={star}></img>
            <img  src={rocket}></img>
        </div>
        
    }
}

export default RightColumn;