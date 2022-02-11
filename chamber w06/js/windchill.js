import("./math.js")

const temp = window.prompt("What's the temperature?");
const speed = window.prompt("What's the wind speed?");

const result = 35.74 +0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)

const hola = window.prompt(result);