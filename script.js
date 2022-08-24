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

const addBtn = document.querySelector('#add-book');
const overlay = document.querySelector('.overlay');
addBtn.addEventListener('click',function(){
    overlay.style.dislay
})
