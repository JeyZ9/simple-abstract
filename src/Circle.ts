import { Color } from "./Color";
import { Shape } from "./Shape";

export class Circle extends Color implements Shape {
    private radius:number;
    constructor(radius:number){
        super("red", false);
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color:string): void {
        this.color = color;
    }

    setFilled(filled: boolean): void {
        this.filled = filled;
    }

    isFilled(): boolean {
        return this.filled;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter(): number {
        return 2 * (Math.PI * this.radius);
    }

    getDetail():string {
        return `รูปวงกลมรัศมียาว ${this.radius} ซม.`
    }
}