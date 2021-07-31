// var a = new Date();
// console.log(a);
// var b = a.toString();
// var c = b.slice(0,3);
// console.log(b);
// console.log(c);
// a.getDay();
// console.log(a);
// var dob = new Date("Dec 28,1999");
// var dobmili = dob.getMilliseconds();
// console.log(dobmili);
// function wishes(){
//     alert("GOOD LUCK!");
// }
// //wishes();
// for(var i =0; i<6; i++){
//     wishes();
// }

 
// var z = new Date();
// console.log(z.getHours());
// // var z = 16;
//  function good(a){
//         alert(a);
//     }
//   if (z > 12 && z < 17){
//     good("GOOD NOON!")
//   }
//   else{
//      good("HELLO!")
//   }
// function add(a,b,c){
//     var z = (a+b+c);
//     return z;
// }
// var h = add(4,7,8);
// console.log(h);
// function add(a,b,c){
//     var f = 9;
//     var z = (a+b+c);
//     return z;
// }
// var h = add(4,7,8);
// console.log(f);
// var j = "FIZA"; //local scope and global scope concept
// function add(a,b,c){
//     alert(j);
//     var z = (a+b+c);
//     return z;
// }
// var h = add(4,7,8);
// alert(h);
// console.log("Hello");
// function first (){
//     alert("Hello world!..");
// }
// console.log("World")
// first();
// function ADD (a,b)  //<---parameters
// {
//     alert(a+b);

// }
// ADD(2,5)    //<---arguments
// var a = "Ghous";
// function foo(){
//     a = "Ahmad";

// }
// foo();
// console.log(a);
// var a = "Ghous";
// function foo(){
//     a = "Ahmad";

// }

// console.log(a)
// function cal (num1,op,num2){
//     if(op === "+"){
//         return num1 + num2;
//     }
//     else if(op === "-"){
//         return num1 - num2;
//     }
//     else if(op === "*"){
//         return num1 * num2;
//     }
//     else{
//         return "'invalid OP!"
//     }
// }

// var res = cal(7,"*", 6 );
// console.log(res);
// function bee(a,b){
//     return a + b;
// }
// console.log(bee(1));    // 1 + undefined==> NaN
// function bee(a,b = 3) // default parameter
// {
//     return a + b;
// }
// console.log(bee(1));
// function bee(a,b=3){
//     return a + b;
// }
// console.log(bee(1,5));
// function bee(){
   
// }
// console.log(bee(1,5));  //undefined
var name = prompt("Enter Name");
switch (name){
    case "Ghous":
        alert("Hello Ghous");
        break;
    case "Basit":
        alert("Hello Basit");
        break;
    case "Ali":
        alert("Hello Ali");
        break;
        default:
            alert("Hy  " + name);
}













