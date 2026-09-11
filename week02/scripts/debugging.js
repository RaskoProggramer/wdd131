const radiusOutput = document.getElementById("radius");
const areaOutput = document.getElementById("area");


const PI = 3.14158;

const radius = 10;
const area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

const radiusTwo = 20;
const areaTwo = PI * radiusTwo * radiusTwo;
radiusOutput.textContent = radiusTwo;
areaOutput.textContent = areaTwo;