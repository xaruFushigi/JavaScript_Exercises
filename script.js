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


/*
let a = [120, 101];

if(a[1] < 100 && a[0] < 100) {
    console.log(`${Math.min(...a)} < ${Math.max(...a)} < ${100}`);
}

else if(a[0] > 100 && a[1] > 100) {
    console.log(`${100} < ${Math.min(...a)} < ${Math.max(...a)}`)
}

else {
    console.log(`${Math.min(...a)} < ${100} < ${Math.max(...a)}`)
};

*/


/*
//36

// Step 1 : create three integers
// Step 2 : check last digit of integers for similarity

integerCheckers(45005,105,1045);

function integerCheckers(num1, num2, num3) {
    if(num1 > 0 && num2 > 0 && num3 > 0) {

    
if(String(num1).substring(String(num1).length-1) && 
   String(num2).substring(String(num2).length-1) && 
   String(num3).substring(String(num3).length-1) ===
   String(num1).substring(String(num1).length-1)){
    console.log("identical");
    console.log(typeof(num1));

    }
else {
    console.log("not identical");
    }
}
else {
    console.log("integers are not positive")
}
}

*/


/*
//37 

// Step 1: check length of the characters for more than 3 characters
// Step 2: if length is more convert first 3 characters to lower case and others to upper case
// Step 3: if length is less than 3 characters than convert all upper case


console.log(word("heydsfdfdg"));
function word (str1) {
    if(str1.length > 3) {
      return str1.substring(0,3).toLowerCase() + str1.substring(4).toUpperCase();
    }
    else if(str1.length < 3) {
        return str1.toUpperCase();
    }
    else{
        return "This is not a word";
    }
}

*/

/*
//38

console.log(examType("finalExam", 99));

function examType(str,num) {
    if(str == "test") {
        if(num > 89) {
            return "A";
        }
        else {
            return "less than A";
        };
    }
    else if (str == "finalExam") {
        if(num => 90) {
            return "A final exam";
        }
        else {
            return "less than A in final exam"
        }
    }
    else {
        return "something went wrong";
    }   
}
*/

/*
//40
console.log(inter(9,-1));

function inter(num1, num2) {
    if(num1 == 8 || num2 == 8){
        return console.log("one of them is equal to 8");
    }
    else if ((num1 + num2) == 8) {
        return "sum is equal to 8";
    }
    else if(Math.max(num1,num2) - Math.min(num1,num2) == 8){
        return "difference is equal to 8";
    } 
    else {
        return "something is wrong";
    }
}
*/

/*
//48

// abcde
// edcba

console.log(reverser("welcome"));

function reverser (str) {
    return str.split("").reverse().join("");;
}

*/

/*
//49

const alphabet = ["A","B","C","D","E","F","G","H","I",
                  "J","K","L","M","N","O","P","Q","R",
                  "S","T","U","V","W","X","Y","Z"];



var str = "ABC";
str = str.split("");

for(let i = 0; i < str.length; i++) {
    var str2 = str.map(element => {
        if (element === alphabet[i]) {
          return str2 = alphabet[i+1];
        }
        else {
          return element;
        }
      });

      console.log(str2)
    } 
   
*/

/*
//50

var str = "Hey Baby How are You? hope you are doing fine, babe";
var str2 = str.split(" ");
console.log(capital(str2));

function capital(str2) {
    for(let i = 0, x = str2.length; i < x; i++) {
   
     str2[i] = str2[i][0].toUpperCase() + str2[i].substring(1);
    }
    return str2.join(" ");
};
*/

/*
//52

str = "Python";

str = str.split("").sort().join("");
console.log(str);

*/

/*

//53

str = "Chainsbreak management holding hanb";

let a = "a";
let b = "b";

console.log(distance(str, a, b));

function distance(str, a, b) {
   let indexOfa = str.indexOf(a);
   let indexOfb = str.indexOf(b);

   if(indexOfa === 3 && indexOfb === 3){
    let distanceIs = Math.abs(indexOfa - indexOfb);   
    return distanceIs;
   }
   else {
    return (/a...b/).test(str) || (/b...a/).test(str);
   }
   // The test() method tests for a match in a string. If it finds a match, it returns true, otherwise it returns false.
   // https://www.w3schools.com/jsref/jsref_regexp_test.asp 
}

*/

/*
//54


function cnt(str){

    return str.match(/[aehio]/g).join("").length
    
}
    console.log(cnt("baarki"))
    console.log(cnt("Javascript"))

*/

/*
//55

function checker(str) {
   let count1 = str.match(/[p]/g).join("").length
   let count2 = str.match(/[t]/g).join("").length

   if(count1 === count2) {
    return true;
   }
   else {
    return false;
   }
}
    console.log(checker("ttpp"));
*/

/*
//56

print(divider(94,6));

function divider(a, b) {

    let c = Math.floor(a/b).toString().split("");

    return  console.log(c); 
}

function print(element) {
    console.log(element);
}
*/


/*

//57

console.log(copyMaker("he",5));
function copyMaker(str, num) {
    let a = [];
    
    for(let i = 0; i < num; i++){
        a.push(str);
    }
    return a.join("");
} 

function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));

*/

/*

//58

print(coppier("helpme", 4))

function coppier(str, num){
    return str.substring(str.length-3).repeat(num);
}

function print(element) {
    console.log(element);
}

//60

print(deller("good"))

function deller (str) {    
    return str.substring(1,str.length-1);
}


//61

print(conny("hello","goodbye"))

function conny(str1, str2){
    return str1.substring(1).concat(str2.substring(1));
}


//62

print(mover("Bartty"))

function mover(str) {
    return str.substring(str.length-3) + str.substring(0,str.length-3);
}

//63
console.log(midller("Exercises"))
function midller(str){
    if(str.length % 2 === 1) {
      return str.substring(str.length/2-1, str.length/2+2);
    }
}

//64

print(plusser("hallo","hallows"))

function plusser(str1, str2){
    if(str1.length === str2.length){
        return str1.concat(str2);
    }
    else {
        if(str1.length > str2.length) {
           let str = str1.substring(0,str2.length);
           return str;
        }
        else if(str1.length < str2.length){
            let str = str2.substring(str1.length).concat(str1);
            return str;
        }
        
    }
}
//66

let array = ["New York", "California", "Texas", "Los Angeles"];
let found = array.filter(searcher);

found.forEach(print);

function searcher(str) {
                return  str == "New York";
}
*/

/*

//70

let array = [3,4,5];

console.log(rotato(array));

function rotato(array) {
    let fromIndex = array.indexOf(array[0]);
    let toIndex   = 2;
    let element   = array.splice(fromIndex, 1)[0];

    console.log(array);

    array.splice(toIndex, 0, element);
    console.log(array)
}

let arr = [1,3,3,2,2];
console.log(onner(arr));

function onner(arr) {
    arrFront = arr.join("").substring(0,1);
    arrBack  = arr.join("").substring(arr.length-1);

    if(arrFront == "1") {
        return console.log(arrFront, " at the front");
    }
    else if (arrBack == "1"){
        return console.log(arrBack, " at the back");
    }
    else{
        console.log("nope")
    }

    
}
*/

/*
//74

let array = [-20, -30, -40];
let maximus = Math.max(...array);
for (let i = 0; i < array.length; i++) {
    array[i] = maximus;
}
*/

/*

//75

let array = [3, 3, 1];
let arrai = [4, 5, 6];


print(taker(array,arrai));

function taker(array, arrai) {
    let army = [];    
    army.push(array[1], arrai[1]);
    return army;
}

function print(...element){
    console.log(element);
}

// 77

let result = /3/.test(array);


array.forEach(print);

function ff(array){
    return array.includes(1) ? true : false;
}

//79
function duplicato (array) {
    if ( array.length !== new Set(array).size) {
        return true;
    }
    else {
        return false;
    };
}

let price = [34, 23, 634, 934];
let total = price.reduce(adder);
            print(total);

function adder(total, element) {
    return total + element;
}

const percent = (x, y) => x/y*100;


let grades = [21,53,64,76,86];

grades.sort((x, y) => y-x);
grades.forEach(print);
///////////////////////////////////////////////////////////////////////////////
//shuffling numbers

let numbers = [1,2,3,4,5,6,7,8,9];

shuffle(numbers);
print(numbers); 

function shuffle (numbers){
    let currentIndex = numbers.length;
    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random()*numbers.length);
                          console.log("random number",Math.floor(Math.random()*numbers.length));
            currentIndex -= 1;

        let temp = numbers[currentIndex];
            numbers[currentIndex] = numbers[randomIndex];
            numbers[randomIndex]  = temp;
    }
    return numbers;
}

const store = new Map([
    ["t-shirt", 21],
    ["jeans"  , 30],
    ["coat"   , 40] 
]);

store.forEach((value, key) => {print(key, " ", value)});
///////////////////////////////////////////////////////////////////////////////

let shoppingCart = 0;
    shoppingCart += store.get("t-shirt");
    shoppingCart += store.get("jeans");
    print(shoppingCart);
    store.set("hat",90);
    store.delete("hat");
    print(store.has("hat"));
    print(store.size);
///////////////////////////////////////////////////////////////////////////////

const car = {
    model : "Mustang",                       //model object of car
    color : "red",                           //color object of car
    year  : "2020",                          //year object of car

    drive : function(){                      //drive() method
        print("Driving a car");
    },
    brake : function(){                     //brake() method
        print(`Did you just pushed a ${car.model} brake`);
    }
};

car.brake();

print(car.model);
car.drive();

const car2 = {
    model : "Nexus",                       //model object of car
    color : "blue",                           //color object of car
    year  : "2021",                          //year object of car

    drive : function(){                      //drive() method
        print("Driving a car");
    },
    brake : function(){                     //brake() method
        print(`Did you just pushed a ${this.model} brake`);
    }
};

car2.brake();
///////////////////////////////////////////////////////////////////////////////
class PLayer{
    score = 0;

    pause(){
        console.log("You paused the game");
    }

    exit(){
        console.log("You exited the game");
    }
}
///////////////////////////////////////////////////////////////////////////////
const player1 = new PLayer();
console.log(player1.score);
            player1.score += 1;
console.log(player1.score);
            player1.pause();
            player1.exit();

const player2 = new PLayer();
      player2.score += 1;
console.log(player2.score);   
//////////////////////////////////////////////////////////////////////////////////

*/

/*
////////////////////variables////////////////////////////////////////////////////
let button     = document.getElementById("submitButton");
let input      = document.getElementById("inputFieldGrocery");
let ul         = document.querySelector("#groceryParent");
// let li         = document.getElementsByTagName("li");
// let items      = ul.getElementsByTagName("li");

////////////////////functions////////////////////////////////////////////////////

//  measures length of input field value
function inputLength(){
    return input.value.length;
};

//  creates list element which includes value from text field
function listCreator(){
let li  = document.createElement("li");                                     //variable "li" should be local, os that after click it refreshes its value
    li.appendChild(document.createTextNode(input.value));                   //receives value from input field and creates list element
    ul.appendChild(li);                                                     //appends additional list element to ul
    input.value = "";                                                       //cleares input field
};

//  adds List element after clicking submit button
function addListAfterClick () {
    if(inputLength() > 0) {                                                 //checkes input field value for length
       listCreator();                                                       //receives function from listCreator() to append list element
       buttonNextToListElement();
       buttonRemoveFromListElement();
    };
};

//  adds List element after pressing Enter button
function addListAfterPress(event) {
    if(inputLength() > 0 && event.key === 'Enter') {                        //checkes input field value for length AND Enter key press
       listCreator();                                                       //receives function from listCreator() to append list element
       buttonNextToListElement();
       buttonRemoveFromListElement();
       event.preventDefault();                                              //prevents page from reload/refreshing
    };
}; 

//  creates button next to list element to use toggleList() function to cross over word in list element
function buttonNextToListElement() {
    var buttonOfListElement = document.createElement("input");               //variable for creating button

        buttonOfListElement.setAttribute("type" ,"button");                  //creates input type="button"
        buttonOfListElement.setAttribute("value","cross");                   //appends textOnButton to buttonOfListElement
        buttonOfListElement.setAttribute("class","cross")
        ul.appendChild(buttonOfListElement);                                 //appends buttonOfListElement to list

        buttonOfListElement.addEventListener("click",toggleList);            //calls toggle List function to cross over the list element after clicking the button
};

//  toggles the list item with ".done" class from CSS
function toggleList(){
    let li = document.querySelector("li");                                   //variable for picking list element 
        li.classList.toggle("done");                                         //selects "done" class from CSS for crossing word
};

//  deletes button next to list element to use function removeListElement() function
function buttonRemoveFromListElement() {
    let RemoveButtonOfListElement = document.createElement("input");         //variable for creating button

        RemoveButtonOfListElement.setAttribute("type" ,"button");            //creates input type="button"
        RemoveButtonOfListElement.setAttribute("value","delete");            //appends textOnButton to buttonOfListElement
        RemoveButtonOfListElement.setAttribute("class","delete");           //appends textOnButton to buttonOfListElement

        ul.appendChild(RemoveButtonOfListElement);                           //appends RemoveButtonOfListElement to list
        RemoveButtonOfListElement.addEventListener("click",removeListElement);//calls toggleList function to cross over the list element after clicking the button
};
//  removes list element after click
function removeListElement(){
    let li = document.querySelector("li");                                   //variable for picking list element 
    
        ul.removeChild(li);
        document.getElementsByClassName(".delete").style.visibility = "hidden";
        document.getElementsByClassName(".cross").style.visibility  = "hidden";
};

//  hide buttons after clicking "delete" button

////////////////////EventListeners////////////////////////////////////////////////////
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterPress);
/////////////////////////////////////////////////////////////////////////////////////

*/

/*

const submitButton   = document.getElementById("submitButton");
const myList         = document.querySelector("#groceryParent");
const input          = document.getElementById("inputFieldGrocery");



function lengthOfInputValue(){
    return input.value.length;
};

function inputValueOut(){
    
    var listItem      = document.createElement("li");
    //adding input value to the list
          listItem.addEventListener("click",toggle);
          listItem.textContent = input.value;
          myList.append(listItem);
    //adding delete button to the list
    const deleteButton = document.createElement("input");
          deleteButton.setAttribute("type", "button");
          deleteButton.setAttribute("value", "delete");
          deleteButton.setAttribute("class", "deleteBtn");
          deleteButton.addEventListener("click", delButton);  
          myList.append(deleteButton);
    //setting value of text field to blank    
          input.value = "";
    //function of delete button to remove "li" and make button hiddne
          function delButton (){    //nested function    
            listItem.remove();      //removes list item when pressed button delete
            deleteButton.style.display = "none"; 
            }
    //function to toggle/cross the list item
            function toggle (){    //nested function for crossing list item when clicked
                listItem.classList.toggle("done");   // CSS style for crossing list item when clicked
            };
};

//input value is typed onto HTML file
function submitValueAfterClick (event){
        if(lengthOfInputValue() > 0) { // if length of input value is over 0 
           inputValueOut();            // input value appears in format of list 
           event.preventDefault();     // prevents window from refreshing
        }
};

function submitValueAfterPress (event){
        if(lengthOfInputValue() > 0 && event.key === "Enter") { // if value`s length is over 0 AND Enter keyboard is pressed
           inputValueOut();                                     // input value appears in format of list
           event.preventDefault();                              // prevents window from refreshing
        };
};

submitButton.addEventListener("onclick",submitValueAfterClick );
input.addEventListener("keypress",submitValueAfterPress);

////////////////////////////////////////////////////////////////////////////
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

function setGradient() {
    document.body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    css.textContent = document.body.style.background + ";";
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


/*
currying, compose, closure
*/

// closure  = uses function once, but remembers it as refernce to variables
// currying = const Mult = (a) => (b) => a*b;
// compose  = const compose = (f,g) => (a) => f(g(a));
                                            // function f has function g within and a is paramater of g and g is parameter of f
        //  = const sum = (num) => num + 1:
        // compose(sum, sum)(5); sum(sum(5)); sum(num  = 5 + 1) -> num = 6 + 1 -> num = 7;
 

/*

        // Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];
  
        // adding a key and value to object 

        function addKeyAndValue(arr,key,value){
            arr.forEach(function(val){
                val[key] = value;
            });
            return arr;
        }

        addKeyAndValue(array,"titel", "instructor");


        let str   = "Matte";
        let regex =  /[a,i,e,o]/g;
        let found = str.match(regex);

        console.log(found);

        const counts = {};
        const sampleArray = ['a', 'a', 'b', 'c'];
        sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        console.log(counts)


        function vowelCount(str){
            var splitArr = str.toLowerCase().split("");  //splits string into array
             var obj = {};                               // object
             var vowels = "aeiou";                       //string of vowels
         
             splitArr.forEach(function(letter){          //splitted array forEach()
                 if(vowels.indexOf(letter) !== -1){      // if vowel's index characters not equal to -1
                     if(obj[letter]){                    //   then if obj[character] true 
                         obj[letter]++;                  //       then obj[letter] ++
                     } else{                             //       else obj[letter] = 1
                         obj[letter] = 1;
                     }
                 }
             });
             return obj;                                 // return object
         }

         class player {
            constructor(name, type){
                this.name = name;
                this.type = type;
            }
            introduce(){
                console.log(`Hi ${this.name}, I am ${this.type}`);
            }
         };

         let player1 = new player("mi", "wizard");


         class wizard extends player{
            constructor(name, type){
                super(name, type)    //required
            }
            play() {
                console.log(`Weee, I am ${this.type}`);
            }
         }

         let wizard1 = new wizard("ma", "wizardo");


         let obj = {
            my: 'name',
            is: 'Rudolf',
            the: 'raindeer'
          }

          let entries = Object.entries(obj);
          console.log(entries);
          console.log(entries.flat().join(" "));

          const user1 = "       sad   ";
          console.log(user1.trimStart().trimEnd());



          let greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

          greeting.forEach(j);
          
          function j(currentValue,index,array){
            return array[index] = currentValue.join(" ");
          };

          console.log(greeting);


          const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

          console.log(userEmail3.trimStart().trimEnd());

          let users = { user1: 18273, user2: 92833, user3: 90315 }

          let obj1 =  Object.entries(users);
          let obj2 =  Object.values(users);
          let obj3 =  Object.keys(users);

          console.log(obj1);
          let objj = obj1.map( ( index) => [index[0], index[1] * 2] );
          console.log(Object.fromEntries(objj));

          for(element of obj1 ) {
            element[1] = element[1]*2;
          }
            console.log(obj1)



       //   objj = obj1.flat();
       //   objj.forEach( (element, index) => {if(index % 2 == 1){objj[index] = element*2;}})
          
*/
       const array = [-1,0,3,100, 99, 2, 99] // should return 100
       var max  = Math.min(...array);
      /* 
       for(element of array) { 
                let temp = element;
                if(max >= temp){}
                else {max = temp;}
            };
      */
     /*
       array.forEach(element => {if(max >= element){}
                                 else{max = element}}
                    )
     */
    /*
       for(let i = 0; i < array.length; i++){
            if(max >= array[i]){}
            else{max = array[i]};
       };
    */
        
    /*    

         const array2 = ['a', 3, 4, 2] // should return 4

            for(element of array2) {
                let temp = element;
                if(max >= temp){}
                else {max = temp;};
            }
          

            amazonBasket = {
                glasses: 1,
                books: 2,
                floss: 100
              };

            

            checkBasket(amazonBasket, "floss");
              
              function checkBasket(basket, lookingFor) {
                for(item in basket){
                    if(item === lookingFor){
                        
                       return console.log(item);
                    }
                   }
                   return "nope"
              };
         */
/*
function* generatorFunction(){
    yield "Neo";
    yield "Morpheus";

    return yield "Trinity";
};

const generator = generatorFunction();
        console.log(generator.next());
        console.log(generator.return("over"));
        console.log(generator.next());
*/


//      for (item of generator){
//        console.log(item);
//      }

//      const values = [...generator];
//      console.log(values.join(","));


//      let a = Object.values(generator.next())[0];
//      console.log(a);
      



//Write an array of 1) 10 numbers
                //  2) find out third highest number in the list

let arrayOfNumbers = [2,12,-1,42,13,3,5334,32,0,100];

let highestNumber = 0;
let thirdHighestNumber;

console.log(arrayOfNumbers.forEach(
    () => { for(let number of arrayOfNumbers) {
        if(number > highestNumber) {
            highestNumber = number;
        }//end of IF
        return highestNumber;
    } //end of FOR loop
    
  } //end of forEach()
) )



          



