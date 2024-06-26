// JavaScript for the form on the landing page //

// declaring variables for form inputs
const usernameInput = document.querySelector('#username'); 
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const messageP = document.querySelector('#display-message');

// function that displays the message that displays when form is not filled out all the way
function displayMessage(type, message) {
    messageP.textContent = message;
}

// event listener to collect blog post data and take user to blog page
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

// object that holds blog post data    
    let blogPost = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }

    // conditional statement to check form data and display message, prompting user to complete form
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

        storeBlogPost(blogPost); // storing the blog posts       
        window.location.href = './blog.html'; // linking to blog.html page
    }
})

