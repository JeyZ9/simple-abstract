import { log } from "console";
import { Animal } from "./Animal";

export class Dog extends Animal {
    constructor(name:string){
        super(name, "white", "M");
    }

    makeSound(): void {
        log(`${this.name} ร้องยังไง Hong! Hong!`)
    }

    getName():string{
        return this.name;
    }

    getColor(): string {
        return this.color;
    }

    getType(): string {
        return this.type;
    }

    setName(name:string):void{
        this.name = name;
    }

    setColor(color: string): void {
        this.color = color;
    }

    setType(type: string): void {
        this.type = type;
    }
}