import { getPosts, findPost } from "./script.js";

let titleName = document.getElementById("title");
let content = document.getElementById("content");
let saveButton = document.getElementById("save-btn");

let urlParams = new URLSearchParams(window.location.search);
let postId = urlParams.get("id");
if (postId) {
    let post = findPost(postId);
    if (!post) {
        alert(`No post found with id ${postId}`);
    }
    console.log(post);

    titleName.value = post.title;
    content.value = post.content;
}


saveButton.addEventListener("click", () => {
    if (!titleName.value) {
        titleName.classList.add("invalid");
    }
    if (!content.value) {
        content.classList.add("invalid");
    }
    if (!titleName.value || !content.value) {
        return;
    }

    let posts = getPosts();

    if (postId) {
        for (const post of posts) {
            if (post.id === postId) {
                post.title = titleName.value;
                post.content = content.value;
            }
        }

        localStorage.setItem("posts", JSON.stringify(posts));
        window.location.href = `preview.html?id=${postId}`;
    } else {
        let post = {
            id: crypto.randomUUID(),
            title: titleName.value,
            content: content.value
        }
        posts.push(post);

        localStorage.setItem("posts", JSON.stringify(posts));
        window.location.href = `preview.html?id=${post.id}`;
    }

});