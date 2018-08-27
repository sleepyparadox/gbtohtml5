function cout(message, colorIndex) {
	var terminal_output = document.getElementById("terminal_output");
	if ((colorIndex != 0 || DEBUG_MESSAGES) && (colorIndex != -1 || DEBUG_WINDOWING)) {
		console.log(message);
	}
}
function clear_terminal() {
}