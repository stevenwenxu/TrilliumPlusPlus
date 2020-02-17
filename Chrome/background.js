chrome.runtime.onInstalled.addListener(function() {
 	chrome.storage.sync.set({myonoffswitch: true}, function() {
 		console.log("The plugin is active, set to on by default")
 	})
 	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
 		chrome.declarativeContent.onPageChanged.addRules([{
 			conditions: [new chrome.declarativeContent.PageStateMatcher({
 				pageUrl: {hostEquals: 'webapps.ocdsb.ca'},
 			})],
 			actions: [new chrome.declarativeContent.ShowPageAction()]
 		}])
 	})
})
