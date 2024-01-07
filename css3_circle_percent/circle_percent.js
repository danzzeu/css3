const stylePercent = document.createElement('style');

style.textContent = `
		.circle-percent-config {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
		height: fit-content;
		border-radius: 50%;
	}

	.circle-percent-config span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.circle-percent-config svg {
		position: relative;
	}

	.circle-percent-config svg path {
		animation: progress 1s ease-out forwards;
	}

	@keyframes progress {
		0% { stroke-dasharray: 0 100; }
	}
`;

document.head.appendChild(stylePercent);

let percents = document.getElementsByClassName("circle-percent-config");

for (let percent of percents) {
    let dataWidth = parseFloat(percent.getAttribute("data-width"));
    let dataBackground = percent.getAttribute("data-background");
    let dataStrokeSize = parseFloat(percent.getAttribute("data-stroke"));
    let dataStrokeBg = percent.getAttribute("data-stroke-bg");
    let dataStrokeColor = percent.getAttribute("data-stroke-color");
    let dataTextColor = percent.getAttribute("data-text-color");
    let dataFontSize = parseFloat(percent.getAttribute("data-font-size"));
    let dataPercent = parseFloat(percent.getAttribute("data-percent"));

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", dataWidth);
    svg.setAttribute("width", dataWidth);
    svg.setAttribute("viewBox", "0 0 36 36");
    svg.setAttribute("overflow", "visible");

    let pathA = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathA.setAttributeNS(null, "d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831");
    pathA.setAttributeNS(null, "stroke", dataStrokeBg);
    pathA.setAttributeNS(null, "stroke-width", dataStrokeSize < 4 ? 4 : dataStrokeSize);
    pathA.setAttributeNS(null, "fill", "transparent");
    pathA.setAttributeNS(null, "stroke-linecap", "round");
    pathA.setAttributeNS(null, "stroke-dasharray", "100 100");

    let pathB = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathB.setAttributeNS(null, "d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831");
    pathB.setAttributeNS(null, "stroke", dataStrokeColor);
    pathB.setAttributeNS(null, "stroke-width", dataStrokeSize);
    pathB.setAttributeNS(null, "fill", "transparent");
    pathB.setAttributeNS(null, "stroke-linecap", "round");
    pathB.setAttributeNS(null, "stroke-dasharray", dataPercent + " 100");

    svg.appendChild(pathA);
    svg.appendChild(pathB);

    let span = document.createElement("span");
    span.textContent = dataPercent + "%";
    span.style.color = dataTextColor;
    span.style.fontSize = dataFontSize + "px";

    percent.appendChild(svg);
    percent.appendChild(span);

    percent.style.backgroundColor = dataBackground;
}