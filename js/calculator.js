// Daniel M
// Web calculator application
// 8/25/21

for (x of document.getElementsByClassName("number")) {
	x.addEventListener("click", function() {
		document.getElementById("result").value += this.innerHTML;
		$("#result").scrollTop($("#result")[0].scrollHeight);
	});
};

document.getElementById("=").addEventListener("click", function() {
	document.getElementById("result").value = eval(document.getElementById("result").value)
});
