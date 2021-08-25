// Daniel M
// Web calculator application
// 8/25/21

for (x of document.getElementsByClassName("number")) {
	x.addEventListener("click", function() {
		document.getElementById("result").value += this.innerHTML;
	});
};

document.getElementById("=").addEventListener("click", function() {
	document.getElementById("result").value = eval(document.getElementById("result").value)
});
