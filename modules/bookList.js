import Book from './book.js';
import Store from './store.js';

new Book();

class BookList {
  static storedBooks = []

  static displayBooks = () => {

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

  static deleteBook = (el) => {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('.input_title').value = '';
    document.querySelector('.input_author').value = '';
  }
}

export default BookList;