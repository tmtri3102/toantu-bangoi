// BAI 1
let a = parseInt(prompt("a: "));
let b = parseInt(prompt("b: "));
result = a + b < 4 ? "Below" : "Over";
alert(result);
if (a + b < 4) {
	result = "Below";
} else {
	result = "Over";
}

// BAI 2
let c = prompt("Input your title");
// if (c == "Employee") {
// 	alert("Hello");
// } else if (c == "Director") {
// 	alert("Greetings");
// } else if (c == "") {
// 	alert("No login");
// } else {
// 	alert("");
// }
let message =
	c == "Employee"
		? alert("Hello")
		: c == "Director"
		? alert("Greetings")
		: c == ""
		? alert("No login")
		: alert("");
