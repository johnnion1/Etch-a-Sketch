/* (for InputtedNumber: repeat the following, putting it in grid formation:) */

const ff  = document.querySelector('#grid'); 
const square = document.createElement('div');
square.classList.add('square');

function createSquares(numb) {
while (numb > 0) {
    let createDiv = document.createElement('div');
    createDiv.classList.add('square');
    ff.appendChild(createDiv);
    numb--
    }
}

createSquares(5);
function runGrid(x,y) {
    for(x-1; x >0; x--) {


        let createDiv = document.createElement('div');
        createDiv.classList.add('square');
        createDiv.classList.add('xValue');
        ff.appendChild(createDiv); 
    }
    for(y-1; y >0; y--) {


        let createDiv = document.createElement('div');
        createDiv.classList.add('square');
        createDiv.classList.add('yValue');
        ff.appendChild(createDiv); 
    }
}

/* runGrid(16,16); */