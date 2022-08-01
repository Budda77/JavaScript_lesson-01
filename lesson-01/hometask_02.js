'use strick'

console.log('switch:\n'); 

let login = 'admin';
let password = 'TheMaster';

//login = 'user';
//password = 'TheNull';

switch(login){

	case 'admin':{
		console.log(login + ' - corrected');

		switch(password){
		case 'TheMaster':{
			console.log("Welcome!"); break;
		}
		case 'TheNull':{
			console.log("Wrong password"); break;
		}
		default: {
			console.log('Canceled.'); break;
		}
		}
		break;
	}
	case 'user':{
		console.log(login + " - I do not know."); break;
	}
	default: {
		console.log('Canceled.'); 
	}
}

