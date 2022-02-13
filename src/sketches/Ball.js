
export default class Ball {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(p) {
        p.circle(this.x, this.y, 20);
    }

}
