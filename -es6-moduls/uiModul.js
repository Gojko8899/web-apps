
const title = $("#title");
const genre = $("#select");
const length = $("#length");
const movieList = $("#resdiv");

const date = $("#datelbl");
const progList = $("#progdiv")


export const Validate = () =>

    ({

        movieTitle: title.val(),

        movieGenre: genre.val(),

        movieLength: length.val()

    })

export const DisplayMovie = movie => {

    const para = $("<p></p>").text(movie);

    movieList.append(para);

}

export const Validate1 = () =>

    ({

        progData: date.val()


    })


export const DisplayProgram = program => {


    const para = $("<p></p>").text(program);

    progList.append(para);


}






