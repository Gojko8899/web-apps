

document.querySelector("button").addEventListener("click", function () {
    var request = new XMLHttpRequest();
    request.open('GET', "https://dog.ceo/api/breeds/image/random");



    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            let image = document.createElement('img')
            image.setAttribute("src", data.message)

            let paragraph = document.querySelector('p');
            paragraph.appendChild(image);
        };
    }

    request.send();
})








