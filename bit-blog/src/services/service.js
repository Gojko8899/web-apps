import Post from '../entities/Post'

const fetchPosts = () => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (responseObj) {
            return responseObj.json();
        })
        .then(function (posts) {

            const myPosts = posts.map(function (post, index) {

                return new Post(post.title, post.body)

            })

            return myPosts;
        });
}
export { fetchPosts }