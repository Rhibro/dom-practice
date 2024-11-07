// Exercise 1: Add and Remove Paragraphs

// Task:
// Create two buttons on the page:

// A button with id="addButton" and the text "Add Paragraph".
// A button with id="removeButton" and the text "Remove Paragraph".

// Use JavaScript to:

// When "Add Paragraph" is clicked, create a new paragraph with unique text and add it to the content div.
// When "Remove Paragraph" is clicked, remove the most recently added paragraph.

// Purpose:
// Practice using createElement, appendChild, and removeChild based on user interaction.

// Your JS Answer:

let contentDiv = document.getElementById('content');
let addBtn = document.getElementById('addBtn');
let minusBtn = document.getElementById('minusBtn');

addBtn.addEventListener('click', function() {
    let newPara = document.createElement('p');
    newPara.textContent = 'Here is another the new paragraph!!!!';
    contentDiv.appendChild(newPara);
});

minusBtn.addEventListener('click', function() {
    if (contentDiv.lastChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }
});

// ----------------------------------------------------------------------------

// Exercise 2: Dynamically Create a List with Control Buttons

// Task:
// Create a div container with id="listContainer", an input field with id="itemInput", and a button with id="addItemButton" with the text "Add Item".

// Use JavaScript to:

// When "Add Item" is clicked, create a new li element with the text from the input field and an "Remove" button.
// Add the new li element to a ul list inside listContainer.
// When the "Remove" button on a li element is clicked, remove that specific li element.

// Purpose:
// Practice creating complex elements with inner structures and adding event listeners to dynamically created elements.

// HTML addition for Exercise 2 BUT Ideally Create this with JavaScript instead of just manually copying and pasting the text below:

// <h2>Dynamic List</h2>
// <div id="listContainer">
//   <input type="text" id="itemInput" placeholder="Add an item">
//   <button id="addItemButton">Add Item</button>
//   <!-- Ul element will be created dynamically -->
// </div>





// ----------------------------------------------------------------------------
// Exercise 3: Dynamically Create a Section with a Heading and Text

// Task:
// Create a form with two input fields:

// An input type="text" with id="sectionHeading" for the heading text.
// A textarea with id="sectionText" for the section content.
// A button with id="addSectionButton" with the text "Add Section".
// Add an empty div with id="sectionContainer".

// Use JavaScript to:

// When "Add Section" is clicked, create a new section element.
// Inside the section, create an h2 element with the heading text and a p element with the content.
// Add a "Remove Section" button in each section that removes that specific section when clicked.
// Add the new section to sectionContainer.

// Purpose:
// Practice dynamically creating structured HTML sections and handling their removal.

// HTML addition for Exercise 3 BUT Ideally Create this with JavaScript instead of just manually copying and pasting the text below:

//{
    /* <h2>Dynamic Section Creator</h2>
  <form id="sectionForm">
    <input type="text" id="sectionHeading" placeholder="Section heading" required>
    <textarea id="sectionText" placeholder="Section content" required></textarea>
    <button type="button" id="addSectionButton">Add Section</button>
  </form>
  <div id="sectionContainer"></div> */
  //}
  
  // ----------------------------------------------------------------------------
  