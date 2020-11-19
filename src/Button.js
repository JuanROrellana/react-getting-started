import React from 'react';

function Button(props){

    const handleClick = () => props.onClickFunction(props.increment);

    return <button className="btn btn-primary" onClick={handleClick}>
        + {props.increment}
    </button>;
}

export default Button