
import React, { useState } from 'react';
import MoverSandboxComponent from './MoverSandboxComponent';

const MoverSandboxPage = () => {

    const defaultDebugObject = {
        sketchFramerate: '',
        sketchDisplayDensity: 0,
        sketchPixelDensity: 0
    };

    const [debugObject, setDebugObject] = useState(defaultDebugObject)
    const [showFramerate, setShowFramerate] = useState(false);
    const [showDebugInfo, setShowDebugInfo] = useState(false);

    const sketchName = 'MoverSandbox';
    const sketchWidth = 1000;
    const sketchHeight = 800;

    const handleDispatch = (dispatchMessage) => {

        switch (dispatchMessage.type) {

            case 'OUTPUT_FRAMERATE':
                const {sketchFramerate} = dispatchMessage.payload;
                setDebugObject(prevState => ({
                    ...prevState,
                    sketchFramerate: Number(sketchFramerate).toFixed(2)
                }));
                break;
            case 'OUTPUT_DISPLAY_SKETCH_DENSITY':
                const {sketchDisplayDensity, sketchPixelDensity} = dispatchMessage.payload;
                setDebugObject(prevState => ({
                    ...prevState,
                    sketchDisplayDensity,
                    sketchPixelDensity
                }))
                break;

        }

    };

    return (
        <div>
            <h2>{sketchName}</h2>
            <MoverSandboxComponent
                dispatch={handleDispatch}
                sketchName={sketchName}
                sketchWidth={sketchWidth}
                sketchHeight={sketchHeight}
                showFramerate={showFramerate}
            />

            <div>

                {showFramerate &&
                    <p>Frame Rate: {debugObject.sketchFramerate}</p>
                }

                {showDebugInfo && (
                    <>
                        <p>Display Density: {debugObject.sketchDisplayDensity}</p>
                        <p>Pixel Density: {debugObject.sketchPixelDensity}</p>
                    </>
                )}

            </div>

        </div>
    )


};

export default MoverSandboxPage;
