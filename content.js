function extractAndFormatText() {
    let data = document.getElementsByClassName("segment-text");
    let formatted_data = "";

    for (let i = 0; i < data.length; i++) {
        formatted_data += " " + data[i].innerText;
    }

    return formatted_data;
}


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getFormattedText") {
        let formattedText = extractAndFormatText();
        sendResponse({ formattedText: formattedText });
    }
});
