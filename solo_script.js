// ! ! !
// Three Bugs
//1. i was not specified for calculateSTI(array) thus the for loop 
//would only cycle through arrayAtticus[0]. 

//2. basePercent representing the STI percentage
//was being returned as a negative number because of the - 1 // 


//objects are the same thing as a function

var Employee = function(name, employeeNumber, salary, rating){ 
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.salary = salary;
    this.rating = rating;   
}; 

var Output = function(name, bonuspercent, totalsalary, bonus){
  this.name = name; 
  this.bonuspercent = bonuspercent; 
  this.totalsalary = totalsalary; 
  this.bonus = bonus;
};


var Atticus = new Employee('Atticus', '2405', '47000', 3); 
var Jem = new Employee('Jem', '62347', '63500', 4); 
var Boo = new Employee('Boo', '11435', '54000', 3)
var Scout = new Employee('Scout', '6243', '74750', 5)

var allEmployees = [Atticus, Jem, Boo, Scout]; 
//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < allEmployees.length; i++){
  allEmployees[i] = calculateSTI(allEmployees[i]); 
  newEl = document.createElement('li');
  newText = document.createTextNode(output.name + " " + output.bonuspercent + " " + output.totalsalary + " " + output.bonus);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}

function calculateSTI(employee){
  //var newArray = [];
  //newArray[0] = array.name;
  output = new Output(); 

  output.name = employee.name; 
  var employeeNumber = employee.employeeNumber;
  var baseSalary = employee.salary;
  var reviewScore = employee.rating;
  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  output.bonuspercent = (bonus * 100) + "%";
  output.totalsalary = "$" + Math.round((parseInt(baseSalary) * bonus) + parseInt(baseSalary));
  output.bonus = "$" + Math.round(baseSalary * bonus);
//console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return output//.join(", ");
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}















/*

//Thursday 8/13/2015 //objects and constructors; 


var o = new Object(); 
o.engine = 'V6'; 

//console.log(o); 

var o = {

  engine: 'V6', 
  wheels: 4
}; 

o.color = 'red'; 

//console.log(o); 

var Car = function(color, engine, wheels){ //objects are the same thing as a function
    this.wheels = wheels || 4;
    this.color = color;
    this.engine = engine;  

}; 

Car.prototype.goFast = function(){
  console.log("My " + this.engine + " make me go vroom!"); 
}
//Car is a constructor: WHICH ARE CAPITALIZED


var Truck = function(color, engine, wheels){
  Car.call(this); 
  this.flatbed = true; 
}

Truck.prototype = Object.create(Car.prototype); 

var car = new car('red', 'v6'); 
var truck = new Truck('grey', 'v10', 6, true); 

console.log(car); 
console.log(truck); 

var car1 = new Car('red', 'v6', 4); 



console.log(car1); 

console.log(typeof(car1)); */