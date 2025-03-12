export abstract class Vehicle {
    private brand:string;
    private wheels:number;
    private maxSpeed:number;

    constructor(brand:string, wheels:number, maxSpeed:number) {
        this.brand = brand;
        this.wheels = wheels;
        this.maxSpeed = maxSpeed;
    }

    getBrand():string {
        return this.brand;
    }

    setBrand(brand:string):void {
        this.brand = brand
    }

    getWheels():number {
        return this.wheels;
    }

    setWheels(wheels:number) {
        this.wheels = wheels;
    }

    getMaxSpeed():number {
        return this.maxSpeed;
    }

    setMaxSpeed(speed:number):void {
        this.maxSpeed = speed;
    }

    abstract startEngine():void;
    abstract stopEngine():void


}