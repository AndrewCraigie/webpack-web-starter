/// <reference path="../../types/p5.d.ts" />

import p5 from 'p5';

import Mover from "../../p5Shared/Mover";

const moverSandboxSketch = (s) => {

    s.state = {}
    s.dispatch = () => { }

    let mover;
    let mouseVec;

    s.setup = () => {
        s.createCanvas(1000, 800)

        s.dispatch({
            type: 'OUTPUT_DISPLAY_SKETCH_DENSITY',
            payload: {
                sketchDisplayDensity: s.displayDensity(),
                sketchPixelDensity: s.pixelDensity()
            }
        })

        mover = new Mover(200, 100, 0, 50);

        const vel = p5.Vector.random2D();
        vel.mult(s.random(5));
        mover.setVel(vel);



    }

    s.draw = () => {

        s.background(127);


        const mouse = s.createVector(s.mouseX, s.mouseY, 0);
        const newAcc = p5.Vector.sub(mouse, mover.pos);
        newAcc.setMag(1);

        mover.setAcc(newAcc);


        mover.update();
        mover.show(s);


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

export default moverSandboxSketch;
