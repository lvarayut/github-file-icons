import fileIcons from 'file-icons-js';
import { DEFAULT_ICON, DEFAULT_RELEASE_ICON } from '../constants';

function injectExplorer(target) {
  chrome.storage.sync.get('isColor', ({ isColor }) => {
    const $items = $('.js-navigation-item', target);
    $items.each((index, item) => {
      const $item = $(item);
      const isFile = $item.find('.octicon-file').length > 0;
      const isSvg = $item.find('.octicon-file-text').length > 0;
      const name = $item.find('.js-navigation-open').text();
      const $icon = $item.find('.icon');

      if (isFile || isSvg) {
        let className;
        if (isColor) {
          className = fileIcons.getClassWithColor(name) || DEFAULT_ICON;
        } else {
          className = fileIcons.getClass(name) || DEFAULT_ICON;
        }
        $icon.addClass(`gfi ${className}`);

        if (isSvg) {
          $item.find('svg').remove()
        }
      }
    });
  });
}

function injectReleases(target) {
  chrome.storage.sync.get('isColor', ({ isColor }) => {
    const $items = $('.release-main-section .Box-body > a.d-flex', target);
    $items.each((index, item) => {
      const $item = $(item);
      const isPackage = $item.find('.octicon-package').length > 0;
      const name = $item.find('span').text();

      if (isPackage) {
        let className;
        if (isColor) {
          className = fileIcons.getClassWithColor(name) || DEFAULT_RELEASE_ICON;
        } else {
          className = fileIcons.getClass(name) || DEFAULT_RELEASE_ICON;
        }
        if (className == 'zip-icon') className = DEFAULT_RELEASE_ICON;
        $item.addClass(`gfi-release icon ${className}`);
      }
    });
  });
}

export default {
  explorer: injectExplorer,
  releases: injectReleases
};
