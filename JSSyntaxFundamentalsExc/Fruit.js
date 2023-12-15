function calculatePricePerKG(fruit, weight, price){
    const gramsToKilos = weight / 1000;
    const sum = gramsToKilos * price;
    console.log(`I need $${sum.toFixed(2)} to buy ${gramsToKilos.toFixed(2)} kilograms ${fruit}.`);
}
calculatePricePerKG('orange', 2500, 1.80);