class Books {
    constructor (title,author) {
        this.title = title;
        this.author = author;
    }
}


const buttonAdd = document.querySelector('.button-add');
const displayBooks = document.getElementById('books-list');
const removeBtn = document.querySelector('.remove-btn');


function getBooks(){


    showBooks();
   }

function showBooks () {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const newBook = new Books(title, author);
    
    displayBooks.insertAdjacentHTML("afterbegin", `<p>${newBook.title}</p> <p>${newBook.author}</p> <button class="remove-btn">remove</button>`)
}

buttonAdd.addEventListener('click', getBooks);





