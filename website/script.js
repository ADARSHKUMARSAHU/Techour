const hanburger =document.querySelector(".hanburger");
const navlinks =document.querySelector(".nav-links");
const links =document.querySelectorAll(".nav-links li");

hanburger.addEventListener("click", () => {
	navlinks.classList.toggle("open");
});