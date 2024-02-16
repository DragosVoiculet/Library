
class Book{
    constructor(title, year ,read){
    this.title=title;
    this.year=year;
    this.read=read;
    }
    
}
class Library{
    constructor(){
        this.books = [];
    }
    addBook(title, year, read) {
        const book = new Book(title,year,read);
        this.books.push(book)
      }
    removeBook(book){
        const bookIndex = this.books.indexOf(book);

            if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
        }
    }
    renderBook(book){
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const titleElement = document.createElement('h3');
    titleElement.textContent = `Title: ${book.title}`;

    const yearElement = document.createElement('p');
    yearElement.textContent = `Year: ${book.year}`;

    const readElement = document.createElement('p');
    readElement.textContent = `Read: ${book.read ? 'yes' : 'no'}`;

    const removeBookBtn = document.createElement('button');
    removeBookBtn.textContent = 'Remove'

    removeBookBtn.addEventListener('click', ()=>{
        this.removeBook(book)
        bookCard.parentNode.removeChild(bookCard);
    });
    bookCard.appendChild(titleElement);
    bookCard.appendChild(yearElement);
    bookCard.appendChild(readElement);
    bookCard.appendChild(removeBookBtn);

    return bookCard;
    }
}

const library = new Library();

const submitBtn = document.querySelector('#submit');
const titleInput = document.querySelector('#title');
const yearInput = document.querySelector('#year');
const readCheckbox = document.querySelector('#read');
const addBtn = document.querySelector('#addBtn');
const popupForm = document.querySelector('.popup-form');
const bookArea = document.querySelector('.book-area')
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
  
    const title = titleInput.value;
    const year = yearInput.value;
    const read = readCheckbox.checked;
  
    library.addBook(title, year, read);
  
    titleInput.value = '';
    yearInput.value = '';
    readCheckbox.checked = false;
  
    popupForm.classList.toggle('open-popup-form');
    bookArea.appendChild(library.renderBook(library.books[library.books.length - 1]));
  });
  
  addBtn.addEventListener('click', () => {
    popupForm.classList.toggle('open-popup-form');
  });