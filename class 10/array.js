// var name = "fiza";
// var name1 = "ali";
// var name2 = "shahtaj";
// console.log(name1);
// console.log(name2)

// var students = ["fiza", "ali", "shahtaj"];
// // document.write(students[0]);
// // document.write(students[1]);
// // document.write(students[2]);
// alert("welcome" + " "+ students[0]);

// var pets = [];
// pets[0] = "cat";
// pets[1] = "parrot";
// pets[2] = "rabbit";
// pets[3] = 123;

// alert("welcome " + pets[3]);
// console.log(pets);
// pets.pop(); //remove last index/element of array
// console.log(pets);
// pets.push("true"); //add value at last index of array

// console.log(pets);
// pets.push("hello", "bye");
// console.log(pets);

// var students = ["fiza", "ali", "shahtaj"];
//  students.shift();   //remove from start
// console.log(students);
// students.unshift("Fiza","Zarnab","Danish"); //add at start of array
// console.log(students);
// var students = ["fiza", "ali", "shahtaj"];
// students.splice(1, 0 , "Ahmad");

// console.log(students);
// students.splice(2, 2 , "Shahzaib");

// console.log(students);
// students.splice(1, 0 , "Ahmad");
// console.log(students);
// students.splice(1, 2);
// console.log(students);

//slice method copy of array

var students = ["fiza", "ali", "shahtaj","Ahmad", "dua"];
var copyStu = students.slice(1,4);
console.log(students);
console.log(copyStu);