myFunction();
function myFunction(){
	// document.getElementById("heading").innerHTML ="Welcome to my project";
	$('#button').on('click',functionTwo);
}
function functionTwo(){
	window.location.href="Project.html";
	window.alert("You are Logging In...");
}