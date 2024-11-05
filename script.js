// Exercise 1: Using Selectors

// Task:
// Use getElementById to get the h1 element.
// Use getElementsByClassName to retrieve all p-elements with class text.
// Use querySelector to retrieve first li element.
// Log the results to the console.

let heading = document.getElementById("huvudrubrik");
console.log(heading);

let allParagraphs = document.getElementsByClassName("text");
console.log(allParagraphs);

let firstQuery = document.querySelector(".item");
console.log(firstQuery);

// Exercise 2: Change Content and Attributes

// Task:
// Change the text in the h1 element to "Welcome to my awesome site!".

// Add a new img element to the HTML:
// <img id="image" src="image1.jpg" alt="Image 1">

// In JavaScript, replace the image with image2.jpg and update the alt text to "Image 2".

// Change the text in the first paragraph to "This is the updated paragraph.".

heading.textContent = "Welcome to my awesome site!";
let dogImage = document.getElementById("bild");
dogImage.setAttribute("src", "images/purple-dog.jpg");
allParagraphs[0].textContent = "This is the updated paragraph.";

// Exercise 3: Dynamic Styling

// Task:
// Change the background color of the body to #f0f0f0 when the page loads.

// Add a CSS class to the <style> tag in the HTML:
// <style>
// .highlight {
// background-color: yellow;
// }
// </style>

// Use classList to add the highlight class to all li elements.

let allQuery = document.querySelectorAll(".item");
allQuery.forEach(item => item.classList.add('highlight'));

// Exercise 4: Changing Attributes on Multiple Elements

// Task:
// Create three images on the page with class="image" and different src attributes.

// Use JavaScript to:

// Get all images with the image class.
// Change the src attribute of each image to a new image file (eg, "newImage1.jpg", "newImage2.jpg", "newImage3.jpg").
// Change the alt text of each image to "Updated image".

// Purpose:
// Practice using getElementsByClassName and looping over an HTMLCollection to change attributes on multiple elements.

// Get all images with 'image' class
const images = document.querySelectorAll('.image');

// Update each image's src and alt attributes
images.forEach((image, index) => {
    image.src = `newImage${index + 1}.jpg`;  // Creates newImage1.jpg, newImage2.jpg, etc.
    image.alt = "Updated image";
});

// Exercise 5: Navigating the DOM Tree

// Task:
// Create a list (<ul>) with multiple list items (<li>) inside a container <div> with id="listContainer".

// Use JavaScript to:

// Get the div element with id="listaContainer".
// Navigate to the <ul> element inside the div element.
// Change the text content of the second <li> element to "Updated Point".

// Purpose:
// Practice navigating between parents and children in the DOM tree with properties like parentNode, children, firstElementChild, lastElementChild.

let secondItem = document.querySelector('#listContainer ul li:nth-child(2)');
secondItem.textContent = "Updated Point";

// Exercise 6: Using querySelectorAll and Looping over NodeList

// Task:
// Create multiple div elements on the page with class="box".

// Use JavaScript to:

// Get all elements with class box using querySelectorAll.
// Change the background color of every other box to a different color (eg, change every other to gray).
// Add the text "Box [number]" inside each div, where [number] is its position in the list.

// Purpose:
// Practice using querySelectorAll, looping over a NodeList, and manipulating multiple elements based on their position.

let allBoxes = document.querySelectorAll(".box");
for (let i = 0; i < allBoxes.length; i++) {
    if (i % 2 !== 0) {
        allBoxes[i].style.backgroundColor = 'gray';
    }
}