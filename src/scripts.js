document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    const displayDiv = document.getElementById('display');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            displayDiv.textContent = this.textContent + ' was clicked';
        });
    });
});