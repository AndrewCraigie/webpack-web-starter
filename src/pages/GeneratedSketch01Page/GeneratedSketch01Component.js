import React from 'react';

import {generate} from 'shortid';
import p5WrapperGenerator from "../../components/P5Wrapper/P5WrapperGenerator";

import generatedSketch01Sketch from "./generatedSketch01Sketch";

const GeneratedSketch01P5Wrapper = p5WrapperGenerator(generate(), 800, 600);

console.log(generatedSketch01Sketch);

const GeneratedSketch01Component = (props) => {

    return (
        <div>
            <GeneratedSketch01P5Wrapper
                dispatch={props.dispatch}
                sketch={generatedSketch01Sketch}
                state={{
                    sketchName: props.sketchName,
                    sketchWidth: props.sketchWidth,
                    sketchHeight: props.sketchHeight,
                    showFramerate: props.showFramerate
                }}
            />
        </div>
    )

};

export default GeneratedSketch01Component;
