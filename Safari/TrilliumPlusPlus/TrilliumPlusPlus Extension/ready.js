const listOfElements = [
	// find
	document.getElementById("enabledFind"),
	document.querySelector("#disabledFind > a"),

	// clear
	document.getElementById("enabledClear"),
	document.querySelector("#disabledClear > a"),

	// new family
	document.getElementById("enabledNewFamily"),
	document.querySelector("#disabledNewFamily > a"),

	// save
	document.getElementById("enabledSave"),
	document.querySelector("#disabledSave > a"),

	// print
	document.getElementById("enabledPrint"),
	document.querySelector("#disabledPrint > a"),

	// appointments
	document.getElementById("enabledAppointment"),
	document.querySelector("#disabledAppointment > a"),

	// family info
	document.getElementById("enabledFamilyInfo"),
	document.querySelector("#disabledFamilyInfo > a"),

	// sibling info
	document.getElementById("enabledSiblingInfo"),
	document.querySelector("#disabledSiblingInfo > a"),

	// close
	document.getElementById("enabledClose"),
	document.querySelector("#disabledClose > a"),

	// add
	document.getElementById("enabledAdd"),
	document.querySelector("#disabledAdd > a")
]

const listOfHide = [
	// delete
	document.getElementById("enabledDelete"),
	document.querySelector("#disabledDelete > a")
]

const findStudentFields = [
	document.getElementById("ptFindStudent_form_lastName"),
	document.getElementById("ptFindStudent_form_familyId"),
	document.getElementById("ptFindStudent_form_firstName")
]

const findFamilyFields = [
	document.getElementById("ptFindFamily_form_lastName"),
	document.getElementById("ptFindFamily_form_familyId"),
	document.getElementById("ptFindFamily_form_firstName"),
	document.getElementById("ptFindFamily_form_areaCode"),
	document.getElementById("ptFindFamily_form_phoneNo")
]

function enableFindByReturn(elems) {
	elems.forEach(elem => {
		elem.addEventListener("keyup", function(e) {
			if (e.keyCode == 13) {
				location.href = "javascript:clickFindBtn(); void 0"
			}
		})
	})
}

function render(turnOn) {
	console.log("Rendering with " + turnOn)
	listOfElements.forEach(elem => {
		editElement(elem, turnOn, undefined)
	})

	listOfHide.forEach(elem => {
		editElement(elem, undefined, turnOn)
	})
}

function editElement(elem, shouldEnlarge, shouldHide) {
	if (elem == null) {
		return
	}

	// borderSpacing
	elem.closest("table").style.borderSpacing = (shouldEnlarge || shouldHide) ? "20px 5px" : null

	// enlarge
	if (shouldEnlarge == true) {
		elem.style.fontSize = "20px"
		elem.firstElementChild.width = 20
		elem.firstElementChild.height = 20
	} else if (shouldEnlarge == false) {
		elem.style.fontSize = null
		elem.firstElementChild.width = elem.firstElementChild.naturalWidth
		elem.firstElementChild.height = elem.firstElementChild.naturalHeight
	}

	// hide
	if (shouldHide == true) {
		elem.style.display = "none"
	} else if (shouldHide == false) {
		elem.style.display = null
	}
}

render(true)

// page specific actions
switch (document.location.pathname) {
	case "/twebboard/TWEBESL/ptFindStudent.action":
		// Enable "Return" key to find
		enableFindByReturn(findStudentFields)
		break
	case "/twebboard/TWEBESL/ptFindFamily.action":
		// Enable "Return" key to find
		enableFindByReturn(findFamilyFields)
		break
	default:
		break
}
