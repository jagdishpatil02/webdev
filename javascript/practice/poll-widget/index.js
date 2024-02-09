let pollWidgetData = [
  {
    question: 'What is your favourite food?',
    children: [
      {
        type: 'food',
        value: 'Momos',
      },
      {
        type: 'food',
        value: 'Samosa',
      },
      {
        type: 'food',
        value: 'Kachori',
      },
      {
        type: 'food',
        value: 'PaniPuri',
      },
      {
        type: 'cricketer',
        value: 'Sachin',
      },
    ],
  },
  {
    question: 'What is your favourite Cricketer?',
    children: [
      {
        type: 'cricketer',
        value: 'Sachin',
      },
      {
        type: 'cricketer',
        value: 'Virat',
      },
      {
        type: 'cricketer',
        value: 'Dhoni',
      },
    ],
  },
];

let pollwidgetContainer = document.querySelector('.pollwidget-container');

pollWidgetData.forEach((data) => {
  let div = document.createElement('div');
  let headingElement = document.createElement('h3');
  headingElement.textContent = data.question;
  div.appendChild(headingElement);

  if (data.children) {
    data.children.forEach((child) => {
      let label = document.createElement('label');
      let span = document.createElement('span');

      let input = document.createElement('input');
      input.type = 'radio';
      input.name = child.type;
      input.value = child.value;
      span.textContent = child.value;
      label.appendChild(input);
      label.appendChild(span);

      div.appendChild(label);
      pollwidgetContainer.appendChild(div);
    });
  }
});

let submitBtn = document.querySelector('#submit');
let result = document.querySelector('#result');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let selectedFood = document.querySelectorAll('input:checked');
  let selectedArr = Array.from(selectedFood);
  selectedArr.forEach((selectedValues) => {
    let selectedData = document.createElement('div');
    let question = `Your favorite ${selectedValues.name} is ${selectedValues.value}`;
    let selectedValue = document.createElement('span');
    selectedValue.textContent = question;
    selectedData.appendChild(selectedValue);
    result.appendChild(selectedData);
  });
});
