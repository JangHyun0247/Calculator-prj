function showValue(value) {
    var resultElement = document.getElementById("result");
    var text = resultElement.textContent;
    if (text === "0") {
        resultElement.textContent = value;
    } else {
        resultElement.textContent += value;
    }
}

function resetValue() {
    var resultElement = document.getElementById("result");
    resultElement.textContent = "0";
}

