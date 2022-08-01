"use strict"

//1. if clause

let currentYear = 2018;

if(currentYear == 2018){
	console.log('You are right current year is 2018');
}

 currentYear = 2019;

if(currentYear == 2018){
	console.log('You are right current year is 2018');
}else{
	console.log('Welcome to future');
}

currentYear = 2020;

if(currentYear < 2020){
	console.log('You are right current year is not 2020');
}else if(currentYear > 2020){
	console.log('Welcome to future');
}else{
	console.log('Yeas, current year is 2020');
}

//2. ternary operator

let age = 19;
let accessToAlcogol = age >= 21 ? true: false;
console.log('access to alcogol = ' + accessToAlcogol);




