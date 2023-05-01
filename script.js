class Books {
    constructor (title,author) {
        this.title = title;
        this.author = author;
    }
}

const authors = document.getElementById('author').value;
const titles = document.getElementById('title').value;
const buttonAdd = document.querySelector('.button-add');
const formSubmit = document.getElementById('submit-form');

function getBooks(){
    titles = this.title;
    authors = this.author;
   }


buttonAdd.addEventListener('submit',getBooks);



