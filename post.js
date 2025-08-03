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

    let postsArray = localStorage.getItem("posts");
    if (!postsArray) {
        postsArray = [];
    }

    let post = {
        id: crypto.randomUUID(),
        title: titleName.value,
        content: content.value
    }

    postsArray.push(post);
    localStorage.setItem("posts", postsArray);

    console.log(post);
});