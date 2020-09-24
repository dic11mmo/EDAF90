export class appmovie {
    Title: string;
    Year: string;
    Genre: string;
    imdbRating: string;
    imdbVotes: string;
    Actors: string;
    Plot: string;
    Poster: string;
    imdbID: string;
    Awards: string;

    constructor(myPoster, myImdbID,
        myTitle, myYear, myGenre) {
        this.Poster = myPoster;
        this.imdbID = myImdbID;
        this.Title = myTitle;
        this.Year = myYear;
        this.Genre = myGenre;
    }
    create(myPoster, myImdbID,
        myTitle, myYear, myGenre) {
        this.Poster = myPoster;
        this.imdbID = myImdbID;
        this.Title = myTitle;
        this.Year = myYear;
        this.Genre = myGenre;
    }

}