document.getElementById('operand7').addEventListener('click', function() {
    const content = this.textContent;
    document.getElementById('resultArea').value = content;
});

document.getElementById('operand8').addEventListener('click', function() {
    const content = this.textContent;
    document.getElementById('resultArea').value = content;
});

document.getElementById('operand9').addEventListener('click', function() {
    const content = this.textContent;
    document.getElementById('resultArea').value = content;
});

document.getElementById('operand4').addEventListener('click', function() {
    const content = this.textContent;
    document.getElementById('resultArea').value = content;
});

document.getElementById('operand5').addEventListener('click', function() {
    const content = this.textContent;
    document.getElementById('resultArea').value = content;
});

document.getElementById('operand6').addEventListener('click', function() {
    const content = this.textContent;
    document.getElementById('resultArea').value = content;
});

document.getElementById('operand1').addEventListener('click', function() {
    const content = this.textContent;
    document.getElementById('resultArea').value = content;
});
document.getElementById('operand2').addEventListener('click', function() {
    const content = this.textContent;
    document.getElementById('resultArea').value = content;
});
document.getElementById('operand3').addEventListener('click', function() {
    const content = this.textContent;
    document.getElementById('resultArea').value = content;
});


function updateTimePlaceholder() {
    const displayScreen = document.getElementById('resultArea');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    displayScreen.placeholder = currentTime;
}

// Update the placeholder immediately and then every second
updateTimePlaceholder();
setInterval(updateTimePlaceholder, 1000);