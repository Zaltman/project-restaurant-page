import pizza1 from '../src/pizza1.jpg';
import pizza2 from '../src/pizza2.jpg';
import pizza3 from '../src/pizza3.jpg';
import pizza4 from '../src/pizza4.jpg';
function menuPage() {
  let description = [
    'Neapolitan Pizza, 8$',
    'Chicago Pizza, 6$',
    'Sicilian Pizza, 7$',
    'Greek Pizza, 9$',
  ];

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
  let pizzaNumber = 0;
  function imgComponent(strImgSrc) {
    let imgElement = document.createElement('img');
    imgElement.src = strImgSrc;
    imgElement.classList.add('menuPizzaImg');
    document.querySelector('.menuContainer').appendChild(imgElement);
    document.querySelector('.menuContainer').append(description[pizzaNumber]);
    pizzaNumber++;
  }

  document
    .querySelector('#content')
    .appendChild(component('div', 'menuContainer'));

  imgComponent(pizza1);
  imgComponent(pizza2);
  imgComponent(pizza3);
  imgComponent(pizza4);
}

export { menuPage };
