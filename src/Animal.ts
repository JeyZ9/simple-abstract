export abstract class Animal {
    protected name:string;
    protected color:string;
    protected type:string;
    constructor(name:string, color:string, type:string){
        this.name = name;
        this.color = color;
        this.type = type;
    }
    abstract makeSound():void;
    getName():string{
        return this.name;
    }
    abstract getColor():string;
    abstract getType():string;
    abstract setName(name:string):void;
    abstract setColor(color:string):void;
    abstract setType(type:string):void;
}