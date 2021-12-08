import pic4 from '../src/pic4.jpg';

function mainPage() {
  const website = {
    restDescription:
      "Deo volente Pizza, which was founded in 1980, is the world leader pizza delivery, with a network of company-owned and owned locations across the world. Deo volente is a group extraordinary people on a quest to become the world's best pizza delivery company. ",
    restHours: [
      'Monday - Friday : 8 - 22h',
      'Saturday : 8 - 24h',
      'Sunday : 10 - 20h',
    ],
    restLocation: 'Down road 2, Goodville, Kent',
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

  document
    .querySelector('#content')
    .appendChild(component('div', 'hero-image'));

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
    imgElement.src = pic4;
    imgElement.classList.add('pizzaImg');
    document.querySelector('.pContainer').appendChild(imgElement);
  })();

  document
    .querySelector('.pContainer')
    .appendChild(component('h4', 'restDescription', website.restDescription));

  //   document
  //     .querySelector('.hero-text')
  //     .appendChild(component('div', 'subHero', website.restLocation));

  (function () {
    let hoursListElement = document.createElement('ul');
    hoursListElement.classList.add('hoursList');
    document.querySelector('.hero-text').appendChild(hoursListElement);
    for (let i = 0; i < website.restHours.length; i++) {
      let listElement = document.createElement('li');
      listElement.textContent = website.restHours[i];
      document.querySelector('.hoursList').appendChild(listElement);
    }
  })();

  document
    .querySelector('.hoursList')
    .appendChild(component('div', 'restLocation', website.restLocation));
}

export { mainPage };
