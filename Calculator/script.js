function addition() {
    const firstValue = parseFloat(document.getElementById('firstValue').value);
    const secondValue = parseFloat(document.getElementById('secondValue').value);
    const sum = firstValue + secondValue;
    document.getElementById('result').textContent = isNaN(sum) ? 'Ungültig': sum;
}

function subtraction() {
    const firstValue = parseFloat(document.getElementById('firstValueSub').value);
    const secondValue = parseFloat(document.getElementById('secondValueSub').value);
    const sum = firstValue - secondValue;
    document.getElementById('resultSub').textContent = isNaN(sum) ? 'Ungültig': sum;
}

