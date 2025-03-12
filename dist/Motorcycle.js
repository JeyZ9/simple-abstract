"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorcycle = void 0;
const console_1 = require("console");
const Vehicle_1 = require("./Vehicle");
class Motorcycle extends Vehicle_1.Vehicle {
    startEngine() {
        (0, console_1.log)("Engine Start!");
    }
    stopEngine() {
        (0, console_1.log)("Engine Stop");
    }
    chargeBattery() {
        (0, console_1.log)("Electric Motorcycle!");
    }
}
exports.Motorcycle = Motorcycle;
