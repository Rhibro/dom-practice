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
