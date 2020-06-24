import fileIcons from 'file-icons-js';
import { DEFAULT_ICON } from '../constants';

export default function injectIconsGithub(target) {
  chrome.storage.sync.get('isColor', ({ isColor }) => {
    const $items = $('.js-navigation-item', target);
    $items.each((index, item) => {
      const $item = $(item);
      const isFile = $item.find('.octicon-file').length > 0;
      const name = $item.find('.js-navigation-open').text();
      const $icon = $item.find('> :first-child');

      if (isFile) {
        let className = fileIcons.getClass(name) || DEFAULT_ICON;

        if (isColor) {
          className = fileIcons.getClassWithColor(name) || DEFAULT_ICON;
        }

        $icon.addClass(`gfi ${className}`);
        $item.find('svg').remove();
      }
    });
  });
}
