class Program {
    constructor(date) {

        this.date = new Date();
        this.listOfMovies = [];
        this.numOfMovies = 0;


    }

    getProgramDuration() {
        var programLength = 0;

        // Alternative way to loop arrays
        this.listOfMovies.forEach(function (movie) {
            programLength += movie.length;
        }, this);

        return programLength;
    };

    addMovie(movie) {
        this.listOfMovies.push(movie);

        this.numOfMovies++;

    };

    getData() {
        var date = this.date;
        var movies = this.listOfMovies;
        var programDuration = this.getProgramDuration();
        var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

        var outputStr = dateStr + " num of movies " + this.numOfMovies + " " + " program duration " + programDuration + "min\n";

        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            outputStr += "\t\t" + movie + "\n";
        }

        return outputStr;
    };


}


export default Program;