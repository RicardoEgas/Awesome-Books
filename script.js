class Books {
    constructor (title,author) {
        this.title = title;
        this.author = author;
    }
}


const buttonAdd = document.querySelector('.button-add');
const displayBooks = document.getElementById('books-list');
const removeBtn = document.querySelector('.remove-btn');
const bookShelf = [];

// Store Class: Handles Storage

   function storeGet() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
    function storeAdd(newBook) {
        const books = storeGet();
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
      }
  


function getBooks(){
     
    storeGet();

    showBooks();
   }

function showBooks () {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const newBook = new Books(title, author);
    bookShelf.push(newBook);
    storeAdd(newBook);
    
    displayBooks.insertAdjacentHTML("afterbegin", `<div><p>${newBook.title}</p> <p>${newBook.author}</p> <button class="remove-btn">remove</button></div>`)
}

buttonAdd.addEventListener('click', getBooks);



document.addEventListener('click', (e) => {
  const target = e.target.closest('.remove-btn');

  if (target) {
    target.parentElement.remove();
  }

})


