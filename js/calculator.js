for (x of document.getElementsByClassName("number")) {
	x.addEventListener("click", function() {
		document.getElementById("result").value += this.innerHTML;
		$("#result").scrollTop($("#result")[0].scrollHeight);
	});
};

for (x of document.getElementsByClassName("operator")) {
	x.addEventListener("click", function() {
		if (!["÷", "×", "–", "+", "."].includes(document.getElementById("result").value.slice(-1))) {
			document.getElementById("result").value += this.innerHTML;
		};
		$("#result").scrollTop($("#result")[0].scrollHeight);
	});
};

document.getElementById("=").addEventListener("click", function() {
	document.getElementById("result").value = eval(document.getElementById("result").value.replace("–", "-").replace("×", "*").replace("÷", "/"));
});

