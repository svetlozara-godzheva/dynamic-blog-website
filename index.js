import { getPosts, findPost } from "./script.js";

let posts = getPosts();
let postsList = document.getElementById("posts");


for (const post of posts) {
    postsList.innerHTML += `<li class="post-item">
                        <a class="post-item-title" href="preview.html?id=${post.id}">
                            ${post.title}
                        </a>
                        <span class="post-item-date">${post.date}</span>
                    </li>`
    console.log(post);
}
