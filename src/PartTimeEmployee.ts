import { Employee } from "./Employee";

export class PartTimeEmployee extends Employee {
    calculateBonus(): number {
        return this.salary * 0.05;
    }
}