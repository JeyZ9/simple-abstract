export interface Payment {
    pay(cardOrPhone:string, amount:number):void;
}