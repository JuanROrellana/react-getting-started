import React, {useState} from 'react';

function Button(){
    const [counter, setCounter] = useState(5);

    const handleClick = () => {setCounter(counter * 2)};

    return <button className="btn btn-primary" onClick={handleClick}>
        { counter }
    </button>;
}

export default Button