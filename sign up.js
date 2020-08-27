const signUpButton = document.getElementById('signUp');
const signUpsButton = document.getElementById('signUps');
const signInButton = document.getElementById('signIn');
const signInsButton = document.getElementById('signIns');
const container = document.getElementById('container');
// let span = document.getElementsByClassName("close")[0];

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	span[0].style.color = "#000000"
});
signUpsButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	span[0].style.color = "#000000"
});


signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	span[1].style.color = "#ffffff"
});
signInsButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	span[1].style.color = "#ffffff"
});