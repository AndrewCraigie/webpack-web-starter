import React from "react";

import { generate } from 'shortid'
import p5WrapperGenerator from "../../../components/P5Wrapper/P5WrapperGenerator";

// Generated Sketch
import sketchTemplate from '../sketches/SketchTemplate';

// Generated P5Wrapper
const SketchP5Wrapper = p5WrapperGenerator(generate(),800, 600);

const SketchComponent = (props) => {

    return (
        <SketchP5Wrapper
            dispatch={props.dispatch}
            sketch={sketchTemplate}
            state={{
                sketchName: props.sketchName,
                sketchWidth: props.sketchWidth,
                sketchHeight: props.sketchHeight,
                showFramerate: props.showFramerate
            }}
        />
    )

}

export default SketchComponent;
