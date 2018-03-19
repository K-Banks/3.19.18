var height = parseInt(prompt("Enter height in inches"));
var weight = parseInt(prompt("Enter weight in pounds"));

var heightsquare = ((height*0.0254)*(height*0.0254));
weight = (weight*0.4535);
var bmi = (weight/heightsquare);

alert(bmi);

if (bmi < 18){
  alert("Your BMI is underweight")
}
if (bmi > 18, bmi < 25){
  alert("Your BMI is healthy");
}
if (bmi > 25) {
  alert("Your BMI is obese");
}

var celsius = parseInt(prompt("What is the temperature (in Celsius)?"));
var fahrenheit = (celsius*(9/5))+32;
alert("The temperature in fahrenheit is: " + fahrenheit);
