document.getElementById("fetch-text").addEventListener("click", function() {

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getFormattedText" }, (response) => {

            document.getElementById("formatted-text").value = response.formattedText;
        });
    });
});
