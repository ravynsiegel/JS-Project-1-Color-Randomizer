// combination of colors in array
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// retreives 'btn' from HTML
const btn = document.getElementById('btn');

// retreives '.color' from CSS
const color = document.querySelector('.color');

// function of btn
btn.addEventListener('click', function(){

    // get random number between 0 & 3 (arrays begin at 0)
    // iterates thru array 'const colors'
    const randomNumber = getRandomNumber();

    // the console.log() method writes a message to the console: get a random number
    console.log(randomNumber);

    // backgroundColor property sets or returns the background color of an element
    // style property is used to get or set a specific style of an element using different CSS properties
    // styles apply while iterates thru array
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// generates random number between 0 and 3
function getRandomNumber(){

    // Math.floor() method rounds a number down to nearest WHOLE integer
    // Math.random() by default returns a number lower than 1
    // * colors.length multiplies the length of the items in array
    return Math.floor(Math.random() * colors.length);
}