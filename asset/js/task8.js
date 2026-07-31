
let employees = ["Anju", "Bilal", "Bichu", "Vindhya", "Mariya"];

document.write("<h1>Employee Directory Management System</h1>");

document.write("<h2>Employee Array Operations</h2>");

document.write("<b>Total Employees:</b> " + employees.length + "<br>");
document.write("<b>Employee List:</b> " + employees.join(", ") + "<br><br>");

employees.push("David");
document.write("<b>After Push:</b> " + employees.join(", ") + "<br>");

employees.unshift("John");
document.write("<b>After Unshift:</b> " + employees.join(", ") + "<br>");

employees.pop();
document.write("<b>After Pop:</b> " + employees.join(", ") + "<br>");

employees.shift();
document.write("<b>After Shift:</b> " + employees.join(", ") + "<br>");

document.write("<b>Index of Vindhya:</b> " + employees.indexOf("Vindhya") + "<br>");

document.write("<b>Is Bichu Available?</b> " + employees.includes("Bichu") + "<br><br>");

let departments = ["HR", "Finance", "IT"];
let combined = employees.concat(departments);

document.write("<h2>Department Operations</h2>");
document.write("<b>Departments:</b> " + departments.join(", ") + "<br>");
document.write("<b>Combined Array:</b> " + combined.join(", ") + "<br><br>");

document.write("<b>Joined:</b> " + employees.join(" | ") + "<br>");

document.write("<b>Slice (2nd to 4th):</b> " + employees.slice(1, 4).join(", ") + "<br>");

employees.splice(2, 1, "");
document.write("<b>After Splice:</b> " + employees.join(", ") + "<br>");

employees.sort();
document.write("<b>Sorted:</b> " + employees.join(", ") + "<br>");

employees.reverse();
document.write("<b>Reversed:</b> " + employees.join(", ") + "<br><br>");

let name = "   Lakshmi Venu   ";

document.write("<h2>String Operations</h2>");

document.write("<b>Original Name:</b> '" + name + "'<br>");
document.write("<b>Length:</b> " + name.length + "<br>");
document.write("<b>Uppercase:</b> " + name.toUpperCase() + "<br>");
document.write("<b>Lowercase:</b> " + name.toLowerCase() + "<br>");
document.write("<b>Trim:</b> '" + name.trim() + "'<br>");
document.write("<b>Trim Start:</b> '" + name.trimStart() + "'<br>");
document.write("<b>Trim End:</b> '" + name.trimEnd() + "'<br>");

let cleanName = name.trim();

document.write("<b>Character at Index 2:</b> " + cleanName.charAt(2) + "<br>");
document.write("<b>Last Character:</b> " + cleanName.at(-1) + "<br>");
document.write("<b>First Index of 'a':</b> " + cleanName.indexOf("a") + "<br>");
document.write("<b>Last Index of 'a':</b> " + cleanName.lastIndexOf("a") + "<br>");
document.write("<b>Contains 'ksh':</b> " + cleanName.includes("Thy") + "<br>");
document.write("<b>Starts With 'A':</b> " + cleanName.startsWith("A") + "<br>");
document.write("<b>Ends With 'j':</b> " + cleanName.endsWith("j") + "<br>");
document.write("<b>Slice (0,4):</b> " + cleanName.slice(0, 4) + "<br>");
document.write("<b>Substring (5,14):</b> " + cleanName.substring(5, 14) + "<br>");
document.write("<b>Replace First Name:</b> " + cleanName.replace("Anju", "Anitha") + "<br>");
document.write("<b>Replace All 'a' with '*':</b> " + cleanName.replaceAll("a", "*") + "<br>");
document.write("<b>Concatenate Company:</b> " + cleanName.concat(" - Blackbox") + "<br>");
document.write("<b>Split:</b> " + cleanName.split(" ") + "<br>");
document.write("<b>Repeat 3 Times:</b><br>" + cleanName.repeat(3));