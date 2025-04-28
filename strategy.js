class TaxStrategy {
    calculateTax(income) {
        throw new Error('calculateTax method must be implemented');
    }
}
class USATaxStrategy extends TaxStrategy {
    calculateTax(income) {
        return income * 0.3; 
    }
}

class CanadaTaxStrategy extends TaxStrategy {
    calculateTax(income) {
        return income * 0.25;
    }
}
class TaxCalculator {
    constructor(taxStrategy) {
        this.taxStrategy = taxStrategy;  
    }

    setStrategy(taxStrategy) {
        this.taxStrategy = taxStrategy;  
    }

    calculate(income) {
        return this.taxStrategy.calculateTax(income);
    }
}
const usaTaxCalculator = new TaxCalculator(new USATaxStrategy());
console.log(usaTaxCalculator.calculate(10000)); 
usaTaxCalculator.setStrategy(new CanadaTaxStrategy());
console.log(usaTaxCalculator.calculate(10000)); 

