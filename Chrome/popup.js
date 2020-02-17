document.addEventListener('DOMContentLoaded', (event) => {
	let myonoffswitch = document.getElementById('myonoffswitch')

	chrome.storage.sync.get(['myonoffswitch'], function(result) {
		console.log('initializing popup state to ' + result.myonoffswitch)
		// https://stackoverflow.com/questions/11131875/what-is-the-cleanest-way-to-disable-css-transition-effects-temporarily
		let animated1 = document.getElementsByClassName("onoffswitch-switch")[0]
		let animated2 = document.getElementsByClassName("onoffswitch-inner")[0]
		animated1.classList.add('notransition')
		animated2.classList.add('notransition')
		myonoffswitch.checked = result.myonoffswitch
		animated1.offsetHeight // Trigger a reflow, flushing the CSS changes
		animated2.offsetHeight // Trigger a reflow, flushing the CSS changes
		animated1.classList.remove('notransition')
		animated2.classList.remove('notransition')
	})

	myonoffswitch.onchange = function() {
		let newValue = myonoffswitch.checked
		chrome.storage.sync.set({myonoffswitch: newValue}, function() {
			console.log('myonoffswitch.checked is set to ' + newValue)
		})
	}
})
