
import { observe } from 'selector-observer';
import fileIcons from 'file-icons-js';
import { DEFAULT_ICON } from './constants';

chrome.storage.sync.get('isColor', ({ isColor }) => {
  function injectGithub(item) {
    const isFile = item.querySelector('.octicon-file');
    const name = item.querySelector('.js-navigation-open').textContent;
    const icon = document.createElement('span');

    if (isFile) {
      let className = fileIcons.getClass(name) || DEFAULT_ICON;

      if (isColor) {
        className = fileIcons.getClassWithColor(name) || DEFAULT_ICON;
      }

      icon.classList.add('octicon-file', 'gfi', ...className.split(' '));
      item.querySelector('svg').replaceWith(icon);
    }
  }

  observe('.js-navigation-container > .js-navigation-item', {
    add(element) {
      injectGithub(element);
    }
  });
});
