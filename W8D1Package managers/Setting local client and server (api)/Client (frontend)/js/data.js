const BASE_ENDPOINT = 'http://127.0.0.1:3000';

const fetchData = (onSuccess) => {

    fetch(BASE_ENDPOINT)
        .then(function (response) {
            return response.json();
        })
        .then(function (listOfPosts) {
            console.log(listOfPosts)

            onSuccess(listOfPosts);
        });


}

export { fetchData };