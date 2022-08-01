'use strick'

let admin;
let name = 'John';

admin = name;
console.log(admin);

let login = 'admin';
let password = 'TheMaster';

//login = 'user';

if(login =='admin'){
	console.log(login + '- corrected');

	if(password =='TheMaster'){
		console.log("Welcome!");
	}else if(password == 'TheNull'){
		console.log("Wrong password");
	}else{
		console.log("Canceled.");
	}
} else if(login == 'user'){
	console.log(login + " - I do not know.")
}else{
	console.log("Canceled.");
}

console.log("\nOption II");

password = 'TheNull';

if(login =='admin'){
	console.log(login + ' - corrected');

	if(password == 'TheMaster'){
		console.log("Welcome!");
	}else if(password == 'TheNull'){
		console.log("Wrong password");
	}else{
		console.log("Canceled.");
	}
} else if(login == 'user'){
	console.log(login + " - I do not know.")
}else{
	console.log("Canceled.");
}










