var correct = 0;

var answer1 = prompt("Name a programming language that also it's a gem?");
if (answer1.toLocaleUpperCase() === "RUBY"){
correct +=1;
}

var answer2 = prompt("Name a programming language that a name of a snake?");
if (answer2.toLocaleUpperCase() === "PYTHON"){
correct +=1;
}

var answer3 = prompt("Can we override the main method in java? answer by 'Y' or 'N'");
if (answer3.toLocaleUpperCase() === "N"){
correct +=1;
}

var answer4 = prompt("A short integer is at least 16 bits wide and a long integer is at least 32 bits wide? answer by 'True' or 'False'");
if (answer4.toLocaleUpperCase() === "TRUE"){
correct +=1;
}

var answer5 = prompt("Encapsulation: This helps in controlling the visibility of internal details of the objects. It improves security and integrity of data? answer by 'True' or 'False'");
if (answer5.toLocaleUpperCase() === "TRUE"){
correct +=1;
}
document.write("<p> You got " + correct + " out of 5 questions.</p>");

if ( correct === 5){
document.write("<p><strong>WoW! You earned a gold crown!</strong></p>");
} else if (correct >=3) {
document.write("<p><strong>Not bad! You earned a silver crown!</strong></p>");
} else if (correct  >=1 ){
document.write("<p><strong>You earned a bronze crown!</strong></p>");
}else {
document.write("<p><strong>You need to study again, sorry.</strong></p>");
}
