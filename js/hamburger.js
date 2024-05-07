// const hamburger = document.querySelector(".hamburger");
// const menu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
// 	hamburger.classList.toggle("active");
// 	menu.classList.toggle("active");
// });

const hamburger = document.querySelector(".hamburger");

const offScreenMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	offScreenMenu.classList.toggle("active");
});
