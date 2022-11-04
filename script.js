// https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-foreach-loops

/*
const arrayOfGrocery = [];
var clickCount = 0;


document.getElementById("submitButton").onclick = function() {
    
        var groceryListInput = document.getElementById("inputFieldGrocery").value;           //groceryListInput = retrieving input field value
        var groceryListInputClear = document.getElementById("inputFieldGrocery").value = ""; //groceryListInputClear = setting input field value to 
                                                                                             //                        blank after pressing submit button

            arrayOfGrocery.push(groceryListInput); //insert input field value into the array
        
            groceryListInputClear;  //clears input field value to blank
            
            document.getElementById("groceryItem"+String(clickCount)).innerHTML = arrayOfGrocery[clickCount]; 
            clickCount++; //counts number of times button clicks. Connected with "groceryList[n] and arrayOfGrocery[n]"

            if(clickCount===4){
                fullList();
            }
  
};

//if list reaches maximum available inputs fullList() function will be called
function fullList() {
    alert("You have reached maximum number of grocery items")
    document.getElementById("submitButton").style.display = "none";
    groceryListInput = document.getElementById("inputFieldGrocery").style.display = "none";
    groceryListInput = document.getElementById("inputFieldGroceryLabel").innerHTML = "Grocery List:"
};
*/

/*
//7
console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');
*/

/*
console.log(date.getDay()) // gives output of 4 as Thursday (0-6)
console.log(date.getMonth()); //gives output of 10 as Novemebr (0-11)
console.log(year);
*/


/*
//8
let number = Math.round(Math.random()*2)+1;
console.log(number)

var count = 1;

document.getElementById("submitButton").onclick = function() {
   var guess = document.getElementById("inputFieldGrocery").value;
       guess = Number(guess);

       if(guess === number) {
        console.log("yay");
        console.log("your attempts "+count);
       }
       else {
        console.log("nah");
        console.log("your attempts "+count++);
       }
}

*/

/*
//9
const date = new Date(2022,11,25);
const date2 = new Date(2022,10,4);

let day = date.getDate();
let day2 = date2.getDate();

let month = date.getMonth();
let month2 = date2.getMonth();

let year = date.getFullYear();
let year2 = date2.getFullYear();

console.log((year - year2)," ", (month - month2), " ", (day - day2));

*/
/*
//12
console.log(document.URL);
*/

/*
//14
document.getElementById("submitButton").onclick = function(){
   var filename = document.getElementById("inputFieldGrocery").value;
    console.log(filename);
   filename = filename.split(".").pop();
   console.log(filename)
}
*/


/*
//21

//Write a JavaScript program to create
// a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.

document.getElementById("submitButton").onclick = function(){
   var v = document.getElementById("inputFieldGrocery").value;


   if(v.substring(0,2)==="Py"){
    console.log("ok");
   }
   else{
    console.log("Py"+v);
   }
}

checker("psSfs");

 function checker(str) {
 if(str.substring(0,2) === "Py"){
        console.log("yay");
    }
else{
    console.log("Py"+str);
} 
 }

 */


/*
 //22
var str = "avs";

let b = str.charAt(2);

let a = str.replace(b,"");
console.log(a);

let c = remover("buggy",4)
console.log(c);

function remover(str,char){
    
    let position = str.charAt(char);

    let detect = str.replace(position,"");

   return console.log(detect);
}
*/


/*
//23

// new string

changer("happy");
// need to change first and last characters' positions 

function changer(str) {
// records first and last character of string
    let first = str.substring(0,1);
    let secon = str.substring(str.length-1);

// removes first character from string
    let positionFirst = str.charAt(0);
    let detect   = str.replace(positionFirst, "");
    str = detect;
//removes last character from string
    let positionLast = str.charAt(str.length-1);
    let detect2      = str.replace(positionLast, "");
    console.log(detect2)
// removes first and last character from string
    str = detect;
    str = detect2;

//makes up as one string
    str = secon + str + first;

//return of final result
    return console.log(str);

}

*/

