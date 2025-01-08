// Book class
class Book {
  private title: string;
  private author: string;
  private publicationYear: number;

  constructor(title: string, author: string, publicationYear: number) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  // Method to retrieve book details
  getDetails(): { title: string; author: string; publicationYear: number } {
    return {
      title: this.title,
      author: this.author,
      publicationYear: this.publicationYear,
    };
  }

  // Method to update book details
  updateDetails(
    title?: string,
    author?: string,
    publicationYear?: number
  ): void {
    if (title) this.title = title;
    if (author) this.author = author;
    if (publicationYear) this.publicationYear = publicationYear;
  }
}

// Library class
class Library {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  // Method to add a book to the library
  addBook(book: Book): void {
    this.books.push(book);
  }

  // Method to search for books by title or author
  searchBooks(query: string): Book[] {
    return this.books.filter(
      (book) =>
        book.getDetails().title.toLowerCase().includes(query.toLowerCase()) ||
        book.getDetails().author.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Method to display the total number of books
  getTotalBooks(): number {
    return this.books.length;
  }

  // Method to list all books
  listBooks(): void {
    console.log("Library Collection:");
    this.books.forEach((book, index) => {
      const details = book.getDetails();
      console.log(
        `${index + 1}. ${details.title} by ${details.author} (Published: ${
          details.publicationYear
        })`
      );
    });
  }
}

// Example usage:
const library = new Library();

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("Search Results:", library.searchBooks("George"));
console.log("Total Books:", library.getTotalBooks());
library.listBooks();
