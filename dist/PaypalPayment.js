"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalPayment = void 0;
const console_1 = require("console");
class PaypalPayment {
    constructor(phoneNumber, limit) {
        this.phoneNumber = phoneNumber;
        this.limit = limit;
    }
    // payment():void{
    //     if(phoneNumber === this.phoneNumber){
    //         this.pay(amount)
    //     }
    // }
    pay(phoneNumber, amount) {
        if (this.limit >= amount && phoneNumber === this.phoneNumber) {
            this.limit -= amount;
            (0, console_1.log)("ชำระเงินสำเร็จ!");
            return;
        }
        (0, console_1.log)("ชำระเงินไม่สำเร็จ!");
    }
}
exports.PaypalPayment = PaypalPayment;
