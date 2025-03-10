export abstract class Color {
    protected color:string;
    protected filled:boolean;

    constructor(color:string, filled:boolean){
        this.color = color;
        this.filled = filled;
    }

    abstract getColor():string;
    abstract setColor(color:string):void
    abstract isFilled():boolean;
    abstract setFilled(filled:boolean):void;

}