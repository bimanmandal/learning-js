const students = '[' +
    '{"name" : "Rohan Karmakar", "roll" : "1" , "marks": [99,95,94,93,92,91]},' +
    '{"name" : "Biki Karmakar", "roll" : "2" , "marks": [100,95,94,93,92,91]},' +
    '{"name" : "Tapas Karmakar", "roll" : "3" , "marks": [99,95,98,93,92,100]},' +
    '{"name" : "Bishal Karmakar", "roll" : "4" , "marks": [99,95,92,93,92,100]},' +
    '{"name" : "Alok Karmakar", "roll" : "5" , "marks": [100,95,94,93,92,91]}' +
    ']'

// console.log(students)
const studentDataInJson = JSON.parse(students);

let highestAvg = 0;
// // Step I using for loops
// let index;
// for(let i = 0; i < studentDataInJson.length; i++){
//     // console.log(studentDataInJson[i]["name"]);
//     // console.log(studentDataInJson[i]["marks"]);
//     const marks = studentDataInJson[i]["marks"];
//     let totalMarks = 0;
//     for (let j = 0; j < marks.length; j++) {
//         totalMarks += marks[j];
//     }
//     const avg = totalMarks / marks.length;
//     // console.log("avg " + (totalMarks / marks.length))
//     if (avg > highestAvg){
//         highestAvg = avg;
//         index = i;
//     }
// }
// console.log("Student with highest avg is " + studentDataInJson[index]["name"])

// // Step II using enhanced for loop
// let topper;
// for (let student of studentDataInJson) {
//     // console.log(student["name"]);
//     // console.log(student["marks"]);
//     let totalMarks = 0;
//     for (let mark of student["marks"]) {
//         totalMarks += mark;
//         // console.log(mark)
//     }
//     const avg = totalMarks / student["marks"].length
//     if (avg > highestAvg){
//         highestAvg = avg;
//         topper = student;
//     }
// }
// console.log("Student with highest avg is " + topper["name"]);

// Step III using operators
// studentDataInJson.forEach(student => {
//     console.log(student["name"])
// });


// [ 1 , 2, 3, 4]
// [ 2, 3, 4, 5]

// studentDataInJson.map(element => element["name"]).forEach(name => console.log(name))

// ["a b" , "c d", "e f", "g h"]
// ["a", "b", "c", "d"... "h"]
const alphabets = ["a b", "c d"];
// alphabets.flatMap(ele => ele.split(" ")).forEach(ele => console.log(ele));

[1, 2, 3, 4, 5, 6].filter(ele => ele > 3).forEach(ele => console.log(ele));

