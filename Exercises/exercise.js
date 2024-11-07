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

// input, button, list container
let userInput = document.getElementById('itemInput');
let addItemButton = document.getElementById('addItemButton');
let listContainer = document.getElementById('listContainer');

// create ul element
const itemList = document.createElement('ul');
listContainer.appendChild(itemList);

// function to add new list item
function addItem() {

    // get user input and trim white space 
    const itemText = userInput.value.trim();
   
    if (itemText !== '') {
        // create new li element
        const newItem = document.createElement('li');
        newItem.textContent = itemText;

        // creates remove button for new item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.marginLeft = '1rem';

        // click event to remove item
        removeButton.addEventListener('click', function() {
            itemList.removeChild(newItem);
        });

        // add the remove button to li element 
        newItem.appendChild(removeButton);

        // add li to ul 
        itemList.appendChild(newItem);

        // clear input field
        userInput.value = ''; 
    }
};

// add click event to button
addItemButton.addEventListener('click', addItem);

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

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

// // select form elements and section container
// let sectionForm = document.getElementById('sectionForm');
// let sectionHeading =document.getElementById('sectionHeading');
// let sectionText = document.getElementById('SectionText');
// let addSectionButton = document.getElementById('addSectionButton');
// let sectionContainer = document.getElementById('sectionContainer');

// // function to add new section
// function addSection() {

//     // get user input and textarea
//     const headingText = sectionHeading.value.trim();
//     const contentText = sectionText.value.trim();

//     // proceed if both fields have values
//     if (headingText !== '' && contentText !== '') {

//         // creates new section
//         const newSection = document.createElement('section');

//         // create h2
//         const headingElement = document.createElement('h2');
//         headingElement.textContent = headingText;

//         // create p
//         const contentElement = document.createElement('p');

//         // create remove section btn
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove Section';
//         removeButton.style.marginTop = "10px"; 
//         removeButton.style.display = "block";

//         // attach click event to remove btn
//         removeButton.addEventListener('click', function() {
//             sectionContainer.removeChild(newSection);
//         });

//         // Append heading, content, and remove button to the section
//         newSection.appendChild(headingElement);
//         newSection.appendChild(contentElement);
//         newSection.appendChild(removeButton);


//         // Append the new section to the section container
//         sectionContainer.appendChild(newSection);

//         // Clear the input fields for new entries
//         sectionHeading.value = "";
//         sectionText.value = "";
//     }
// }

// // Add click event listener to "Add Section" button
// addSectionButton.addEventListener("click", addSection);

// Select form elements and section container
const sectionForm = document.getElementById("sectionForm");
const sectionHeading = document.getElementById("sectionHeading");
const sectionText = document.getElementById("sectionText");
const addSectionButton = document.getElementById("addSectionButton");
const sectionContainer = document.getElementById("sectionContainer");

// Function to add a new section
function addSection() {
  // Get values from the input and textarea fields
  const headingText = sectionHeading.value.trim();
  const contentText = sectionText.value.trim();

  // Proceed only if both fields have values
  if (headingText !== "" && contentText !== "") {
    // Create a new section element
    const newSection = document.createElement("section");

    // Create an h2 element for the heading
    const headingElement = document.createElement("h2");
    headingElement.textContent = headingText;

    // Create a p element for the content
    const contentElement = document.createElement("p");
    contentElement.textContent = contentText;

    // Create a Remove Section button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Section";
    removeButton.style.marginTop = "10px"; // Styling for spacing
    removeButton.style.display = "block"; // Ensure it starts on a new line

    // Attach click event to remove the specific section
    removeButton.addEventListener("click", function() {
      sectionContainer.removeChild(newSection);
    });

    // Append heading, content, and remove button to the section
    newSection.appendChild(headingElement);
    newSection.appendChild(contentElement);
    newSection.appendChild(removeButton);

    // Append the new section to the section container
    sectionContainer.appendChild(newSection);

    // Clear the input fields for new entries
    sectionHeading.value = "";
    sectionText.value = "";
  }
}

// Add click event listener to "Add Section" button
addSectionButton.addEventListener("click", addSection);


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
  