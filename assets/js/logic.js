


let totalPosts = JSON.parse(localStorage.getItem('totalPosts')) || []; // globally declaring the array
function storeBlogPost(blogPost) {  // creating a function to store blog posts in local storage
    totalPosts.push(blogPost);
    localStorage.setItem('totalPosts', JSON.stringify(totalPosts));
}

function getBlogPosts() {      // creating function to retrieve blog posts from local storage
    JSON.parse(localStorage.getItem('totalPosts')) || [];
}    