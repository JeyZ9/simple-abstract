"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartTimeEmployee = void 0;
const Employee_1 = require("./Employee");
class PartTimeEmployee extends Employee_1.Employee {
    calculateBonus() {
        return this.salary * 0.05;
    }
}
exports.PartTimeEmployee = PartTimeEmployee;
