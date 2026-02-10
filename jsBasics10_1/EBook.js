import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value === "" || value == null) {
            throw new Error("File format must be a non-empty valid string");
        }
        this._fileFormat = value;
    }

    static fromBook(book, format) {

        return new EBook(
            book.title,
            book.author,
            book.year,
            format
        );
    }

    printInfo() {
        return `${super.printInfo()}, format: ${this.fileFormat}`;
    }
}

