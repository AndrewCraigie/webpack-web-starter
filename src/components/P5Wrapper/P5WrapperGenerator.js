import React, {memo, useEffect, useRef} from 'react'
import p5 from 'p5';
import PropTypes from 'prop-types'

import {generate} from 'shortid'

const P5WrapperGenerator = function (id = generate(), sketchWidth, sketchHeight) {

    let canvas = null
    let width = sketchWidth || 100;
    let height = sketchHeight || 100;

    function P5Wrapper({
                           sketch = () => {
                           },
                           state = {},
                           dispatch = () => {
                           }
                       }) {

        const sketchContainer = useRef(null)

        useEffect(() => {

            canvas = new p5(sketch, sketchContainer.current)
            canvas.state = state
            canvas.dispatch = dispatch

            return () => {
                canvas.remove()
            }

        }, [dispatch, sketch, state])

        return (
            <div
                ref={sketchContainer}
                id={id}
                className="sketch-wrapper"
                style={{
                    width: `${sketchWidth}px`,
                    height: `${sketchHeight}px`,
                    border: '1px solid darkgrey'
                }}
            >

            </div>
        )
    }

    P5Wrapper.propTypes = {
        state: PropTypes.object,
        dispatch: PropTypes.func,
        sketch: PropTypes.func,
    }

    P5Wrapper.defaultProps = {
        state: {},
        dispatch: () => {
        },
        sketch: () => {
        },
    }

    function wrapperPropsAreEqual(prevWrapper, nextWrapper) {
        canvas.state = {...nextWrapper.state}

        // if(prevWrapper.state.sketchName !== nextWrapper.state.sketchName) {
        //     return false;
        // }

        return true;
    }

    return memo(
        P5Wrapper,
        wrapperPropsAreEqual
        // (_, nextProps) => {
        //     canvas.state = {...nextProps.state}
        //     return true
        // }
    )

}

export default P5WrapperGenerator;
