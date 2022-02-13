import React, { useContext } from 'react'

import { generate } from 'shortid'

import sketch1Src from '../../sketches/sketch-1'

import { AppDispatchContext, AppStateContext } from '../../App/AppStateProvider/AppStateProvider'
import p5WrapperGenerator from '../P5Wrapper/P5WrapperGenerator'

const P5Wrapper1 = p5WrapperGenerator(generate())
const P5Wrapper2 = p5WrapperGenerator(generate())

export default function Sketch01View() {

    const dispatch = useContext(AppDispatchContext)

    const {
        slider,
        sketch1L,
        sketch1R,
        looping,
    } = useContext(AppStateContext);

    return (
        <div className="section">
            <h5>Section #2</h5>
            <div className="section section-content">
                {/*{sketch1L && (*/}
                {/*    <P5Wrapper1*/}
                {/*        dispatch={dispatch}*/}
                {/*        sketch={sketch1Src}*/}
                {/*        state={{ slider: 100 - slider }}*/}
                {/*    />*/}
                {/*)}*/}
                {sketch1R && (
                    <P5Wrapper2
                        dispatch={dispatch}
                        sketch={sketch1Src}
                        state={{ slider, looping }}
                    />
                )}
            </div>
        </div>
    )
}
