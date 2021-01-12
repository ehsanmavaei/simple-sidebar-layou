const burgerMenu = document.getElementById("burger");
const container = document.getElementById("container");
const aside = document.getElementById("aside");

// Sidebar Menu Toggle
burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("change");
	if (container.classList.contains("active")) {
		aside.classList.remove("active-aside");
		container.classList.remove("active");
		burgerMenu.classList.remove("burger");
	} else {
		container.classList.add("active");
		aside.classList.add("active-aside");
		burgerMenu.classList.add("burger");
	}
});
