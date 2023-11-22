// Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89,  B
// 60-69,  C
// 50-59,  D
// 0-49,   F

let Score = prompt("Enter Score");
if(Score >= 90 && Score <= 100)
{
    grade = "A";
} else if(Score >= 70 && Score <= 89)
{
    grade = "B";
}else if(Score >= 60 && Score <= 69)
{
    grade = "C";
}else if(Score >= 50 && Score <= 59)
{
    grade = "D";
}else if(Score >= 0 && Score <= 49)
{
    grade = "F";
}

console.log("According to your Score, Your grade is:", grade);
