function navControls() {
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
    .querySelector('body')
    .insertBefore(
      component('button', 'navContainer'),
      document.querySelector('#content')
    );

  document
    .querySelector('.navContainer')
    .appendChild(component('button', 'navButton', 'Main'));

  document
    .querySelector('.navContainer')
    .appendChild(component('button', 'navButton', 'Menu'));
  document
    .querySelector('.navContainer')
    .appendChild(component('button', 'navButton', 'Contact'));
}

export { navControls };
