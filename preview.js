import { findPost } from "./script.js";

let urlParams = new URLSearchParams(window.location.search);
let postId = urlParams.get("id");

let post = findPost(postId);
if (!post) {
    alert(`No post found with id ${postId}`);
}
console.log(post);

let title = document.getElementById("title");
title.innerHTML = post.title;

let content = document.getElementById("content");
content.innerHTML = post.content;

let editButton = document.getElementById("edit-btn");
editButton.addEventListener("click", () => {
    window.location.href = `post.html?id=${postId}`;
});
