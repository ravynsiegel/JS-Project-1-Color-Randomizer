// array increments between 0 and 15
// there are 16 items within the array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// retreives 'btn' from HTML
const btn = document.getElementById('btn');

// retreives '.color' from CSS
const color = document.querySelector('.color');

// function of btn
btn.addEventListener('click', function () {

// # is first variable in hex color
let hexColor = '#';

// for(x;y;z) loop takes 3 parameters:
// x. current value of i;
// y. rules of execution of i;
// z. increased value (i++)

// variable i assigned to 0;
// variable i MUST be less than 6;
// variable i increments by 1
for (let i = 0; i < 6; i++) {

    // retrieves random number from array and applies to hex value
    hexColor += hex[getRandomNumber()];
}
// .textContent sets content of color = variable hexColor
color.textContent = hexColor;

// backgroundColor property sets or returns the background color of an element
// style property is used to get or set a specific style of an element using different CSS properties
// styles apply while iterates thru array
document.body.style.backgroundColor = hexColor;
});

// function generations random number between 0 and 3
function getRandomNumber(){

    // Math.floor() method rounds a number down to nearest WHOLE integer
    // Math.random() by default returns a value lower than 1
    // * hex.length multiplies the length of the items in array
    // however, the for() loop will only iterate 6 times to generate hex value
    return Math.floor(Math.random() * hex.length)

}