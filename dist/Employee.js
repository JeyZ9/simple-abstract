"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `${this.name} ได้รับเงินเดือน ${this.salary} บาท`;
    }
}
exports.Employee = Employee;
