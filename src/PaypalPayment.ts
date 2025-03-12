import { log } from "console";
import { Payment } from "./Payment";

export class PaypalPayment implements Payment {
    private phoneNumber:string;
    private limit:number;
    constructor(phoneNumber:string, limit:number){
        this.phoneNumber = phoneNumber;
        this.limit = limit;
    }

    // payment():void{
    //     if(phoneNumber === this.phoneNumber){
    //         this.pay(amount)
    //     }
    // }

    pay(phoneNumber:string, amount:number): void {
        if(this.limit >= amount && phoneNumber === this.phoneNumber){
            this.limit -= amount;
            log("ชำระเงินสำเร็จ!");
            return;
        }
        log("ชำระเงินไม่สำเร็จ!");
    }
}