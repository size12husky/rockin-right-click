chrome.contextMenus.create({
	id: "selectElementText",
	title: "Select Element Text",
	contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "selectElementText") {
		chrome.tabs.sendMessage(tab.id, { action: "selectElementText" });
	}
});
