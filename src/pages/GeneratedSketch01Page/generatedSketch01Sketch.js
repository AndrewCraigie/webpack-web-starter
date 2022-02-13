
const generatedSketch01Sketch = (s) => {

    s.state = {}
    s.dispatch = () => { }

    s.setup = () => {
        s.createCanvas(800, 600)

        s.dispatch({
            type: 'OUTPUT_DISPLAY_SKETCH_DENSITY',
            payload: {
                sketchDisplayDensity: s.displayDensity(),
                sketchPixelDensity: s.pixelDensity()
            }
        })

    }

    s.draw = () => {

        s.background(127);



        // Debugging
        if (s.state.showFramerate) {
            s.dispatch({
                type: 'OUTPUT_FRAMERATE',
                payload: {
                    sketchFramerate: s.frameRate()
                },
            });
        }

    }

};

export default generatedSketch01Sketch;
