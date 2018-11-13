

var request = new XMLHttpRequest();
request.open('GET', "https:jsonplaceholder.typicode.com/posts", true);



request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);


        for (var i = 0; i < data.length; i++) {


            console.log(data[i])

        }


    } else {
        // We reached our target server, but it returned an error

    }



};



request.onerror = function () {
    // There was a connection error of some sort
};

request.send();






export { request };
