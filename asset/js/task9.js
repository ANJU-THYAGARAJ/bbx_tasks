// Customer Object
var customer = {
    name: "Anju",
    mobile: "9876543210",
    address: "Trivandrum, Kerala",
    payment: "UPI",
    membership: "Gold"
};

// Food Array
var foodItems = [
    "Pizza",
    "Burger",
    "Biryani",
    "Pasta",
    "French Fries",
    "Ice Cream"
];

// Function with Parameter
function welcome(name){
    return "Welcome " + name;
}

// Display Customer Details
function displayCustomer(){

    var text = "";

    text += "Customer Details\n";
    text += "-----------------------------\n";
    text += "Name : " + customer.name + "\n";
    text += "Mobile : " + customer.mobile + "\n";
    text += "Address : " + customer.address + "\n";
    text += "Payment : " + customer.payment + "\n";
    text += "Membership : " + customer.membership + "\n\n";

    return text;
}

// Display Food Items
function displayFood(){

    var text = "";

    text += "Food Items\n";
    text += "-----------------------------\n";
    text += foodItems.join(", ") + "\n\n";

    return text;
}

// Return Value Function
function totalFoodItems(){
    return foodItems.length;
}

// Add Food
function addFood(item){
    foodItems.push(item);
}

// Remove Last Food
function removeFood(){
    foodItems.pop();
}

// Search Food
function searchFood(item){
    return foodItems.includes(item);
}

// Sort Food
function sortFood(){
    foodItems.sort();
    return foodItems;
}

// Reverse Food
function reverseFood(){
    foodItems.reverse();
    return foodItems;
}

// Join Food
function joinFood(){
    return foodItems.join(" | ");
}

// Function Expression
var deliveryStatus = function(){
    return "Your Order is Out for Delivery 🚚";
};

// Arrow Function
var deliveryTime = () => {
    return "Estimated Delivery Time : 30 Minutes";
};

// Main Function
function runProgram(){

    var result = "";

    result += welcome(customer.name) + "\n\n";

    result += displayCustomer();

    result += displayFood();

    result += "Total Food Items : " + totalFoodItems() + "\n\n";

    // push()
    addFood("Momos");

    result += "Updated Food List (After Push)\n";
    result += foodItems.join(", ") + "\n\n";

    // pop()
    removeFood();

    result += "After Pop()\n";
    result += foodItems.join(", ") + "\n\n";

    // includes()
    result += "Search Result (Pizza): ";

    if(searchFood("Pizza")){
        result += "Available\n\n";
    }else{
        result += "Not Available\n\n";
    }

    // sort()
    result += "Sorted Food List\n";
    result += sortFood().join(", ") + "\n\n";

    // reverse()
    result += "Reversed Food List\n";
    result += reverseFood().join(", ") + "\n\n";

    // join()
    result += "Joined Food List\n";
    result += joinFood() + "\n\n";

    // Function Expression
    result += "Delivery Status\n";
    result += deliveryStatus() + "\n\n";

    // Arrow Function
    result += deliveryTime();

    document.getElementById("output").innerText = result;

    console.clear();
    console.log(result);
}