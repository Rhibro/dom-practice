// 1

let h3Element = document.querySelector('h3');
h3Element.innerHTML = 'Potato';

// 2

let homeTag = document.querySelector('a');
homeTag.innerHTML = 'Start';

// 3

let contactTag = document.querySelectorAll('nav a');
contactTag.forEach(link => {
    if (link.textContent === 'Contact') {
        link.textContent = 'Mail us';
    }
});

// 4

let changeInfo = document.querySelectorAll('main p');
if (changeInfo[1]) {
    changeInfo[1].textContent = 'This is the best sweater we have. Not only is it super warm but it is also super stylish!';
}

// 5

let btnOne = document.querySelector('button');

btnOne.style.backgroundColor = '#2A527E';
btnOne.style.color = 'black';

// 6

let backgrdColor = document.querySelectorAll('article');
if (backgrdColor[2]){
    backgrdColor[2].style.backgroundColor = '#2A527E';
}

// 7

let switchAddress = document.querySelectorAll('p');
if (switchAddress[3]) {
    switchAddress[3].textContent = 'Main Street 14  \n 123 45, Happy Town';
}

// 8

// let switchcolor = document.querySelectorAll('p');
// if (switchcolor[0] && switchcolor[1] && switchcolor[2] && switchcolor[3]) {
//     switchcolor[0].style.color = 'blue';
//     switchcolor[1].style.color = 'blue';
//     switchcolor[2].style.color = 'blue';
//     switchcolor[3].style.color = 'blue';
// } 

let switchcolor = document.querySelectorAll('p');
for (let i = 0; i < switchcolor.length; i++) {
    switchcolor[i].style.color = 'blue';
}

// 9

let btnColour = document.querySelectorAll('button');
for (let i = 0; i < btnColour.length; i++) {
    btnColour[i].textContent = 'Add to cart';
}

// 10

