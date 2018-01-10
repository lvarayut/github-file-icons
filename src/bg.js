/* global chrome */
import DCS from 'webext-dynamic-content-scripts';

function init() {
  DCS.addToFutureTabs();
  chrome.contextMenus.create({
    title: "Enable Github Enterprise",
    contexts: ["browser_action"],
    onclick: () => {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function(tabs) {
        const activeTab = tabs[0];
        const url = new URL(activeTab.url);
        chrome.permissions.request({
          origins: [
            `${url.protocol}//${url.hostname}/*`
          ]
        }, () => chrome.tabs.reload(activeTab.id));
      });
    },
  });
}
init();

