// declaring variable for form inputs
const usernameInput = document.querySelector('#username'); 
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const messageP = document.querySelector('#display-message');

// function that displays the message that displays when form is not filled out all the way
function displayMessage(type, message) {
    messageP.textContent = message;
}


// function that 
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

// object that holds blog post data    
    let blogPost = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }

    // conditional statement to check form data
    if (blogPost.username === '') {
        displayMessage('error', 'Please enter your username.');
    }
    else if (blogPost.title === '') {
        displayMessage('error', 'Please enter your title.');
    }
    else if (blogPost.content === '') {
        displayMessage('error', 'Please enter your content.');
    }
    else {

        window.location.href = './blog.html';
    }
})

