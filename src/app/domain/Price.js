export default function buildMakePrice () {
    return function makePrice ({
        currency,
        amount
    } = {}) {
      if (!currency) {
        throw new Error('Price must have a currency.');
      }
      if (!amount) {
        throw new Error('Price must contain an amount.');
      }
  
      return Object.freeze({
        currency,
        amount,
        decimals: amount.countDecimals()
      });
    }
}

Number.prototype.countDecimals = function () {
  if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
  return this.toString().split(".")[1].length || 0; 
}