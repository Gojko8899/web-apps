
var $input = $('input');


$("form").on("submit", function (e) {

    e.preventDefault()

    var request = $.ajax({
        url: "https://api.github.com/search/users?q=" + $input.val(),
        method: "GET",

    });

    request.done(function (msg) {

        console.log(msg.items[0].avatar_url)

        let image = $("<img>");

        image.attr("src", msg.items[0].avatar_url)

        $("div").append(image);



    });

})


