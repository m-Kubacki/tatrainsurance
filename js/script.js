const title = document.title;
window.addEventListener("blur", () => {
	document.title = "Wracaj do nas!";
});
window.addEventListener("focus", () => {
	document.title = "Najlepsze polisy na zycie!";
});

