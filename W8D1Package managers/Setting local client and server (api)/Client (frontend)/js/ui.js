const $main = $('main');

const displayPosts = (listOfPostObjects) => {

    for (let i = 0; i < listOfPostObjects.length; i++) {
        const singlePost = listOfPostObjects[i];
        const { id, title, intro } = singlePost;

        const $postArticle = $(
            `<article data-id="${id}" class="post">
                <div class="title">
                    <h2>${title}</h2>
                </div>

                <div class="intro">
                    <p>${intro}</p>
                </div>
            </article>`
        );

        $main.append($postArticle);
    }

}

export { displayPosts };