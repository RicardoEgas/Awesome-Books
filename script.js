class Books {
    constructor (title,author) {
        this.title = title;
        this.author = author;
    }
}


const buttonAdd = document.querySelector('.button-add');
const displayBooks = document.getElementById('books-list');


function getBooks(){

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const newBook = new Books(title, author);
    
    showBooks();
   }

function showBooks () {
    
    displayBooks.insertAdjacentHTML("afterbegin", `<p>${title}</p> <p>${author}</p> <button class="remove-btn">remove</button>`)
}

buttonAdd.addEventListener('click',getBooks);




