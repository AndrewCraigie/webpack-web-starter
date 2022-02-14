
import React from 'react';

import { generate } from 'shortid';
import p5WrapperGenerator from "../../components/P5Wrapper/P5WrapperGenerator";

import moverSandboxSketch from "./moverSandboxSketch";

const MoverSandboxP5Wrapper = p5WrapperGenerator(generate(), 1000, 800);

const MoverSandboxComponent = (props) => {

    return (
        <MoverSandboxP5Wrapper
            dispatch={props.dispatch}
            sketch={moverSandboxSketch}
            state={{
                sketchName: props.sketchName,
                sketchWidth: props.sketchWidth,
                sketchHeight: props.sketchHeight,
                showFramerate: props.showFramerate
            }}
        />
    )

};

export default MoverSandboxComponent;
