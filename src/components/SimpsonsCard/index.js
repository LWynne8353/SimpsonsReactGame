import React from "react";
import "./style.css";


function SimpsonsCard(props) {
    return (
        <div className="col s3" >
            <div className="card" onClick={props.randomize}>
                <img alt={props.image} src={props.image} className="img-container" />
            </div>
        </div>
    )

}
export default SimpsonsCard;