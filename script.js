export function getPosts() {
    let postsArray = [];
    let postsJson = localStorage.getItem("posts");
    if (postsJson) {
        postsArray = JSON.parse(postsJson);
    }
    return postsArray;
}

export function findPost(postId) {
    let posts = getPosts();

    let postResult = posts.filter((post) => {
        return post.id === postId;
    });

    if (postResult.length === 0) {
        return null;
    }

    let post = postResult[0];

    return post;
}