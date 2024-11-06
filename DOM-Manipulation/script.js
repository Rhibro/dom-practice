// Exercise 1: Using Selectors

// Task:
// Use getElementById to get the h1 element.
// Use getElementsByClassName to retrieve all p-elements with class text.
// Use querySelector to retrieve first li element.
// Log the results to the console.

// let heading = document.getElementById("huvudrubrik");
// console.log(heading);

// let allParagraphs = document.getElementsByClassName("text");
// console.log(allParagraphs);

// let firstQuery = document.querySelector(".item");
// console.log(firstQuery);

// Exercise 2: Change Content and Attributes

// Task:
// Change the text in the h1 element to "Welcome to my awesome site!".

// Add a new img element to the HTML:
// <img id="image" src="image1.jpg" alt="Image 1">

// In JavaScript, replace the image with image2.jpg and update the alt text to "Image 2".

// Change the text in the first paragraph to "This is the updated paragraph.".

// heading.textContent = "Welcome to my awesome site!";
// let dogImage = document.getElementById("bild");
// dogImage.setAttribute("src", "images/purple-dog.jpg");
// allParagraphs[0].textContent = "This is the updated paragraph.";

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

// let allQuery = document.querySelectorAll(".item");
// allQuery.forEach(item => item.classList.add('highlight'));

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
// const images = document.querySelectorAll('.image');

// Update each image's src and alt attributes
// images.forEach((image, index) => {
//     image.src = `newImage${index + 1}.jpg`;  // Creates newImage1.jpg, newImage2.jpg, etc.
//     image.alt = "Updated image";
// });

// Exercise 5: Navigating the DOM Tree

// Task:
// Create a list (<ul>) with multiple list items (<li>) inside a container <div> with id="listContainer".

// Use JavaScript to:

// Get the div element with id="listaContainer".
// Navigate to the <ul> element inside the div element.
// Change the text content of the second <li> element to "Updated Point".

// Purpose:
// Practice navigating between parents and children in the DOM tree with properties like parentNode, children, firstElementChild, lastElementChild.

// let secondItem = document.querySelector('#listContainer ul li:nth-child(2)');
// secondItem.textContent = "Updated Point";

// Exercise 6: Using querySelectorAll and Looping over NodeList

// Task:
// Create multiple div elements on the page with class="box".

// Use JavaScript to:

// Get all elements with class box using querySelectorAll.
// Change the background color of every other box to a different color (eg, change every other to gray).
// Add the text "Box [number]" inside each div, where [number] is its position in the list.

// Purpose:
// Practice using querySelectorAll, looping over a NodeList, and manipulating multiple elements based on their position.

// let allBoxes = document.querySelectorAll(".box");
// for (let i = 0; i < allBoxes.length; i++) {
//     if (i % 2 !== 0) {
//         allBoxes[i].style.backgroundColor = 'gray';
//     }
// }

// Exercise 7: Exploring Different Selectors

// Task:
// Use the following HTML template:

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <title>Selectors Exercise</title>
// </head>
// <body>
// <h1 id="header">My Website</h1>
// <p class="description">This is a descriptive text.</p>
// <p class="description">This is another descriptive text.</p>
// <div data-info="important" class="box">
// <span>Some important content</span>
// </div>
// <ul>
// <li class="item">Item 1</li>
// <li class="item highlight">Item 2</li>
// <li class="item">Item 3</li>
// </ul>
// <script src="script.js"></script>
// </body>
// </html>

// Use JavaScript to retrieve and log the following elements:

// The element with id="header" using getElementById.
// All elements with class description using getElementsByClassName.
// The first <li> element with class highlight using querySelector.
// All <li> elements with class item using querySelectorAll.
// The element with the attribute data-info="important" using querySelector.

// Purpose:
// Practice using different types of selectors to retrieve elements from the DOM.

// let getHeader = document.getElementById("header");
// console.log(getHeader);
// let getFirstClass = document.getElementsByClassName("description");
// console.log(getFirstClass);
// let getQuery = document.querySelector(".item");
// console.log(getQuery);
// let getAllQuery = document.querySelectorAll(".item");
// console.log(getAllQuery);
// let gettheElement = document.querySelector('[data-info="important"]');
// console.log(gettheElement);

// Exercise 8: Change Content with innerHTML and textContent

// Task:
// Continue using the HTML template from Exercise 7.

// Use JavaScript to:

// Change the content of the div element with class="box" to:

// <h2>New Title</h2>
// <p>This is new content.</p>
// Use innerHTML.

// Change the text in the first paragraph with the description class to "Updated description." Use textContent.

// Note the difference between using innerHTML and textContent.

// Purpose:
// Understand the difference between innerHTML and textContent and when to use them.

let element = document.querySelector('[data-info="important"]');
element.innerHTML = `
  <h2>New Title</h2>
  <p>This is new content.</p>
`;

// Exercise 9: Navigate the DOM tree

// Task:
// Use the HTML template from Exercise 7.

// Use JavaScript to:

// Get the ul element on the page.
// Get the first li element within ul by navigating the DOM tree.
// Change the text of the last li element to "Last item".

// Purpose:
// Practice navigating between parent and child nodes in the DOM 
// using properties such as parentNode, children, firstElementChild,
// lastElementChild, nextElementSibling, and previousElementSibling.

// let lastItem = document.querySelector('ul li:nth-child(3)');
// lastItem.textContent = 'Last item';

// Exercise 10: Changing Styles of Multiple Elements with Loops
// Task:
// Use the HTML template from Exercise 7.

// Use JavaScript to:

// Get all p elements with class description.
// Loop through them and change the text color to blue.
// Change the background color of all li elements with class item to light gray (#f2f2f2).

// Purpose:
// Practice looping over an HTMLCollection or NodeList to manipulate multiple elements.

// let pClass = document.querySelectorAll('p.description');
// pClass.forEach((p) => {
//     p.style.color = 'blue';
// });

// let liClass = document.querySelectorAll('li.item');
// liClass.forEach((li) => {
//     li.style.backgroundColor = 'gray';
// });

// let changeStyles = document.querySelectorAll('li.item, p.description');
// changeStyles.forEach((element) => {
//     if (element.tagName === 'LI') {
//         element.style.backgroundColor = 'grey';
//     } else if (element.tagName === 'P') {
//         element.style.color = 'blue';
//     }
// });

// Exercise 11: Comparing textContent, innerText and innerHTML

// Task:
// Use the following HTML code in your page:

// <div id="textContainer">
// <p>This is <strong>important</strong> text.</p>
// <!-- A hidden paragraph -->
// <p style="display: none;">This text is hidden.</p>
// </div>

// Use JavaScript to:

// Get the div element with id="textContainer".
// Log the values ​​of textContent, innerText and innerHTML for this element.
// Note the differences between these properties.

// Purpose:
// Understand the differences between textContent, innerText and innerHTML.

// Expected Output and Explanation:
// textContent: Returns all text within the element, including text from hidden elements and without parsing HTML tags.

// innerText: Returns visible text, excludes text from hidden elements, and takes CSS styles into account.

// innerHTML: Returns the HTML content as a string, including all tags.

let divContainer = document.getElementById('textContainer');
console.log(divContainer);
console.log(textContainer.textContent);
console.log(textContainer.innerHTML);
console.log(textContainer.innerText);

// Exercise 12: Changing Attributes on Elements

// Task:
// Add the following link to your HTML:

// <a id="myLink" href="https://www.example.com" title="Visit Example.com">Visit our site</a>

// Use JavaScript to:

// Get the link with id="myLink".
// Change the href attribute to https://www.google.com.
// Change the title attribute to "Visit Google".
// Change the link text to "Search Google".

// Purpose:
// Practice using setAttribute and changing the text content of a link element.

let getLink = document.getElementById('myLink');
// getLink = innerHTML = 'https://www.google.com';
// console.log(getLink);
// getLink = innerText = 'Visit Google';
// console.log(getLink);

getLink.href = 'https://www.google.com';
getLink.title = 'Visit Google';
getLink.textContent = 'Search Google';
console.log(getLink);

// Exercise 13: Using CSS Classes for Styling

// Task:
// Add the following CSS styles to your <head>:

// <style>
// .hidden {
// display: none;
// }
// .prominence {
// color: red;
// font-weight: bold;
// }
// </style>

// Use JavaScript to:

// Get all li elements with class item.
// Add the class hidden to the second li element to hide it.
// Add the class prominent to the first li element to make it more prominent.

// Purpose:
// Practice manipulating classList to add and remove CSS classes on elements.

let items = document.querySelectorAll('li.item');

if (items[1]) {
    items[1].classList.add('hidden');
} 
 
if (items[0]) {
    items[0].classList.add('prominence');
}