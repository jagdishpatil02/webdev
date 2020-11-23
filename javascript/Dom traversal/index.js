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