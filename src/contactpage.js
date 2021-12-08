function contactPage() {
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

  document
    .querySelector('#content')
    .appendChild(component('div', 'contactUs', 'CONTACT US'));

  document
    .querySelector('.contactUs')
    .appendChild(component('div', '_', '+12 345 6789'));
}
export { contactPage };
