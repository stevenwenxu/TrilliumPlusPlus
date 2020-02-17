document.addEventListener("DOMContentLoaded", function(event) {
	var scriptElement = document.createElement("script")
	scriptElement.src = safari.extension.baseURI + "ready.js"
	document.head.appendChild(scriptElement);
})
