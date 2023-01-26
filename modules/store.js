class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('awesome-books-my-books')) {
      books = JSON.parse(localStorage.getItem('awesome-books-my-books'));
    } else {
      books = [];
    }

    return books;
  }

    static addBooks = (books) => {
      localStorage.setItem('awesome-books-my-books', JSON.stringify(books));
    }

    static removeBooks = () => {
      const stringBookList = localStorage.getItem('awesome-books-my-books');

      if (stringBookList) {
        const parsedBookList = JSON.parse(stringBookList);

        if (Array.isArray(parsedBookList)) {
          localStorage.setItem('awesome-books-my-books', parsedBookList);
        }
      }
    }
}

export default Store;