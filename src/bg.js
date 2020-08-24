/* global chrome */
import 'webext-dynamic-content-scripts';

function init() {
  chrome.contextMenus.create({
    title: "Enable GitHub Enterprise",
    contexts: ["browser_action"],
    onclick: () => {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, (tabs) => {
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

  chrome.contextMenus.create({
    title: "Change icons color",
    contexts: ["browser_action"],
    onclick: () => {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, (tabs) => {
        const activeTab = tabs[0];
        chrome.storage.sync.get('isColor', ({ isColor }) => {
          chrome.storage.sync.set({'isColor': !isColor}, () => chrome.tabs.reload(activeTab.id));
        });
      });
    },
  });
}
init();

