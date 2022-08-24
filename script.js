let myLibrary = [];

function Book(title, author, num_pages, read){
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.num_pages} pages, ${this.read ? 'Already read':'not yet read'}`
}

let title, author, num_pages, read;

const addBtn = document.querySelector('#add-book');
const overlay = document.querySelector(".overlay");
const overlayForm = document.querySelector('.child-overlay');
const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookNumPages = document.querySelector('#num_pages');
const readAlready = document.querySelector('#read');

addBtn.addEventListener('click',()=>{overlay.style.display = 'flex'})

overlayForm.addEventListener('click', function(){
    overlay.style.display = 'none';
});
form.addEventListener('submit', ()=>{
    myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookNumPages.value, readAlready.value))
    document.createElement('div')
})