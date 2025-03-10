"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, color, type) {
        this.name = name;
        this.color = color;
        this.type = type;
    }
    getName() {
        return this.name;
    }
}
exports.Animal = Animal;
