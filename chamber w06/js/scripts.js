// It could have been any word, but "toggleMenu" is easier to understand

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("sm1").classList.toggle("open");
    document.getElementById("sm2").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;




// [ LAST UPDATE DATE ]
// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;




// var dateObj = new Date();
// var day = dateObj.getUTCDate();
// console.log(day)

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var day = days[ now.getDay() ];

if (day == "Tuesday") {
    document.getElementById("greet_meet").classList.toggle("open");
    }