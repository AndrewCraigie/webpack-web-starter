import p5 from 'p5';

export default class Mover {

    pos = null;

    constructor(pos) {
        this.pos = new p5.Vector(0, 0, 0);
        this.pos.set(pos);
    }

    draw(p) {
        p.circle(this.pos.x, this.pos.y, 30);
    }

    setPos(pos) {
        this.pos.set(pos);
    }

}
