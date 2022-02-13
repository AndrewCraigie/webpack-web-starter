import React, {useState} from "react";
import SketchComponent from "./sketchPageComponent/SketchComponent";

const SketchPageTemplate = () => {

    const defaultDebugObject = {
        sketchFramerate: '',
        sketchDisplayDensity: 0,
        sketchPixelDensity: 0
    }

    const [debugObject, setDebugObject] = useState(defaultDebugObject)
    const [showFramerate, setShowFramerate] = useState(true);
    const [showDebugInfo, setShowDebugInfo] = useState(true);
    // Generated State assignments

    const sketchName = 'Sketch Template';
    const sketchWidth = 800;
    const sketchHeight = 600;

    // Generated handleDispatch
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
            <SketchComponent
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

export default SketchPageTemplate;
