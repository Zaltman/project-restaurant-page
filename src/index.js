import './style.css';

const website = {
  text1:
    "Deo volente Pizza, which was founded in 1980, is the world leader pizza delivery, with a network of company-owned and owned locations across the world. Deo volente is a group extraordinary people on a quest to become the world's best pizza delivery company. ",
};

function component(divNameString, classNameString, textString) {
  const element = document.createElement(divNameString);
  if (classNameString !== '_') {
    element.classList.add(classNameString);
  }
  if (textString !== undefined) {
    element.textContent = textString;
  }

  return element;
}

// document.body.appendChild(component());

document.querySelector('#content').appendChild(component('div', 'hero-image'));

document
  .querySelector('.hero-image')
  .appendChild(component('div', 'hero-text'));

document
  .querySelector('.hero-text')
  .appendChild(component('h1', '_', 'DEO VOLENTE PIZZA'));

document
  .querySelector('.hero-text')
  .appendChild(component('div', 'pContainer'));

(function () {
  let imgElement = document.createElement('img');
  imgElement.src = '../src/pic4.jpg';
  imgElement.classList.add('pizzaImg');
  document.querySelector('.pContainer').appendChild(imgElement);
})();

document
  .querySelector('.pContainer')
  .appendChild(component('h3', '_', website.text1));
