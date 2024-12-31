const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btnInfosec = document.getElementById('btnInfosec');
const btn4 = document.getElementById('btnBsky');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');

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
btnInfosec.addEventListener('click', () => {
    extLink('https://infosec.exchange/@jamahadrummer')
})
btnBsky.addEventListener('click', () => {
    extLink('https://bsky.app/profile/jamahadrummer.com')
})
btn5.addEventListener('click', () => {
    extLink('https://www.github.com/jamahadrummer')
})
btn6.addEventListener('click', () => {
    extLink('https://www.flickr.com/jamahadrummer')
})
btn7.addEventListener('click', () => {
    extLink('https://www.instagram.com/jamahadrummer')
})