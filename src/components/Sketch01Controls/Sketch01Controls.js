import React, { useContext } from 'react'

import { AppDispatchContext, AppStateContext } from '../../App/AppStateProvider/AppStateProvider'

export default function Sketch01Controls() {
    const dispatch = useContext(AppDispatchContext)
    const {
        slider,
        sketch1L,
        sketch1R,
        sketch2,
        sketchAudio,
        bgndColor,
        looping
    } = useContext(AppStateContext)

    return (
        <div
            className="section"
            style={{ background: bgndColor }}
        >
            <h5>Section #1</h5>

            <br />
            <div className="inputs-wrapper">
                <button
                    type="button"
                    onClick={() => dispatch({
                        type: 'TOGGLE_SKETCH',
                        payload: {
                            key: 'sketch1L',
                            value: !sketch1L,
                        },
                    })}
                >
                    Toggle Sketch 1L
                </button>
                <button
                    type="button"
                    onClick={() => dispatch({
                        type: 'TOGGLE_SKETCH',
                        payload: {
                            key: 'sketch1R',
                            value: !sketch1R,
                        },
                    })}
                >
                    Toggle Sketch 1R
                </button>

                <br/>
                <button
                type="button"
                onClick={() => dispatch({
                    type: 'STOP_START',
                    payload: {
                        key: 'looping',
                        value: !looping
                    }
                })}
                >
                    Start
                </button>
                {/*<br />*/}
                {/*<button*/}
                {/*    type="button"*/}
                {/*    onClick={() => dispatch({*/}
                {/*        type: 'TOGGLE_SKETCH',*/}
                {/*        payload: {*/}
                {/*            key: 'sketch2',*/}
                {/*            value: !sketch2,*/}
                {/*        },*/}
                {/*    })}*/}
                {/*>*/}
                {/*    Toggle Sketch 2*/}
                {/*</button>*/}

            </div>
            <br />
            <div className="inputs-wrapper">
                <em>{slider}</em>
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={slider}
                    className="slider"
                    onChange={event => dispatch({
                        type: 'SET_SLIDER_VALUE',
                        payload: +event.target.value,
                    })}
                />
            </div>
        </div>
    )
}
