// Initialize a variable to control the main loop
let quit = false;

// Initialize an empty array to store list items
let list = [];

// Main loop that runs until 'quit' is set to true
while (quit === false){
    let inputType; // Variable to store the type of user input
    console.clear(); // Clears the console screen for readability

    // Display all items in the list with their index
    for (let [index, item] of list.entries()) {
        console.log(`${index}: ${item}`);
    }

    // Prompt the user to enter a command
    let input = prompt("Please enter a command");

    // Exit the loop if user enters 'quit' or cancels the prompt
    if (input === null || input === 'quit') break;

    // Handle the 'new' command to add items to the list
    if (input === 'new') {
        inputType = 'newItem';
        while (inputType === "newItem"){
            // Prompt for a new item to be added to the list
            let item = prompt("Enter item to be added to list or press 'Cancel' to go back:");
            // Exit the inner loop if user cancels the prompt
            if (item === null){
                break;
            }
            else { 
                // Add the new item to the list
                list.push(item);
            }
        }
        
    }

    // Handle the 'delete' command to remove items from the list
    if (input === 'delete') {
        inputType = 'deleteItem';
        while (inputType === 'deleteItem') {
            // Prompt for the index of the item to be deleted
            let itemDelete = prompt("Enter the index number of the item to be deleted or press cancel to go back:");
            // Exit the inner loop if user cancels the prompt
            if (itemDelete === null) break;
            // Delete the specified item from the list
            list.splice(itemDelete, 1);
            // Clear the console and display the updated list
            console.clear();
            for (let [index, item] of list.entries()){
                console.log(`${index}: ${item}`);
            }
        }        
    }
}


