let marks_1 = parseInt(prompt("Enter marks of Bangla : "));
let marks_2 = parseInt(prompt("Enter marks of English : "));
let marks_3 = parseInt(prompt("Enter marks of Math : "));
let marks_4 = parseInt(prompt("Enter marks of Science : "));

if (marks_1 < 40 || marks_2 < 40 || marks_3 < 40 || marks_4 < 40) {
    console.log("Failed!");
} 

else {
    total_marks = marks_1 + marks_2 + marks_3 + marks_4;
    avg_marks = parseFloat(total_marks / 4);

    if (avg_marks >= 40 && avg_marks < 50) {
        console.log("C Grade");
    } 
    else if (avg_marks >= 50 && avg_marks < 60) {
        console.log("B Grade");
    } 
    else if (avg_marks >= 60 && avg_marks < 69) {
        console.log("A- Grade");
    } 
    else if (avg_marks >= 70 && avg_marks < 80) {
        console.log("A Grade");
    } 
    else if (avg_marks >= 80 && avg_marks <= 100) {
        console.log("A+ Grade");
    } 
    else {
        console.log("Invalid input!");
    }
}
