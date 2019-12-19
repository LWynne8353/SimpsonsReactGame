import React from 'react';
import "./style.css";

function Counter(props) {
    return <h1 className="Counter">{props.children}</h1>;
}

export default Counter;