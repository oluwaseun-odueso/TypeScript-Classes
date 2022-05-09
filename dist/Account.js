"use strict";
// Create an account class
class Account {
    constructor(id = 0, balance = 100, annualInterestRate = 0) {
        this.id = id;
        this.balance = balance;
        this.annualInterestRate = annualInterestRate;
    }
    // To get id 
    get Id() {
        return this.id;
    }
    // To get balance 
    get Balance() {
        return this.balance;
    }
    // To get annual interest rate
    get AnnualInterestRate() {
        return this.annualInterestRate;
    }
    // To get monthly interest rate
    get monthlyInterestRate() {
        return ((this.annualInterestRate / 100) / 12);
    }
    // To get monthly interest 
    get monthlyInterest() {
        return (this.balance * this.monthlyInterestRate);
    }
    // To set id
    set Id(id) {
        this.id = id;
    }
    // Set balance
    set Balance(balance) {
        this.balance = balance;
    }
    // Set annual interest rate
    set AnnualInterestRate(annualInterestRate) {
        this.annualInterestRate = annualInterestRate;
    }
    // To get balance after withdrawal
    withdraw(amount) {
        this.balance = this.balance - amount;
        return this.balance;
    }
    // To get balance after deposit
    deposit(amount) {
        this.balance = this.balance + amount;
        return this.balance;
    }
}
;
// Write a main program
const user = new Account(1122, 20000, 4.5);
user.withdraw(2500);
user.deposit(3000);
console.log("The id is", user.id + ',', "the balance is", user.balance + ',', "monthly interest rate is", user.monthlyInterestRate, "and the monthly interest is", user.monthlyInterest);
