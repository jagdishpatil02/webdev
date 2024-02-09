const accordianData = [
  {
    question: 'what is your name?',
    answer: 'my name is jagdish',
  },
  {
    question: 'what is your age?',
    answer: 'my age is 29',
  },
];

let accordianContainer = document.querySelector('.accordion-container');
accordianData.forEach((data) => {
  let accordian = document.createElement('div');
  accordian.classList.add('accordian-wrapper');

  let question = document.createElement('div');
  question.textContent = data.question;

  let answer = document.createElement('div');
  answer.textContent = data.answer;

  answer.classList.add('hidden');
  answer.classList.add('answer');

  question.appendChild(answer);

  accordian.appendChild(question);
  accordianContainer.appendChild(accordian);
});

let allAccordians = document.querySelectorAll('.accordian-wrapper');

let accordiansArr = Array.from(allAccordians);

accordiansArr.forEach((accordian) => {
  accordian.addEventListener('click', (event) => {
    let answer = accordian.querySelector('.answer');
    answer.classList.toggle('hidden');
  });
});
