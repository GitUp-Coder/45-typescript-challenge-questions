/*Question no 44 : Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, and it should 
print a summary of the sandwich that is being ordered. Call the function three times, using a different number of 
arguments each time. */




// Define the order_sandwich function
function order_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich!");
    } else {
        console.log(`You ordered a sandwich with: ${items.join(', ')}`);
    }
    console.log(); // Add a newline for better readability
}

// Call the order_sandwich function three times with different numbers of arguments
order_sandwich("Ham", "Cheese", "Lettuce");
order_sandwich("Turkey", "Swiss");
order_sandwich();
