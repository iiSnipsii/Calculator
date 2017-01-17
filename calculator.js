// JavaScript Document

var decimal = false;

// Change Display
function d(val) {
	document.getElementById("d").value = val;
}


// Type numbers and operators
function v(val) {
	
	if(val == ".") {
		if(decimal == false) {
			document.getElementById("d").value += val;
			decimal = true;
		}
	} else if(val == '+' || val == '-' || val == '*' || val == '/') {
		decimal = false;
		document.getElementById("d").value += val;
	} else {
		document.getElementById("d").value += val;
	}
}

function m(val) {
	document.getElementById("d").value *= val;
}

// Evaluate the equation
function e() {
		try {
			d(eval(document.getElementById("d").value));
		}
		catch(err) {
			d("Error");
		}
}
