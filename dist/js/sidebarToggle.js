const burgerMenu = document.getElementById("burger");
const container = document.getElementById("container");
const aside = document.getElementById("aside");

/*thsi function will change the class of sidebar and 
container so that sidebar won't be shown on screen sizes samaller than 760px*/
function size(){
	var value=window.innerWidth;
    if( value<760){
	console.log('less than 760');
	container.classList.add("active");
	aside.classList.add("active-aside");
	burgerMenu.classList.add("burger");
	 

}
else {
	aside.classList.remove("active-aside");
	container.classList.remove("active");
	burgerMenu.classList.remove("burger");

}
}


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
})
