let lastRightClickedElement = null;

document.addEventListener(
	"contextmenu",
	function (event) {
		lastRightClickedElement = event.target;
	},
	true
);

chrome.runtime.onMessage.addListener((message) => {
	if (message.action === "selectElementText") {
		if (lastRightClickedElement) {
			selectElementText(lastRightClickedElement);
		}
	}
});

function selectElementText(element) {
	const range = document.createRange();
	const selection = window.getSelection();

	if (element.textContent.trim().length > 0) {

		range.selectNodeContents(element);
		selection.removeAllRanges();
		selection.addRange(range);
	}
}
