const container = document.querySelector(".container");
const cellsAmountBtn = document.querySelector(".set-cells-amount");
const clearBtn = document.querySelector(".clear-board");

function makeGridBox(sideLength) {
	switch (true) {
		case isNaN(sideLength):
			alert("Only numbers allowed");
			makeGridBox(parseInt(prompt("Set the side of the box", "")));
			break;
		case sideLength <= 100 && typeof sideLength === "number":
			for (i = 0; i < sideLength ** 2; i++) {
				const item = document.createElement("div");
				item.classList.add("grid-item");
				item.addEventListener("mouseenter", changeItemColor);
				container.appendChild(item);	
			};
			container.style.setProperty(
				"grid-template-rows",
				`repeat(${sideLength}, 1fr)`
			);
			container.style.setProperty(
				"grid-template-columns",
				`repeat(${sideLength}, 1fr)`
			);
			break;
		case sideLength > 100:
			alert("The side of the box must be less or equal than 100");
			makeGridBox(parseInt(prompt("Set the side of the box", "")));
			break;
	}
}

function changeItemColor(e) {
    if (e.target.style.backgroundColor) {
        e.target.removeEventListener("mouseenter", changeItemColor)
    } else {
        e.target.style.setProperty(
            "background-color",
            `rgb(${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)})`
        );
    };
};

cellsAmountBtn.addEventListener("click", () => {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	makeGridBox(parseInt(prompt("Set the side of the box", "")));
});

clearBtn.addEventListener("click", () => {
	for (let i = 0; i < container.children.length; i++) {
		if (container.firstChild) {
			container.children[i].style.removeProperty("background-color");
            container.children[i].addEventListener("mouseenter", changeItemColor);
		}
	}
});

// make 'clear' button . Now colors not adding after 'clear' button was clicked