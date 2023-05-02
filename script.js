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


function getBooks(){


    showBooks();
   }

function showBooks () {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const newBook = new Books(title, author);
    bookShelf.push(newBook);
    console.log(bookShelf);
    
    displayBooks.insertAdjacentHTML("afterbegin", `<div><p>${newBook.title}</p> <p>${newBook.author}</p> <button class="remove-btn">remove</button></div>`)
}

buttonAdd.addEventListener('click', getBooks);



document.addEventListener('click', (e) => {
  const target = e.target.closest('.remove-btn');

  if (target) {
    target.parentElement.remove();
  }
})


