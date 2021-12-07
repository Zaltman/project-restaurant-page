function menuPage() {
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
  function imgComponent(strImgSrc) {
    let imgElement = document.createElement('img');
    imgElement.src = strImgSrc;
    imgElement.classList.add('menuPizzaImg');
    document.querySelector('.menuContainer').appendChild(imgElement);
  }

  document
    .querySelector('#content')
    .appendChild(component('div', 'menuContainer'));

  imgComponent('../src/pizza1.jpg');
  imgComponent('../src/pizza2.jpg');
  imgComponent('../src/pizza3.jpg');
  imgComponent('../src/pizza4.jpg');
}

export { menuPage };
