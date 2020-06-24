import injectGithub from './injections/github';

function init() {
  const observer = new MutationObserver((mutations) => {
    for (let i = 0; i < mutations.length; i++) {
      const mutation = mutations[i];

      if (mutation.type === 'childList') {
        const target = mutation.target;

        if ($(target).has(`.Box-row`).length) {
          injectGithub(target);
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

  injectGithub('body');
}

document.addEventListener('pjax:end', init);
init();
