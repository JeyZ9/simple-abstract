import { Color } from "./Color";
import { Shape } from "./Shape";

export class Rectangle extends Color implements Shape {
    private width:number;
    private height:number;
    constructor(width:number, height:number){
        super("red", false);
        this.width = width;
        this.height = height;
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
        return this.width * this.height;
    }

    getPerimeter(): number {
        return (this.width + this.height) * 2;
    }

    getDetail():string {
        return `รูปสี่เหลี่ยมผืนผ้าขนาด ${this.width} x ${this.height} ซม.`
    }
}