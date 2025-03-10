"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const console_1 = require("console");
const Animal_1 = require("./Animal");
class Cat extends Animal_1.Animal {
    constructor(name) {
        super(name, "brown", "F");
    }
    makeSound() {
        (0, console_1.log)(`${this.name} ร้องยังไง Meawwwwwwwwwwwwwwwwww!`);
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
exports.Cat = Cat;
