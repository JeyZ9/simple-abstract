"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(brand, wheels, maxSpeed) {
        this.brand = brand;
        this.wheels = wheels;
        this.maxSpeed = maxSpeed;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getWheels() {
        return this.wheels;
    }
    setWheels(wheels) {
        this.wheels = wheels;
    }
    getMaxSpeed() {
        return this.maxSpeed;
    }
    setMaxSpeed(speed) {
        this.maxSpeed = speed;
    }
}
exports.Vehicle = Vehicle;
