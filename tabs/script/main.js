
const tabs = document.querySelectorAll(".tab");

const contents = document.querySelectorAll(".content");

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", (event) => {

		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("tab--active");
		}
		tabs[i].classList.add("tab--active");
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("content--active");
		}
		contents[i].classList.add("content--active");

	});
}

function one() {
	document.getElementById("one").style.backgroundColor = "#b455d6";

}
function two() {
	document.getElementById("two").style.backgroundColor = "#e3f337";

}
function tree() {
	document.getElementById("tree").style.backgroundColor = "#ffffff";

}

