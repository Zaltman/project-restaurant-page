import { contactPage } from './contactpage';
import { mainPage } from './mainpage';
import { menuPage } from './menupage';

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
    .appendChild(component('button', 'navButton', 'Home'))
    .addEventListener('click', () => {
      clearContentDom();
      mainPage();
    });

  document
    .querySelector('.navContainer')
    .appendChild(component('button', 'navButton', 'Menu'))
    .addEventListener('click', () => {
      clearContentDom();
      menuPage();
    });

  document
    .querySelector('.navContainer')
    .appendChild(component('button', 'navButton', 'Contact'))
    .addEventListener('click', () => {
      clearContentDom();
      contactPage();
    });
}

function clearContentDom() {
  let content = document.querySelector('#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

export { clearContentDom };
export { navControls };
