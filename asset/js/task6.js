// 1. Create Variables

let studentName = "Anju";
let age = 22;
let course = "JavaScript";
let totalMarks = 420;
let attendancePercentage = 92;
let isFeePaid = true;
let phoneNumber = "9876543210";
let address = null;
let email;
let bonusMarks = 15;
let attemptCount = 1;

let output = "";

function display(label, value) {
    console.log(label + " : ", value, "| Type :", typeof value);

    output += `
    <p>
    <strong>${label}</strong> :
    ${value} <br>
    <strong>Type:</strong> ${typeof value}
    </p>`;
}


display("Student Name", studentName);
display("Age", age);
display("Course", course);
display("Total Marks", totalMarks);
display("Attendance Percentage", attendancePercentage);
display("Is Fee Paid", isFeePaid);
display("Phone Number", phoneNumber);
display("Address", address);
display("Email", email);
display("Bonus Marks", bonusMarks);
display("Attempt Count", attemptCount);


totalMarks = totalMarks + bonusMarks;
let averageMarks = totalMarks / 5;
let remainder = totalMarks % 5;
let ageSquare = age * age;

console.log("Updated Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Remainder:", remainder);
console.log("Square of Age:", ageSquare);

output += `
<hr>
<h2>Calculations</h2>

<p>Updated Total Marks : ${totalMarks}</p>
<p>Average Marks : ${averageMarks}</p>
<p>Remainder when divided by 5 : ${remainder}</p>
<p>Square of Age : ${ageSquare}</p>
`;


totalMarks += 20;
attendancePercentage -= 5;
bonusMarks *= 2;
totalMarks /= 2;
totalMarks %= 7;

console.log("Total Marks after +=20, /=2 and %=7 :", totalMarks);
console.log("Attendance after -=5 :", attendancePercentage);
console.log("Bonus Marks after *=2 :", bonusMarks);

output += `
<hr>
<h2>Assignment Operators</h2>

<p>Total Marks : ${totalMarks}</p>
<p>Attendance Percentage : ${attendancePercentage}</p>
<p>Bonus Marks : ${bonusMarks}</p>
`;


console.log(age >= 18);
console.log(totalMarks > 250);
console.log(attendancePercentage < 75);
console.log(course == "JavaScript");
console.log(course === "JavaScript");
console.log(studentName != "Admin");
console.log(studentName !== "Admin");
console.log(age < 25);
console.log(attendancePercentage <= 100);

output += `
<hr>
<h2>Comparison Operators</h2>

<p>Age >= 18 : ${age >= 18}</p>
<p>Total Marks > 250 : ${totalMarks > 250}</p>
<p>Attendance < 75 : ${attendancePercentage < 75}</p>
<p>Course == "JavaScript" : ${course == "JavaScript"}</p>
<p>Course === "JavaScript" : ${course === "JavaScript"}</p>
<p>Name != "Admin" : ${studentName != "Admin"}</p>
<p>Name !== "Admin" : ${studentName !== "Admin"}</p>
<p>Age < 25 : ${age < 25}</p>
<p>Attendance <=100 : ${attendancePercentage <= 100}</p>
`;


let examEligible =
attendancePercentage >= 75 && isFeePaid;

let certificateEligible =
totalMarks >= 250 || attendancePercentage >= 90;

let feeStatus = !isFeePaid;

console.log("Exam Eligible :", examEligible);
console.log("Certificate Eligible :", certificateEligible);
console.log("Opposite Fee Status :", feeStatus);

output += `
<hr>
<h2>Logical Operators</h2>

<p>Exam Eligible : ${examEligible}</p>
<p>Certificate Eligible : ${certificateEligible}</p>
<p>Opposite Fee Status : ${feeStatus}</p>
`;


attemptCount++;
console.log("After Increment :", attemptCount);

attemptCount--;
console.log("After Decrement :", attemptCount);

output += `
<hr>
<h2>Increment & Decrement</h2>

<p>After Increment : ${attemptCount + 1}</p>
<p>After Decrement : ${attemptCount}</p>
`;

let result =
averageMarks >= 50 ? "Pass" : "Fail";

let category =
age >= 18 ? "Adult" : "Minor";

console.log(result);
console.log(category);

output += `
<hr>
<h2>Ternary Operator</h2>

<p>Result : ${result}</p>
<p>Category : ${category}</p>
`;

document.getElementById("output").innerHTML = output;