// for (var i = 1; i<=100; i= i +10){
//     for (var j = i; j< i+10; j++){
//         document.write(j + " ");
//     }
// document.write("<br>")
// }

// var city = prompt("Enter city name:");
// city = city.toLowerCase();
// var arr = ["karachi", "islamabad","lahore"];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] === city){
//         alert("City found");
//         break;
//     }
//     else{
//         alert("city not found");
//         break;
//     }
// // }
// //NOW CAPTILIZE YOUR ENTER CITY NAME
// var city = prompt("Enter city name:");
// //copy sting first letter:
// var fistrChar = city.slice(0,1);
// // copy string remaining chars:
// var otherChar = city.slice(1);
// otherChar = otherChar.toLowerCase();
// fistrChar = fistrChar.toUpperCase();
// //merge both cases now change value of city:
// city = fistrChar + otherChar;
// console.log(city);
// var arr = ["Karachi", "Islamabad","Lahore"];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] === city){
//         alert("City found");
//         break;
//     }
//     else{
//         alert("city not found");
//         break;
//     }
// }
//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert(" double spaces!");
//     }
// }
// var text = "The New Yorker magazine doesnt allow the phrase World War II They say it should"
// console.log(text);

// for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      console.log(text);
//      }
//  }
// console.log(text);
// var indexNum = text.indexOf('World War II');  //js is case sentive
// var firstText = text.slice(0,indexNum);
// var replacingText = "Second World War";
// var thirdText = text.slice(indexNum+12);
// console.log(indexNum);
// console.log(firstText + replacingText + thirdText);
// var text = "The new Yorker magazine doesnt allow the phrase World War II They say new it should"
// var firstNew = text.indexOf("new");
// console.log(firstNew);
// var secondNew = text.lastIndexOf("new");
// console.log(secondNew);
// var para = "The new Yorker magazine doesnt allow the phrase World War II They say new it should"
// var para1 = para.replace("World War II", "Second World War");
// console.log(para);
// console.log(para1);
// var para = "this is example, this is example, this is example";
// var para1 = para.replace("example", "text");
// console.log(para1);
// var para2 = para.replace(/example/g , "text");
// console.log(para2);
// var num = 1.5;
// var round = Math.round(num);
// console.log(round);
// var num1 = 1.4;
// var round1 = Math.round(num1);
// console.log(round1);
// var num2 = 1.6;
// var round2 = Math.round(num2);
// console.log(round2);
// var num = 1.5;
// var round = Math.ceil(num);
// console.log(round);
// var num1 = 1.4;
// var round1 = Math.ceil(num1);
// console.log(round1);
// var num2 = 1.6;
// var round2 = Math.ceil(num2);
// console.log(round2);
// var num = 1.5;
// var round = Math.floor(num);
// console.log(round);
// var num1 = 1.4;
// var round1 = Math.floor(num1);
// console.log(round1);
// var num2 = 1.6;
// var round2 = Math.floor(num2);
// console.log(round2);
//IMP GENERATE RANDOM NUMBERS
// var headsuser = prompt("Enter heads username");
// var tailsuser = prompt("Enter tails username");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
// console.log(floor);
// if (floor === 0){
//     alert("Heads  " + headsuser + "  win");
// }
// else{
//     alert("tails  " + tailsuser + "  win");
// }
//convert string into number:
var num = "10";
num = Number(num); //or num = Number("10");
console.log(num);
var num7 = "70";
num7 = parseInt(num7); //or num7 = parseInt("70");
console.log(num7);
//convert number into string:
var num = 10;
console.log(num.toString());
var nunn = 0.948827738281;
var nunn2 = 0.2342167;
var cont2 = nunn2.toFixed(3);
var cont = nunn.toFixed(3);
console.log(cont);
console.log(cont2);