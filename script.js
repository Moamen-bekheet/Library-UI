let myLibrary = [];

function Book(title, author, num_pages, read){
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = (read==='yes')? 'Already read':'Not yet read';
}

// Book.prototype.info = function(){
//     return `${this.title} by ${this.author}, ${this.num_pages} pages, ${this.read ? 'Already read':'not yet read'}`
// }
let bookCount = 0;

const addBtn = document.querySelector('#add-book');
const overlay = document.querySelector(".overlay");
const overlayForm = document.querySelector('.child-overlay');
const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookNumPages = document.querySelector('#num_pages');
const readAlready = document.querySelector('#read');
const bookCard = document.createElement('div');
addBtn.addEventListener('click',()=>{overlay.style.display = 'flex'})

overlayForm.addEventListener('click', function(){
    overlay.style.display = 'none';
});
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let getFormData = new FormData(form);
    let book = new Book(getFormData.get('title'), getFormData.get('author'), getFormData.get('num_pages'), getFormData.get('read'));
    myLibrary.push(book);
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-item-card');
    const bookDetails = document.createElement('div')
    bookDetails.classList.add('book-details');
    bookCard.appendChild(bookDetails);

    const flexIcons = document.createElement('div');
    flexIcons.classList.add('flex-icons');

    const del = document.createElement('div')
    del.classList.add('delete');
    const delLabel = document.createElement('label');
    delLabel.for = `${bookCount}del-button`
    del.appendChild(delLabel);
    delLabel.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';
    const delButton = document.createElement('button');
    delButton.textContent = 'remove';
    delButton.type = 'button';
    delButton.id = `${bookCount}del-button`;
    del.appendChild(delButton);
    flexIcons.appendChild(del);

    const markAsRead = document.createElement('div')
    markAsRead.classList.add('mark-as-read');
    const markAsReadLabel = document.createElement('label');
    markAsReadLabel.for = '`${bookCount}read-button`'
    markAsRead.appendChild(markAsReadLabel);
    markAsReadLabel.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>';
    const markAsReadButton = document.createElement('button');
    if(getFormData.get('read') == 'yes'){
        markAsReadButton.textContent = 'mark as not read';
    }
    else{
        markAsReadButton.textContent = 'mark as read';
    }
    markAsReadButton.type = 'button';
    markAsReadButton.id = `${bookCount}read-button`;
    markAsRead.appendChild(markAsReadButton);
    flexIcons.appendChild(markAsRead);

    bookCard.appendChild(flexIcons)

    const books = document.querySelector('.books')

    let i = 0;
    for(let prop in book){
        if(i==0){
            const header = document.createElement('h2');
            header.textContent = book[prop];
            bookDetails.appendChild(header);
            i++
            continue 
            //the title should be an h2 element the rest are paragraphs
        }
        const paragraph = document.createElement('p');
        paragraph.textContent = book[prop];
        bookDetails.appendChild(paragraph);
    }
    books.appendChild(bookCard);
    book.id = bookCount;
    markAsReadButton.addEventListener('click', (e)=>{
        if(book.read === 'Already read'){
            markAsReadButton.textContent = 'mark as read';
            bookDetails.lastChild.textContent = 'Not yet read';
            book.read = 'Not yet read';
        }
        else if(book.read === 'Not yet read'){
            markAsReadButton.textContent = 'mark as not read';
            bookDetails.lastChild.textContent = 'Already read';
            book.read = 'Already read';
        }
    })
    delButton.addEventListener('click', (e)=>{

    })

    bookCount++;
    bookTitle.value='';
    bookAuthor.value='';
    bookNumPages.value='';
    overlay.style.display = 'none';
})