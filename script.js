class Books {
    constructor (title,author) {
        this.title = title;
        this.author = author;
    }
}


const buttonAdd = document.querySelector('.button-add');
const formSubmit = document.getElementById('submit-form');


function getBooks(){

    const author = document.getElementById('author');
    const title = document.getElementById('title');
    const newBook = new Books(title, author);
    console.log(newBook);

   }

buttonAdd.addEventListener('submit',getBooks());




