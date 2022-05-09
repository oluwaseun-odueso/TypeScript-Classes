"use strict";
class Stock {
    constructor(symbol, name, previousPrice, currentPrice) {
        this.symbol = symbol;
        this.name = name;
        this.previousPrice = previousPrice;
        this.currentPrice = currentPrice;
    }
    get Name() {
        return this.name;
    }
    get Symbol() {
        return this.symbol;
    }
    get PreviousPrice() {
        return this.previousPrice;
    }
    get CurrentPrice() {
        return this.currentPrice;
    }
    set PreviousPrice(previousPrice) {
        this.previousPrice = previousPrice;
    }
    set CurrentPrice(currentPrice) {
        this.currentPrice = currentPrice;
    }
    getChangePercent() {
        const changePercent = ((this.previousPrice - this.currentPrice) / this.previousPrice) * 100;
        return changePercent;
    }
}
const company = new Stock('INTC', 'Intel Corporation', 20.5, 20.35);
console.log("The price change percentage is", company.getChangePercent(), "percent.");
