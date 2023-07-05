// Student Grade Calculator
function grade(){
    const marks= prompt("Enter student marks(between 0 and 100):");// prompt user to enter

const minLimit=0;
const maxLimit=100;     //marks between 0 and 1 should be entered 

console.log(marks);

if (marks>79){          //student marks grading system
    grade = "A";
} else if (marks>=60 && marks<=79){
    grade = "B";
} else if (marks>=49 && marks<=59){
    grade = "C";
}  else if (marks>=40 && marks<=49){
    grade = "D";
}   else {
    grade = "E";
}

if (marks < minLimit || marks > maxLimit){
    alert("Invalid input!Please enter a number between 0 and 100"); //prompts user to enter
} else {
    console.log(`Grade: ${grade}`);
document.write(`Grade: ${grade}`)
}
}