export abstract class Employee {
    protected name:string;
    protected salary:number;
    
    constructor(name:string, salary:number){
        this.name = name;
        this.salary = salary;
    }

    abstract calculateBonus():number;

    getDetails():string {
        return `${this.name} ได้รับเงินเดือน ${this.salary} บาท`;
    }
}