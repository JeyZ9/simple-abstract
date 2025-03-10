"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
const console_1 = require("console");
class CreditCardPayment {
    constructor(cardNumber, limit) {
        this.cardNumber = cardNumber;
        this.limit = limit;
    }
    payment(cardNumber, amount) {
        if (cardNumber === this.cardNumber) {
            this.pay(amount);
        }
    }
    pay(amount) {
        if (this.limit >= amount) {
            this.limit -= amount;
            (0, console_1.log)("ชำระเงินสำเร็จ!");
            return;
        }
        (0, console_1.log)("ชำระเงินไม่สำเร็จ!");
    }
    getLimit() {
        return this.limit;
    }
}
exports.CreditCardPayment = CreditCardPayment;
