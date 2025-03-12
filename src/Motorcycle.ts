import { log } from "console";
import { Electricvehicle } from "./Electricvehicle";
import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle implements Electricvehicle {
    startEngine(): void {
        log("Engine Start!");
    }

    stopEngine(): void {
        log("Engine Stop");
    }

    chargeBattery(): void {
        log("Electric Motorcycle!");
    }
}