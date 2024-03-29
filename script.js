document.getElementById('submitBtn').addEventListener('click', function () {
    var inputText = document.getElementById('textInput').value;
    var operation = document.getElementById('operationSelect').value;
    var outputText = document.getElementById('outputText');

    if (operation === 'encrypt') {
        outputText.value = encryptText(inputText);
    } else if (operation === 'decrypt') {
        outputText.value = decryptText(inputText);
    }
});

document.getElementById('copyBtn').addEventListener('click', function () {
    var outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});

function encryptText(text) {
    return text.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

document.getElementById('textInput').addEventListener('input', function () {
    this.value = this.value.toLowerCase();
});

