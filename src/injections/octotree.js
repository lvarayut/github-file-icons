import fileIcons from 'file-icons-js';
import { DEFAULT_ICON } from '../constants';

export default async function injectIconsOctotree(target) {
  const $items = $('.blob', target);

  // Add icons
  $items.each((index, item) => {
    const $item = $(item);
    const name = $item.parent().contents().get(1).data;
    const className = fileIcons.getClassWithColor(name) || DEFAULT_ICON;
    const hasIcon = $item.find('.gfi').length > 0;

    if (!hasIcon) {
      const $icon = $(`<span class="gfi ${className}"></span>`);
      $item.append($icon);

      // Bind on click for downloading the file
      $icon.on('click', () => {
        $item.click();
      });
    }
  });
}

