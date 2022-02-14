import p5 from 'p5';

import Mover from '../../p5Shared/Mover';

const generatedSketch01Sketch = (s) => {

    s.state = {}
    s.dispatch = () => { }

    let mover01;

    const movers = [];


    s.setup = () => {
        s.createCanvas(1000, 700)
        s.colorMode(s.RGB, 255, 255, 255, 1);

        s.dispatch({
            type: 'OUTPUT_DISPLAY_SKETCH_DENSITY',
            payload: {
                sketchDisplayDensity: s.displayDensity(),
                sketchPixelDensity: s.pixelDensity()
            }
        })

        mover01 = new Mover(200, 200, 0, 30);
        mover01.setVel(s.createVector(1, 1.25, 0));

        for (let i = 0; i < 400; i++) {
            const mover = new Mover(s.random(0, s.width), s.random(0, s.height), 0, 30);
            mover.setVel(s.createVector(s.random(-3, 3), s.random(-3, 3), 0));
            movers.push(mover);
        }

    }

    s.draw = () => {

        s.background(0);

        for(let mover of movers) {


            mover.update();
            mover.show(s);

            if (mover.pos.x > ( s.width + 40)) {
                mover.pos.x = (0 - 40)
                mover.pos.y = s.random(0, s.height);
            }
            if (mover.pos.x < (0 - 40)) {
                mover.pos.x = ( s.width + 40);
                mover.pos.y = s.random(0, s.height);
            }
            if (mover.pos.y > (s.height + 40)) {
                mover.pos.y = (0 - 40);
                mover.pos.x = s.random(0,  s.width);
            }
            if (mover.pos.y < (0 - 40)) {
                mover.pos.y = (s.height + 40);
                mover.pos.x = s.random(0,  s.width);
            }

        }





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
