chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript({file: "evaluationCode.js"}, function(output){
        console.log('yolo');
        console.log(output);
        
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
        // console.log(evaluatePage());
    });
});