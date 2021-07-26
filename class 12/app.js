//another way:
// var arr = new Array("fiza","ali","dua","mirha","ahmad")
// console.log(arr);
// var arr1 = arr.slice(1,3);
// console.log(arr1);
//FOR LOOP:
// for (var x = 0; x<5; x++){
//     alert("Hello World!")
// }

// document.write("2" + "x" + "1" + "=" + 2*1);

// for (var i = 1; i<=10; i++){
//     console.log("2" + "x" + i + "=" + 2*i);
//    document.write("2" + "x" + i + "=" + 2*i + "<br>");

// }

// var names = ["ali","dua","asad","wish"]
// var a;
// for(a=0; a<4; a++){
//     alert(names[a]);
//     document.write(names[a] + "<br>") ;
// }
// var names = ["ali","dua","asad","wish"]
// var a;
// for(a=0; a < names.length; a++){
//     alert(names[a]);
//     document.write(names[a] + "<br>") ;
// }
//FLAGSSS:
// var cites= ["Karachi", "FSD","Lahore","Peshawar"];

// for(var x = 0; x< cites.length; x++){
//     if(cites[x] === "Karachi"){
//         alert(cites[x] + " is my fav city");
//         break;
//     }
// }
// for(var i =0; i<5; i++){
//     for(var j= 0; j<3; j++){
//         document.write("Pakistan" + "<br>");
//     }
// }
// var firstNames = ["basit", "shaiz","balaj"];
// var secondNames = ["ahmad"];
// for (var i = 0; i< firstNames.length; i++){
//     for(var j = 0; j < secondNames.length; j ++){
//         console.log(firstNames[i] + " " + secondNames[j]);
//     }
// }
var word = prompt("Enter word");
var check = "";
for(var i = word.length-1; i>=0; i--){
    check += word[i];
}

if(check === word){
    console.log(word + "  is palindrome word");
}
else{
    console.log(word + "  is not palindrome word");
}
