import p5 from 'p5';
import Ball from "./Ball";
import Mover from "./Mover";


const sketch1 = (s) => {

    s.state = {}
    // s.dispatch = () => { }
    s.looping = true

    const width = 800;
    const height = 600;

    const TAU = s.TAU;
    let a = 0;

    s.toggleLooping = () => {

        if (s.state.looping) {
            s.loop();
        } else {

            const listen = setInterval(() => {

                if (s.state.looping) {
                    s.loop();
                    clearInterval(listen);
                }

            }, 100);

            s.noLoop();
        }

    };

    const balls = [];

    let mover;
    let t;

    s.mousePressed = () => {
        console.log('mouse pressed');
    }

    s.setup = () => {


        s.createCanvas(width, height)

        const startPos = p5.Vector(10, 300, 0);

        mover = new Mover(startPos);

        t = 0;

         console.log('::: displayDensity:', s.displayDensity())
         console.log('::: pixelDensity:', s.pixelDensity())

    }

    s.draw = () => {

        s.background(127);



        const newPos = s.createVector(t, 20, 1);
        mover.setPos(newPos.x, newPos.y, 1);
        mover.draw(s);



        if (!s.state.looping) s.toggleLooping();

        t++;

    }
}

export default sketch1;


