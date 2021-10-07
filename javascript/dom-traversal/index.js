// const grandparent = document.getElementById('grandparent');

// querySelector and querySelectorAll ex
const grandparent = document.querySelector('.grandparent');
const parents = Array.from(document.querySelectorAll('.parent'));

parents.forEach(changeColor);

function changeColor(element) {
    element.style.backgroundColor = '#f1c40f';
}

// find child and change color

const allChilds =  document.querySelectorAll('.child');
childNodes = Array.from(allChilds);

childNodes.forEach(changeChildNodesColor);

function changeChildNodesColor(element) {
    element.style.backgroundColor = '#2c3e50';
}

// find next sibling of an element
const childOne = document.querySelector('#childOne');
const childTwo = childOne.nextElementSibling;

changeSiblingColor(childTwo)
function changeSiblingColor (element) {
    element.style.backgroundColor = '#2ecc71';
}

// find parent element

const childThree =  document.querySelector('#childThree');
const parentElement = childThree.closest('.grandparent');
changeParentColor(parentElement);
function changeParentColor (element) {
    element.style.backgroundColor = '#e74c3c';
}

// add event listener

let divs  = document.querySelectorAll('div');
document.addEventListener('click', e =>{
    if(e.target.matches('div')){
        console.log('hi');
    }
});
 

const el  = document.createElement('div');
el.style.width  = '200px';
el.style.height  = '200px';
el.style.marginTop  = '200px';


el.style.backgroundColor = '#000'
document.body.append(el);


// event bubbling

let grandparentBubble =  document.querySelector('#grandparent');
grandparentBubble.addEventListener('click', printHI);

setTimeout(() => {
    grandparentBubble.removeEventListener('click', printHI)
}, 2000);

function printHI() {
    console.log('print hi');
}

let parentBubble =  document.querySelector('#parent');
parentBubble.addEventListener('click', e => {
    console.log('parent bubble');
})

// event capturing

// let grandparentCapture =  document.querySelector('#grandparent');
// grandparentCapture.addEventListener('click', e => {
//     console.log('grandparent capture');
// }, {capture: true})

// let parentCapture =  document.querySelector('#parent');
// parentCapture.addEventListener('click', e => {
//     console.log('parent capture');
// }, {capture: true})


