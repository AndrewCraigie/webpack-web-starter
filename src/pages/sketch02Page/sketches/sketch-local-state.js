
const sketchLocalState = (s) => {

    s.state = {}
    s.dispatch = () => { }
    s.looping = true

    s.setup = () => {
        s.createCanvas(800, 600)
    }

    s.draw = () => {

        s.background(127);
        s.circle(100, 200, s.state.radius);

        if (s.state.showFramerate) {
            s.dispatch({
                type: 'SET_FRAMERATE',
                payload: s.frameRate(),
            });
        }

    }

};

export default sketchLocalState;
