
class Movie {
    constructor(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

    }
    getInfo() {

        return 'TITLE: ' + this.title + " GENRE: " + this.genre + ' LENGTH: ' + this.length
    }

}

export default Movie;