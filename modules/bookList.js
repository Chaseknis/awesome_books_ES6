import Book from './book.js';

new Book();

class BookList {
  static displayBooks = () => {
    const StoredBooks = [];
    const books = StoredBooks;
    books.forEach((book) => BookList.addBookToList(book));
  }

  static addBookToList = (book) => {
    const list = document.querySelector('.book_list');

    const row = document.createElement('tr');

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><a href="#" class="table_button delete">Remove</a></td>
        `;
    list.appendChild(row);
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