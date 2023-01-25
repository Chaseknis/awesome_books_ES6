import Book from './modules/book.js';
import BookList from './modules/bookList.js';
import Store from './modules/store.js';
import Clock from './modules/clock.js';

const clock = () => new Clock('date');
const store = () => new Store();

clock();
store();

document.addEventListener('DOMContentLoaded', BookList.displayBooks);

document.querySelector('.book_form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('.input_title').value;
  const author = document.querySelector('.input_author').value;

  const book = new Book(title, author);

  BookList.addBookToList(book);
  BookList.clearFields();
});

document.querySelector('.book_list').addEventListener('click', (e) => {
  BookList.deleteBook(e.target);
});

const navList = document.querySelector('.nav_list');
const navAddNew = document.querySelector('.nav_add_new');
const navContact = document.querySelector('.nav_contact');

const listPage = document.querySelector('.list');
const addNewPage = document.querySelector('.add_new');
const contactPage = document.querySelector('.contact');

navList.addEventListener('click', () => {
  listPage.classList.remove('hidden');
  addNewPage.classList.add('hidden');
  contactPage.classList.add('hidden');
});

navAddNew.addEventListener('click', () => {
  listPage.classList.add('hidden');
  addNewPage.classList.remove('hidden');
  contactPage.classList.add('hidden');
});

navContact.addEventListener('click', () => {
  listPage.classList.add('hidden');
  addNewPage.classList.add('hidden');
  contactPage.classList.remove('hidden');
});
