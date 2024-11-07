console.log("onsdags övningar");

let btn = document.getElementById('minKnapp');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('you have clicked the button!');
})

let blueDiv = document.getElementById('ruta');
blueDiv.addEventListener('mouseover', function () {
    blueDiv.style.backgroundColor = 'red';
});
blueDiv.addEventListener('mouseout', function () {
    blueDiv.style.backgroundColor = 'purple';
});

// Exercise 1: Simple Counter

// Task:
// Create two buttons:

// One with id="increaseButton" and the text "Increase".
// One with id="decreaseButton" and the text "Decrease".
// **Add a p element with id="counter" that displays the initial value of 0.

// Use JavaScript to:

// Add event listeners to the buttons.
// When "Increase" is clicked, increase the value by 1 and update the text in the p element.
// When "Decrease" is clicked, decrease the value by 1 and update the text.
// Purpose:
// Practice handling click events and updating the DOM based on user interaction.

let counterEle = document.getElementById('counter');
let increaseBtn = document.getElementById('increaseBtn');
let decreaseBtn = document.getElementById('decreaseBtn');

let counterValue = 0;

increaseBtn.addEventListener('click', function() {
    counterValue += 1;
    counterEle.textContent = counterValue;
});

decreaseBtn.addEventListener('click', function() {
    counterValue -= 1;
    counterEle.textContent = counterValue;
});

// ------------------------------------------------------------------------

// Exercise 2: Form Validation

// Task:
// Create a form with a text field (input type="text") and a button (input type="submit").

// Use JavaScript to:

// Listen for the form's submit event.
// Prevent the default behavior (prevent the page from reloading) using event.preventDefault().
// Ensure the text field is not empty.
// If it is empty, display an error message below the form.
// If it is not empty, display a confirmation.
// Purpose:
// Practice handling form events and validating user input.

let userInput = document.getElementById('namn');
let submitBtn = document.getElementById('submitBtn');
let message = document.getElementById('message');

submitBtn.addEventListener('click', function(event){
    event.preventDefault();

    if (userInput.value.trim() === '') {
        message.textContent = 'Please enter something';
        message.style.color = 'red';
    } else {
        message.textContent = 'Submitted!';
        message.style.color = 'green';
        userInput.value = '';
    }
   
});

// ------------------------------------------------------------------------

// Exercise 3: Change Image on Mouse Hover

// Task:
// Add an image (img) with id="myImage" and src="image1.jpg".

// Use JavaScript to:

// Listen for mouseover and mouseout events on the image.
// When the mouse is over the image, change the src to image2.jpg.
// When the mouse leaves the image, change it back to image1.jpg.
// Purpose:
// Practice handling mouse events and changing attributes on elements.

let image = document.getElementById('imgOne');
image.addEventListener('mouseover', function () {
    image.src = '/DOM-Manipulation/images/green-dog.jpg';
});
image.addEventListener('mouseout', function () {
    image.src = '/DOM-Manipulation/images/blue-dog.jpg';
});

// ------------------------------------------------------------------------

// Additional exercises to reinforce yesterday's and today's topics are available here:
// https://github.com/FJSX24/fjsx24vecka45/tree/wednesday-6nov-DOM-Bootcamp

// If you finish early, feel free to experiment and add new addEventListener functions.
