let initialContent = [
    {
        id: "b82f171e-5b03-4320-a29b-bfd9fcc15782",
        title: "Markdown Example",
        content: "## An h2 header starts with \"##\" \n\n Paragraphs are separated by a blank line.\n\n 2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\n\nlook like:  \n\n* this one  \n\n* that one  \n\n* and this one\n\n### Image\n\n![Stock Image](https://t3.ftcdn.net/jpg/01/90/57/06/360_F_190570691_0Mexoj7YkSt6VIIzznLKDCIY0gBSuSpk.jpg \"Stock Image\")\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ex quam. \n\nAenean commodo lorem id tincidunt faucibus. \n\nMauris id mauris quis sem luctus lobortis id et enim. Aliquam ultricies sem vel lorem lobortis luctus. \n\nInteger odio turpis, aliquam in nulla ac, venenatis molestie eros. Nunc ac egestas elit. \n\nNunc posuere maximus diam, at gravida nisl scelerisque malesuada. \n\nInteger sit amet nibh id dui venenatis pellentesque. Sed vel enim felis. Sed quis vehicula leo. \n\nSed ullamcorper cursus efficitur.",
        date: "08/03/2025"
    },
    {
        id: "b82f171e-5b03-4320-a29b-bfd9fcc1578a",
        title: "Lorem ipsum dolor sit amet",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in urna tempus, vestibulum dui at, vulputate dolor. Cras non porttitor metus. Proin vestibulum faucibus nulla a porta. In finibus iaculis placerat. Nulla rhoncus hendrerit orci quis molestie. Nulla nibh leo, vestibulum eu fringilla vitae, sollicitudin eu odio. Quisque laoreet at risus in ultricies. Quisque fringilla pretium tellus non aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\n\n Vestibulum dignissim molestie felis quis auctor. Phasellus quam ipsum, ultricies sit amet ornare at, egestas ut nunc. Aenean vel varius velit. Proin pulvinar leo sit amet aliquam ultrices. Pellentesque non purus non tortor hendrerit feugiat quis eget neque. Ut lacinia risus risus, quis egestas erat faucibus at. Proin sed tempor leo. Ut volutpat aliquet urna. Duis libero nulla, feugiat nec urna eget, interdum molestie nibh. Vivamus eu facilisis metus, et dictum risus.",
        date: "08/04/2025"
    },
    {
        id: "b82f171e-5b03-4320-a29b-bfd9fcc1578b",
        title: "Blogger of the day",
        content: "![IHopeThisLoads](https://f.hubspotusercontent20.net/hubfs/165225/Meme_maker_blog_thumb.png)",
        date: "08/04/2025"
    }
];

export function getPosts() {
    let postsArray = [];
    let postsJson = localStorage.getItem("posts");
    if (postsJson) {
        postsArray = JSON.parse(postsJson);
    } else {
        localStorage.setItem("posts", JSON.stringify(initialContent));
        postsArray = initialContent;
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

