"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const console_1 = require("console");
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    constructor(name) {
        super(name, "white", "M");
    }
    makeSound() {
        (0, console_1.log)(`${this.name} ร้องยังไง Hong! Hong!`);
    }
    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
    getType() {
        return this.type;
    }
    setName(name) {
        this.name = name;
    }
    setColor(color) {
        this.color = color;
    }
    setType(type) {
        this.type = type;
    }
}
exports.Dog = Dog;
