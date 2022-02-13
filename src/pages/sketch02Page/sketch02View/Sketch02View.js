import React  from "react";

import { generate } from 'shortid'
import p5WrapperGenerator from '../../../components/P5Wrapper/P5WrapperGenerator'

import sketchLocalState from "../sketches/sketch-local-state";

const P5Wrapper = p5WrapperGenerator(generate());

const Sketch02View = (props) => {

    return (
        <div>
            <P5Wrapper
                dispatch={props.dispatch}
                sketch={sketchLocalState}
                state={{
                    radius: props.radius,
                    showFramerate: props.showFramerate
                }}
            />
        </div>
    )

};

export default Sketch02View;
