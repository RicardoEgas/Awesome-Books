class Books {
    constructor (title,author) {
        this.title = title;
        this.author = author;
    }
}


const buttonAdd = document.querySelector('.button-add');
const formSubmit = document.getElementById('submit-form');


function getBooks(){

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const newBook = new Books(title, author);
    console.log(newBook);

   }

buttonAdd.addEventListener('click',getBooks);




