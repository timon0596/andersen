import './main.css';

const innerHTMLTemplates = {
  card: ({
    name, type, classis, squad,
  }) => `<h2 class="card__name">
      ${name}
    </h2>
    <div class="card__body">
      <div class="card__heading">
        <h3>Тип:</h3>
        <div class="card__text">
          ${type}
        </div>
      </div>
      <div class="card__heading">
        <h3>Класс:</h3>
        <div class="card__text">
          ${classis}
        </div>
      </div>
      <div class="card__heading">
        <h3>Отряд:</h3>
        <div class="card__text">
          ${squad}
        </div>
      </div>
    </div>`,
  modal: ({ name, description }) => `
    <div class="modal__mask"></div>
    <div class="modal__body">
      <div class="modal__header">
        <h2 class="modal__name">${name}</h2>
        <div class="modal__close">&times;</div>
      </div>
      <div class="modal__description">${description}</div>
    </div>`,
};
function card({ props = {}, i }) {
  const el = document.createElement('div');
  el.classList.add('card');
  el.setAttribute('data-open', String(i));
  el.innerHTML = innerHTMLTemplates.card(props);
  return el;
}

function modal({ props = {}, i }) {
  const el = document.createElement('div');
  el.style.display = 'none';
  el.classList.add('modal');
  el.setAttribute('data-open', String(i));
  el.innerHTML = innerHTMLTemplates.modal(props);
  return el;
}
const body = document.querySelector('body');
const root = document.querySelector('.root');
const descriptions = [
  {
    name: 'лев',
    description: 'Наряду с тигром — самая крупная из ныне живущих кошек, масса некоторых самцов может достигать 250 кг. Трудно сказать достоверно, массивнее ли крупнейшие подвиды льва, чем крупнейшие подвиды тигров.',
  },
  {
    name: 'Китовая акула',
    description: 'Китовая акула, в отличие от большинства других акул, питается преимущественно одним планктоном, отцеживая корм из воды с помощью особого цедильного аппарата, образованного жаберными дугами',
  },
];
const animals = [
  {
    name: 'лев',
    type: 'хордовые',
    classis: 'млекопитающие',
    squad: 'хищные',
  },
  {
    name: 'Китовая акула',
    type: 'хордовые',
    classis: 'хрящевые рыбы',
    squad: 'воббегонгообразные',
  },
].forEach((props, i) => {
  const el = card({ props, i });
  const modalWindow = modal({ props: descriptions[i], i });
  root.append(el);
  body.append(modalWindow);
});

const closeButtons = document.querySelectorAll('.modal');
const cards = document.querySelectorAll('.card');
closeButtons.forEach((el, i) => {
  el.addEventListener('click', closeButtonClickHandler);
});
cards.forEach((el, i) => {
  el.addEventListener('click', cardClickHandler);
});
function closeButtonClickHandler(e) {
  const buttonCondition = [...e.target.classList].indexOf('modal__close') !== -1;
  const backgroundCondition = [...e.target.classList].indexOf('modal__mask') !== -1;
  if (buttonCondition || backgroundCondition) {
    e.currentTarget.style.display = 'none';
  }
}
function cardClickHandler(e) {
  document.querySelector(`.modal[data-open="${e.currentTarget.getAttribute('data-open')}"]`).style.display = '';
}
