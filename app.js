const button1 = document.getElementById('one');

button1.onclick = function() {
    alert('You clicked the first button! Congrats!')
};

const h3 = document.querySelector('h3');

h3.addEventListener('mouseover', () => {
    alert('You hovered over the h3 element! Congrats!')
},{once: true});

const form = document.querySelector('form');

form.addEventListener('submit', () => {
    const entry = form.elements.entry.value;
    alert('${entry}');
});