import { log } from "console";
import { Electricvehicle } from "./Electricvehicle";
import { Flyable } from "./Flyable";
import { Vehicle } from "./Vehicle";

export class Car extends Vehicle implements Flyable, Electricvehicle {
    startEngine(): void {
        log("Engine Start!");
    }

    stopEngine(): void {
        log("Engine Stop");
    }

    chargeBattery(): void {
        log("Electric Car!");
    }

    fly(): void {
        log("Flying Car!")
    }
}