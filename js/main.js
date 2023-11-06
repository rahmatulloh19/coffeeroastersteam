const elHeader = document.querySelector(".site-header");
const elButton = document.querySelector(".site-header__menu");

elButton.addEventListener("click", () => {
	elHeader.classList.toggle("open");
	if (elHeader.classList.contains("open")) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.removeAttribute("style");
	}
});

// bring marks from plan.html
const elMarks = document.querySelectorAll("mark");
const elInputs = document.querySelectorAll("input[type='radio']");
const elSubmitButton = document.querySelector("button[type='submit']");

let countSelectedInputs = 0;
elInputs.forEach((item, index) => {
	item.addEventListener("change", () => {
		if (index <= 2) {
			elMarks[0].textContent = item.value;
			countSelectedInputs++;
		}
		if (index > 2 && index <= 5) {
			elMarks[1].textContent = item.value;
			countSelectedInputs++;
		}
		if (index > 5 && index <= 8) {
			elMarks[2].textContent = item.value;
			countSelectedInputs++;
		}
		if (index > 8 && index <= 11) {
			elMarks[3].textContent = item.value;
			countSelectedInputs++;
		}
		if (index > 11 && index <= 14) {
			elMarks[4].textContent = item.value;
			countSelectedInputs++;
		}
		if (countSelectedInputs == 5) {
			elSubmitButton.removeAttribute("disabled");
		}
		if (elSubmitButton.disabled) {
			elSubmitButton.classList.add("drink__form-btn-disabled");
		} else {
			elSubmitButton.classList.remove("drink__form-btn-disabled");
		}
	});
});
