let percents = document.getElementsByClassName("circle-percent-config");

for (let percent of percents) {
    let dataWidth = parseFloat(percent.getAttribute("data-width"));
    let dataBackground = percent.getAttribute("data-background");
    let dataBorderSize = parseFloat(percent.getAttribute("data-stroke"));
    let dataPrimaryColor = percent.getAttribute("data-stroke-primary");
    let dataSecondaryColor = percent.getAttribute("data-stroke-secondary");
    let dataPercent = parseFloat(percent.getAttribute("data-percent"));
    let dataColor = percent.getAttribute("text-color");
    let dataFontSize = parseFloat(percent.getAttribute("text-size"));
    let dataContainerWidth = (dataWidth * 2) + dataBorderSize;

    percent.style.setProperty("--border-primary", dataPrimaryColor);
    percent.style.setProperty("--border-secondary", dataSecondaryColor);
    percent.style.setProperty("--percent", dataPercent);
    percent.style.setProperty("--fill", dataBackground);
    

    let div = document.createElement("div");
    div.className = "percent";

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", dataContainerWidth);
    svg.setAttribute("width", dataContainerWidth);
    svg.setAttribute("viewBox", "0 0 "+ dataContainerWidth + " " + dataContainerWidth);
    

    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", dataWidth);
    circle.setAttribute("cy", dataWidth);
    circle.setAttribute("r", dataWidth);
    svg.appendChild(circle);
    svg.appendChild(circle.cloneNode(true));

    div.appendChild(svg);

    let span = document.createElement("span");
    span.textContent = '10%';
    span.style.color = dataColor;
    span.style.fontSize = dataFontSize + "px";

    div.appendChild(span);

    percent.appendChild(div);
}