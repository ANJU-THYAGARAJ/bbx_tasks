
alert("Welcome to Online Movie Ticket Booking");

let customerName = prompt("Enter Full Name");
let movieName = prompt("Enter Movie Name");

alert("One Ticket Costs ₹200");

let ticketCount = Number(prompt("Enter Number of Tickets"));

let seatType = prompt("Enter Seat Type (Regular / Premium / VIP)");

let bookingConfirm = confirm("Do you want to proceed with booking?");

const ticketPrice = 200;
const convenienceFee = 50;

let totalCost = 0;
let discount = 0;
let finalAmount = 0;
let averageCost = 0;
let remainder = 0;
let bookingCategory = "";
let bookingStatus = "";
let confirmationStatus = "";

if (!bookingConfirm) {

    bookingStatus = "Cancelled";
    confirmationStatus = "Booking Cancelled";

    alert("Booking Cancelled");

}
else if (ticketCount < 1) {

    bookingStatus = "Invalid";
    confirmationStatus = "Invalid Number of Tickets";

    alert("Invalid Number of Tickets");

}
else if (ticketCount > 6) {

    bookingStatus = "Rejected";
    confirmationStatus = "Maximum 6 Tickets Allowed";

    alert("Maximum 6 Tickets Allowed");

}
else {

    bookingStatus = "Booked";
    confirmationStatus = "Confirmed";

   
    totalCost = ticketCount * ticketPrice;

    if (ticketCount > 3) {
        discount = totalCost * 0.10;
    }

    finalAmount = totalCost - discount + convenienceFee;

    averageCost = finalAmount / ticketCount;

    remainder = finalAmount % ticketCount;

    if (finalAmount >= 2000) {
        bookingCategory = "Premium Booking";
    }
    else if (finalAmount >= 1000) {
        bookingCategory = "Standard Booking";
    }
    else {
        bookingCategory = "Budget Booking";
    }

    switch (seatType.toLowerCase()) {

        case "regular":
            console.log("Regular Seat Selected");
            break;

        case "premium":
            console.log("Premium Seat Selected");
            break;

        case "vip":
            console.log("VIP Seat Selected");
            break;

        default:
            console.log("Invalid Seat Type");

    }

    console.log("Ticket Status");

    for (let i = 1; i <= ticketCount; i++) {

        if (i == 5) {
            break;
        }

        console.log(`Ticket ${i} Ready`);

    }

    let count = 3;

    while (count >= 1) {

        console.log(`Booking Starts in ${count}...`);

        count--;

    }

    let prepare = 1;

    do {

        console.log("Preparing Your Tickets...");

        prepare++;

    } while (prepare == 1);

    console.log("Seat Layout");

    let rows = ["A", "B", "C"];

    for (let i = 0; i < rows.length; i++) {

        let seats = "";

        for (let j = 1; j <= 5; j++) {

            if (rows[i] == "A" && j == 3) {
                continue;
            }

            seats += rows[i] + j + " ";

        }

        console.log("Row " + rows[i] + " : " + seats);

    }
  
    let output = `
        <h2>Booking Details</h2>

        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Movie Name:</strong> ${movieName}</p>
        <p><strong>Seat Type:</strong> ${seatType}</p>
        <p><strong>Number of Tickets:</strong> ${ticketCount}</p>
        <p><strong>Ticket Price:</strong> ₹${ticketPrice}</p>
        <p><strong>Total Ticket Cost:</strong> ₹${totalCost}</p>
        <p><strong>Discount:</strong> ₹${discount}</p>
        <p><strong>Convenience Fee:</strong> ₹${convenienceFee}</p>
        <p><strong>Final Amount:</strong> ₹${finalAmount}</p>
        <p><strong>Average Cost Per Ticket:</strong> ₹${averageCost.toFixed(2)}</p>
        <p><strong>Remainder:</strong> ${remainder}</p>
        <p><strong>Booking Category:</strong> ${bookingCategory}</p>
        <p><strong>Booking Status:</strong> ${bookingStatus}</p>
        <p><strong>Confirmation Status:</strong> ${confirmationStatus}</p>
    `;

    document.getElementById("output").innerHTML = output;

    console.log(output);

}