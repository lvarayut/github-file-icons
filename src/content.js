import injectGithub from './injections/github';
import injectOctotree from './injections/octotree';

function init() {
  const observer = new MutationObserver(mutations => {
    for (let i = 0; i < mutations.length; i++) {
      const mutation = mutations[i];
      if (mutation.type === 'childList') {
        const target = mutation.target;
        if ($(target).has('.js-navigation-item')) {
          injectGithub(target);
        }
        if ($(target).has('.blob')) {
          injectOctotree(target);
        }
      }
    }
  });
  observer.observe(document.body, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  });
}

document.addEventListener('pjax:end', init);
init();
