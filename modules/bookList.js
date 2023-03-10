import Book from './book.js';
import Store from './store.js';

const book = () => new Book('date');

book();

class BookList {
  static storedBooks = []

  static displayBooks = () => {
    const books = Store.getBooks();
    this.storedBooks = books;
    this.drawBooks();
  }

  static addBookToList = (book) => {
    BookList.storedBooks.unshift(book);
    BookList.drawBooks();
  }

  static drawBooks = () => {
    const list = document.querySelector('.book_list');
    list.innerHTML = '';

    this.storedBooks.forEach((book, index) => {
      const row = document.createElement('tr');

      row.innerHTML = `
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td><a href="#" class="table_button delete" id="remove_btn_${index}">Remove</a></td>
          `;

      list.appendChild(row);
    });

    Store.addBooks(this.storedBooks);
  }

  static deleteBook = (e) => {
    const books = Store.getBooks();

    if (e.classList.contains('delete')) {
      e.parentElement.parentElement.remove();
    }

    books.forEach((book, index) => {
      if (e.id === `remove_btn_${index}`) {
        books.splice(index, 1);
      }
    });
    this.storedBooks = books;
    Store.addBooks(this.storedBooks);
    this.drawBooks();
    BookList.displayBooks();
  }

  static clearFields = () => {
    document.querySelector('.input_title').value = '';
    document.querySelector('.input_author').value = '';
  }
}

export default BookList;