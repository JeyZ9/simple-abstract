// import { Employee } from "./Employee";

import { log } from "console";
import { FullTimeEmployee } from "./FullTimeEmployee";
import { PartTimeEmployee } from "./PartTimeEmployee";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";
import { Dog } from "./Dog";
import { Cat } from "./Cat";
import { Payment } from './Payment';
import { PaypalPayment } from "./PaypalPayment";
import { CreditCardPayment } from "./CreditCardPayment";
import { Flyable } from './Flyable';
import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";

// const employee1 = new Employee("wisarut", 25000);

const emp1 = new FullTimeEmployee("Wisarut", 25000);
const emp2 = new PartTimeEmployee("Boonruksa", 15000);

log(emp1.getDetails());
log("Full Time Bonus: ", emp1.calculateBonus(), "บาท");
log(emp2.getDetails());
log("Part Time Bonus: ", emp2.calculateBonus(), "บาท");

log("###############################################");

const rec1 = new Rectangle(10, 20);
log(rec1.getDetail());
log("พื้นที่:", rec1.getArea(), "ตร.ซม.");
log("เส้นรอบวง:", rec1.getPerimeter(), "ซม.");
rec1.setColor("blue");
log(rec1.getColor());
log(rec1.isFilled());


log("###############################################");

const cir1 = new Circle(10);
log("พื้นที่:", cir1.getArea().toFixed(2), "ตร.ซม.");
log("เส้นรอบวง:", cir1.getPerimeter().toFixed(2), "ซม.")

log("###############################################");

const dog = new Dog("บีแอล");
log("หมาของฉันชื่อ:", dog.getName());
dog.makeSound();

const cat = new Cat("เจเจ");
log("แมวของฉันชื่อ:", cat.getName());
cat.makeSound();

log("###############################################");
const pay1 = new PaypalPayment("0656683656", 15000);
pay1.pay("0656683656", 120);
const cpay = new CreditCardPayment("2345679", 15000);
cpay.pay("2345679", 120);

log("###############################################");
const toyota = new Car("Toyota", 4, 220);
toyota.fly();

const wave = new Motorcycle("Honda", 2, 125);
wave.chargeBattery();