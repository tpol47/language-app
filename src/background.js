chrome.browserAction.onClicked.addListener(function() {
    chrome.tables.create({'url':"chrome://newtab"})
})