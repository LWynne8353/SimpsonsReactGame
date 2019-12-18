import React from "react";
import "./style.css";


function SimpsonsCard(props) {
    return (
        <h5><div className="col s3" >
            <div className="card" onClick={() => { props.randomize(props.id)}}>
                <img alt={props.image} src={props.image} className="img-container" />
            </div>
        </div>
        </h5>
    )

}
export default SimpsonsCard;