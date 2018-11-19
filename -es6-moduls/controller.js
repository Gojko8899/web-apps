import * as data from "./dataModul.js";
import * as ui from "./uiModul.js";

function init() {


    $("#addmovie").on("click", () => {

        const movieObj = ui.Validate();
        const movieObject = data.createMovie(movieObj.movieTitle, movieObj.movieGenre, movieObj.movieLength);
        data.addMovie(movieObject);
        ui.DisplayMovie(movieObject.getInfo());
        ui.addMovieToSelect(movieObject.getInfo())

    })



    $("#createprogram").on("click", () => {


        const progObj = ui.Validate1()

        const programObject = data.createProgram(progObj.date);

        ui.DisplayProgram(programObject.getData());

        ui.addProgramToList(programObject.getData());

        console.log(ui.Validate)



    })



    $("#addMovieToProgram").on("click", () => {



        const movieObj1 = ui.Validate();
        const movieObject1 = data.createMovie(movieObj1.movieTitle, movieObj1.movieGenre, movieObj1.movieLength);


        const progObj1 = ui.Validate1();
        const programObject1 = data.createProgram(progObj1.date);


        programObject1.addMovie(movieObject1);

        console.log(programObject1.getData())





    })



}




export { init };
