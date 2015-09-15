'use strict';

/*global chrome:false */

chrome.browserAction.setBadgeText({text: '(ツ)'});
chrome.browserAction.setBadgeBackgroundColor({color: '#eae'});

chrome.browserAction.onClicked.addListener(function(aTab) {
  chrome.tabs.query({'url': 'http://chilloutandwatchsomecatgifs.com/'}, (tabs) => {
    if (tabs.length === 0) {
      // There is no catgif tab!
      chrome.tabs.create({'url': 'http://chilloutandwatchsomecatgifs.com/', 'active': true});
    } else {
      // Do something here…
    }
  });
});
