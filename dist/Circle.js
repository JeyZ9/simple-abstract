"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Color_1 = require("./Color");
class Circle extends Color_1.Color {
    constructor(radius) {
        super("red", false);
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    isFilled() {
        return this.filled;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * (Math.PI * this.radius);
    }
    getDetail() {
        return `รูปวงกลมรัศมียาว ${this.radius} ซม.`;
    }
}
exports.Circle = Circle;
