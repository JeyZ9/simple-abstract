import { log } from "console";
import { Device } from "./Device";

export class TV implements Device {
    turnOn(): void {
        log("เปิดใช้งาน")
    }
    turnOff(): void {
        log("ปิดใช้งาน")
    }
}