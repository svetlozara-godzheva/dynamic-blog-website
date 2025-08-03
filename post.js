import { getPosts } from "./script.js";

let titleName = document.getElementById("title");
let content = document.getElementById("content");
let saveButton = document.getElementById("save-btn");

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

    let post = {
        id: crypto.randomUUID(),
        title: titleName.value,
        content: content.value
    }
    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href = `preview.html?id=${post.id}`;
    console.log(post);
});