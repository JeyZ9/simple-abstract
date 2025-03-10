import { log } from "console";
import { Payment } from "./Payment";

export class PaypalPayment implements Payment {
    private phoneNumber:string;
    private limit:number;
    constructor(phoneNumber:string, limit:number){
        this.phoneNumber = phoneNumber;
        this.limit = limit;
    }

    payment(phoneNumber:string, amount:number):void{
        if(phoneNumber === this.phoneNumber){
            this.pay(amount)
        }
    }

    pay(amount: number): void {
        if(this.limit >= amount){
            this.limit -= amount;
            log("ชำระเงินสำเร็จ!");
            return;
        }
        log("ชำระเงินไม่สำเร็จ!");
    }
}