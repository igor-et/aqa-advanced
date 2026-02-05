export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== "string" || value === "" || value == null) {
            throw new Error("Title must be a non-empty valid string");
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== "string" || value === "" || value == null) {
            throw new Error("Author  must be a non-empty valid string");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();

        if (
            typeof value !== "number" ||
            value < 0 ||
            value > currentYear
        ) {
            throw new Error("Year must be a valid number");
        }

        this._year = value;
    }

    static findOldestBook(books) {
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }

    printInfo() {
        return `Full info about a book: ${this.title}, ${this.author}, ${this.year}`;
    }

}

