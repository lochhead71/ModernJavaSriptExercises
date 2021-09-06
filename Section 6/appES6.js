// ES6 Class for Book
class Book {
   constructor(title, author, isbn){
      this.title = title;
      this.author = author;
      this.isbn = isbn;
   }
}

// ES6 Class for UI
class UI {
   addBookToList(book) {
      const list = document.getElementById('book-list');
      const row = document.createElement('tr');
      row.innerHTML = `
         <td>${book.title}</td> 
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="delete">X<a></td>
      `;
      list.appendChild(row);
   }
   showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert ${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      container.insertBefore(div, form);
      setTimeout(function() {
         document.querySelector('.alert').remove();
      }, 3000);
   }
   deleteBook(target) {
      if(target.className === 'delete'){
         target.parentElement.parentElement.remove();
      }
   }
   clearFields() {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
   }
}

// ES6 Static Classes for Local Storage
class Store {
   static getBooks() {
      let books;
      if(localStorage.getItem('books') === null){
         books = [];
      } else {
         books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
   }
   static displayBooks() {
      const books = Store.getBooks();
      books.forEach(function(book){
         const ui = new UI;
         ui.addBookToList(book);
      });
   }
   static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
   }
   static removeBook(isbn) {
      const books = Store.getBooks();
      books.forEach(function(book, index){
         if(book.isbn === isbn){
            books.splice(index, 1);
         }
      });
      localStorage.setItem('books', JSON.stringify(books));
   }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listenters
document.getElementById('book-form').addEventListener('submit',
   function(e){
      const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value
      
      const book = new Book(title, author, isbn);

      const ui = new UI();
      // Validate input
      if(title === '' || author === '' || isbn === '') {
         ui.showAlert('Please fill in all fields', 'error');
      } else {
         // Add book to list
         ui.addBookToList(book);
         //add to Local Storage
         Store.addBook(book);
         ui.showAlert('Book added to list.', 'success');
         ui.clearFields();
      }

      e.preventDefault();
});

// Delete book from list
document.getElementById('book-list').addEventListener('click', function(e){
   const ui = new UI();
   ui.deleteBook(e.target);
   // Remove from Local Storage
   Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
   ui.showAlert('Book removed from list.', 'success');
   e.preventDefault();
});