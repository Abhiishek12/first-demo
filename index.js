function calculateTotal(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        // This is a great place to set a breakpoint!
        total += prices[i];
        console.log(`Added ${prices[i]}. Current total is: ${total}`);
    }
    return total;
}
const itemPrices = [15, 25, 10, 50];
console.log("Starting calculation...");
const finalAmount = calculateTotal(itemPrices);
console.log(`Calculation complete. Final Amount: ${finalAmount}`);