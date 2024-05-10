// declaring variable for back button
const backButton = document.querySelector('#back-button');

// event listener to take user back to home page
backButton.addEventListener('click', function() {
    window.location.href = './index.html';
})

getBlogPosts();
