import("./math.js")

const temp = document.getElementById("ph_temperature");
const speed = document.getElementById("ph_speed");

const result = 35.74 +0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)