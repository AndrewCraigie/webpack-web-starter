import React, {useState} from "react";

import Sketch02View from "./sketch02View/Sketch02View";

const Sketch02Page = () => {

    const [radius, setRadius] = useState(10);
    const [frameRate, setFramerate] = useState('');
    const [showFramerate, setShowFramerate] = useState(false);

    const handleDispatch = (payload) => {
        setFramerate(Number(payload.payload).toFixed(2));
    }

    return (
        <div>
            <h2>Sketch 2</h2>

            <Sketch02View
                dispatch={handleDispatch}
                radius={radius}
                showFramerate={showFramerate}
            />
            <button
                onClick={() => {
                    setRadius(radius + 10);
                }}
            >Increase
            </button>

            <p>{frameRate}</p>
        </div>
    )

};

export default Sketch02Page;
