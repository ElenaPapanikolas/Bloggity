const main = document.querySelector('main');






// declaring variable for back button
const backButton = document.querySelector('#back-button');

// event listener to take user back to home page
backButton.addEventListener('click', function() {
    window.location.href = './index.html';
})


function renderBlogPosts() {  // function that iterated through the array
    getBlogPosts();
    for (let i = 0; i < totalPosts.length; i++) {
        const post = totalPosts[i];

        const postBody = document.createElement('div');
        main.appendChild(postBody);

        const postTitle = document.createElement('p');
        postBody.appendChild(postTitle);

        const postAuthor = document.createElement('p');
        postBody.appendChild(postAuthor);

        const postContent = document.createElement('p');
        postBody.appendChild(postContent);

        
        postTitle.textContent = post.title;
        postAuthor.textContent = `Posted by: ${post.username}`;
        postContent.textContent = post.content;

    }
}

renderBlogPosts(); // calling the function