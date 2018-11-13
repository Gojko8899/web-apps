import * as data from "./dataModul.js";
import * as ui from "./uiModul.js";

function init() {

    $("#addmovie").on("click", () => {

        const movieObj = ui.Validate();
        const movieObject = data.createMovie(movieObj.movieTitle, movieObj.movieGenre, movieObj.movieLength);
        data.addMovie(movieObject);
        ui.DisplayMovie(movieObject.getInfo());

    })

}


function init2() {

    $("#createprogram").on("click", () => {


        const progObj = ui.Validate1()

        const programObject = data.createProgram(progObj.date);

        ui.DisplayProgram(programObject.getData());



    })




}

export { init, init2 };
