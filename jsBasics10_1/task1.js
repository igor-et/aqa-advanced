import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book("\"Im Westen nichts Neues\"", "Erich Maria Remarque", 1929);
const book2 = new Book("\"Білий попіл\"", "Ілларіон Павлюк ", 2018);
const ebook1 = new EBook("Just a new test book from EBook", "Test EBook", 1928, "pdf");

console.log(book1.printInfo());
console.log(book2.printInfo());
console.log(ebook1.printInfo());

const books = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log(`The oldest book is ===> ${oldestBook.printInfo()}`);

const ebookFromBook = EBook.fromBook(book1, "epub");
console.log(`The last task from HW ===> ${ebookFromBook.printInfo()}`);