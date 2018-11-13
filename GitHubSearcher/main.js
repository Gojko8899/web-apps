
var $input = $('input');


$("button").on("click", function () {

    var request = $.ajax({
        url: "https://api.github.com/search/users?q=" + $input.val(),
        method: "GET",

    });

    request.done(function (msg) {

        console.log(msg)

    });

})


