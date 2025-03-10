import { log } from "console";
import { Device } from "./Device";

export class Radio implements Device {
    turnOn(): void {
        log("เปิดวิทยุ");
    }
    turnOff(): void {
        log("ปิดวิทยุ");
    }
}