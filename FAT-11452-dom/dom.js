import './main.css';
import { descriptions } from './dictionaries/descriptions';
import { animals } from './dictionaries/animals';
import { innerHTMLTemplates } from './dictionaries/innerHTMLTemplates';

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

animals.forEach((props, i) => {
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
