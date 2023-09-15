
// ------------------------------------------- chapter 14 - 16 ------------------------------


// ------ Ques 1

// var ticketNumber = 0;

// ------ Ques 2

// var StudentName = ["mudassir","faizan","sahil","moiz","sajjad"];

// ------ Ques 3

// var strings = ["Qualification","11","laptop","computer","moblie","system"];

// ------ Ques 4

// var number = [20,70,470,90,40,30,100,369];

// ------ Ques 5

// var boolean = [true,false,false,true,false];

// ------ Ques 6

// var mixedArray = ["Karachi",14,"multan",true,false,"quetta",150,false];

// ------ Ques 7

// var Qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];

// document.write("<h1>Qualifications:</h1>"+ `<ol>
// <li> Qualifications[0]</li>
// <li> Qualifications[1]</li>
// <li> Qualifications[2]</li>
// <li> Qualifications[3]</li>
// <li> Qualifications[4]</li>
// <li> Qualifications[5]</li>
// <li> Qualifications[6]</li> 
// <li> Qualifications[7]</li> </ol>` );


// ------ Ques 8


// var StudentName = ["Michael","John","Tony"];

// var StudentMarks = [320,230,480];

// var per = [StudentMarks[0]/500*100, StudentMarks[1]/500*100, StudentMarks[2]/500*100];

// for(var i = 0;i<StudentMarks.length;i++)
// {
//     if(age > 20)
//     {
//         ++ticketNumber;
//         console.log("Allowed ,"  + ticketNumber)
//     }
//     else
//     {
//         console.log("not allowed")
//     }
//     document.write("<br>" + "Score of " + StudentName[i] + " " + "is " + StudentMarks[i] + " " + "percentage: " + per[i] + "%" + "<br>");
// }


// ------ Ques 9


// var colors = ["red","golden","green","blue","black","orange","purple"];

// document.write("<h1>Initialize Colors</h1> " + "<br>");

// for(var i = 0; i < colors.length;i++)
// {
//     document.write(colors[i]);
// }


// ------ (a)

// document.write("<br>");

// document.write("<h1>Add Beginning to an array</h1> ");

// var userInput = prompt("what color you want to add to the beginning of the array");

// colors.unshift(userInput);

// document.write(colors + "<br>");


// ------ (b)

// document.write("<br>");

// document.write("<h1>End of an array</h1> ");

// var userInput = prompt("what color you want to add to the end of the array");

// colors.push(userInput);

// document.write(colors + "<br>");


// ------ (c)

// document.write("<br>");

// document.write("<h1>Two more colors add in the Beginning of an array</h1> ");

// var userInput = prompt("Two more colors add in the Beginning of an array");

// colors.unshift(userInput);

// document.write(colors + "<br>");


// ------ (d)

// document.write("<br>");

// document.write("<h1>Del first color of an array</h1> ");

// var userInput = prompt("what color you want first del beginning of the array");

// colors.shift(userInput);

// document.write(colors + "<br>");


// ------ (e)

// document.write("<br>");

// document.write("<h1>Del last color of an array</h1> ");

// var userInput = prompt("what color you want last del end of the array");

// colors.pop(userInput;

// document.write(colors + "<br>");


// ------ (f)

// document.write("<br>");

// document.write("<h1>Add Position to add color of an array</h1> ");

// var userInput = prompt("which position did you add color name of an array");

// var StartingPoint = +prompt("Enter Starting Point");

// var delArr = +prompt("Enter del Colors");

// colors.splice(StartingPoint,delArr,userInput);

// document.write(colors+ "<br>");


// ------ (g)

// var qts = prompt("You want to delete a colors (yes/no)")
// if(qts === "yes"){
//     var qts2 = parseInt(prompt("how many color s you want to delete")) 
// }
// else{
//     alert("as your wish")
// }
// colorName.splice(qts2 , qts2)
// document.write(colorName)


// Q10

// var Scores = [320,230,480,120];

// document.write("Ordered Scores of Students: " + Scores.sort());


// Q11

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar",];

// var selectedCities = cities.slice(2,4);

// document.write("Cities List" + cities + "Selected List Here" + selectedCities);


// Q12

// var arr = ["This","is","my","cat"];

// var join = arr.join(" ");

// document.write("Array" + arr + "<br>" + String" + join);


// Q13

// var devices = ["keyboard","mouse","Printer","monitor"];

// document.write("Devices" + devices + 
//     devices[0]
//     devices[1]
//     devices[2]
//     devices[3] );


// Q14


// var devices = ["keyboard","mouse","Printer","monitor"];

// document.write("Devices" + devices + 
//     devices[3]
//     devices[2]
//     devices[1]
//     devices[0]` );


// Q15

// var phone = ["Apple","Samsung","Motorola","Nokia","Sony","Haier","LG"];

// document.write("<select>");

// for(var i = 0; i < phone.length; i++){
    // document.write(<option> + phone[i] +  </option>)
// }

// document.write("</select>")

// ----------------------------------- End-------------------------------------