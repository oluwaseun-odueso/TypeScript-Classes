class Stock {
    symbol : string
    name : string
    previousPrice : number
    currentPrice : number

    constructor (symbol : string, name : string, previousPrice : number, currentPrice : number) {
        this.symbol = symbol;
        this.name = name;
        this.previousPrice = previousPrice;
        this.currentPrice = currentPrice;
    }

    get Name () : string {
        return this.name;
    }

    get Symbol () : string {
        return this.symbol;
    }

    get PreviousPrice () : number {
        return this.previousPrice;
    }

    get CurrentPrice () : number {
        return this.currentPrice;
    }

    set PreviousPrice (previousPrice : number)  {
        this.previousPrice = previousPrice;
    }

    set CurrentPrice (currentPrice : number) {
        this.currentPrice = currentPrice;
    }

    getChangePercent () : number {
        const changePercent = ((this.previousPrice - this.currentPrice) / this.previousPrice) * 100
        return changePercent
    }
}

const company = new Stock('INTC', 'Intel Corporation', 20.5, 20.35);
console.log("The price change percentage is", company.getChangePercent(), "percent.")