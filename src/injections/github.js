import fileIcons from 'file-icons-js';
import { DEFAULT_ICON } from '../constants';

export default function injectIconsGithub(target) {
  const $items = $('.js-navigation-item', target);
  $items.each((index, item) => {
    const $item = $(item);
    const isFile = $item.find('.octicon-file-text').length > 0;
    const name = $item.find('.js-navigation-open').text();
    const $icon = $item.find('.icon');

    if (isFile) {
      const className = fileIcons.getClassWithColor(name) || DEFAULT_ICON;
      $icon.addClass(`gfi ${className}`);
    }
  });
}

