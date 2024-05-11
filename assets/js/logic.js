
const themebutton = document.querySelector('.theme-button'); // getting access to the button to be able to change themes
const body = document.querySelector('body'); // getting access to the body
const alien = document.querySelector('.alien'); // getting access to the alien button
const link = document.querySelector('.light-link'); // getting access to portfolio link 


let totalPosts = JSON.parse(localStorage.getItem('totalPosts')) || []; // globally declaring the array
function storeBlogPost(blogPost) {  // creating a function to store blog posts in local storage
    totalPosts.push(blogPost);
    localStorage.setItem('totalPosts', JSON.stringify(totalPosts));
}

function getBlogPosts() {      // creating function to retrieve blog posts from local storage
    JSON.parse(localStorage.getItem('totalPosts')) || [];
}    



function setDarkMode() {
    body.setAttribute('class', 'dark-mode');
    alien.setAttribute('src', 'assets/images/aliendark.png');
    link.setAttribute('class', 'dark-link');
}

function setLightMode() {
    body.setAttribute('class', 'light-mode');
    alien.setAttribute('src', 'assets/images/alienlight.png');
    link.setAttribute('class', 'light-link');
}

let mode = 'light';

themebutton.addEventListener('click', function() {  // event listener that listens for a click, and changes light and dark mode
    if (mode === 'light') {
        mode = 'dark';
        setDarkMode();
        localStorage.setItem('storedMode', mode);
    } else {
        mode = 'light';
        setLightMode();
        localStorage.setItem('storedMode', mode);
    }
});

function saveMode() {
    let storedMode = localStorage.getItem('storedMode');
    if (storedMode !== null) {
        mode = storedMode;
    } else {
        localStorage.setItem('storedMode', mode);
    }

    if (mode === 'light') {
        setLightMode()
    } else {
        setDarkMode()
    }
 }

saveMode();