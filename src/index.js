const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

const pageTurn = (pageName) => {
    location.href = pageName;
};

const extLink = (pageURL) => {
    window.open(pageURL, '_blank');
};

btn1.addEventListener('click', () => {
    pageTurn('index.html')
})
btn2.addEventListener('click', () => {
    extLink('https://www.danieljama.com')
})
btn3.addEventListener('click', () => {
    extLink('https://infosec.exchange/@jamahadrummer')
})
btn4.addEventListener('click', () => {
    extLink('https://www.github.com/jamahadrummer')
})
btn5.addEventListener('click', () => {
    extLink('https://www.flickr.com/jamahadrummer')
})
btn6.addEventListener('click', () => {
    extLink('https://www.instagram.com/jamahadrummer')
})