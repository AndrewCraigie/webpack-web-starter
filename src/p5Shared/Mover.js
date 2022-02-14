import p5 from 'p5';

export default class Mover {

    noseAngle = 5.23598;
    halfNoseAngle = this.noseAngle / 2;

    constructor(x = 0, y = 0, z = 0, r = 30) {
        this.pos = new p5.Vector(x, y, z);
        this.dir = 0; // Angle in Radians
        this.r = r;

        this.vel = new p5.Vector(0, 0, 0);
        this.acc = new p5.Vector(0, 0, 0);

        console.log(`
          Mover:
          pos: ${this.pos}
          dir: ${this.dir}
          vel: ${this.vel}
        `);

    }

    randIntInc(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    setPosXYZ(x, y, z= 0 ){
        this.pos.set(x, y, z);
    }

    setPosVec(pos){
        this.pos.set(pos.x, pos.y, pos.z);
    }

    setDir(dirAngRad) {
        this.dir = dirAngRad;
    }

    dirAngle() {
        return this.dir;
    }

    setVel(vel) {
        this.vel.set(vel);
    }

    setAcc(acc) {
        this.acc.set(acc);
    }

    // Return a normalized vector from direction angle
    dirVector() {
        return p5.Vector.fromAngle(this.dir);
    }

    update(){

        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
        this.dir = p5.Vector.normalize(this.vel).heading();

    }

    show(s){

        const cAngPlus = this.dir + this.halfNoseAngle;
        const cAngMinus = this.dir - this.halfNoseAngle;

        const scaledDir = p5.Vector.add(this.pos, p5.Vector.mult(this.dirVector(), this.r / 2));
        // console.log(scaledDir);

        const line1 = p5.Vector.add(this.pos, p5.Vector.mult(this.dirVector().setHeading(cAngPlus), this.r / 2));
        const line2 = p5.Vector.add(this.pos, p5.Vector.mult(this.dirVector().setHeading(cAngMinus), this.r / 2));

        s.strokeWeight(2);
        s.stroke(s.color(230, 230, 250));
        s.fill('rgba(0, 0, 0, 0.0)');
        s.triangle(scaledDir.x, scaledDir.y, line1.x, line1.y, line2.x, line2.y);

        s.stroke(s.color(0, 0, 0));
        s.strokeWeight(1);
    }

    posToString() {
        return `Mover pos: ${this.pos.toString()}`;
    }

    dirToString() {
        return `Mover dir: ${this.dir.toString()}`;
    }

}
