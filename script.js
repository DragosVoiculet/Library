const myLibrary = [];

function Book(title, year, read) {
    this.title=title;
    this.year=year;
    this.read=read;
}

function addBookToLibrary(title, year, read) {
  const book = new Book(title,year,read);
  myLibrary.push(book)
}
function appendBook(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const titleElement = document.createElement('h3');
    titleElement.textContent = `Title: ${book.title}`;

    const yearElement = document.createElement('p');
    yearElement.textContent = `Year: ${book.year}`;

    const readElement = document.createElement('p');
    readElement.textContent = `Read: ${book.read ? 'yes' : 'no'}`;

    const removeBook = document.createElement('button');
    removeBook.textContent = 'Remove';

    bookCard.appendChild(titleElement);
    bookCard.appendChild(yearElement);
    bookCard.appendChild(readElement);
    bookCard.appendChild(removeBook);

    removeBook.addEventListener('click', () => {
        const bookIndex = myLibrary.indexOf(book);

        if (bookIndex !== -1) {
            myLibrary.splice(bookIndex, 1);

            bookCard.parentNode.removeChild(bookCard);
        }
    });

    return bookCard;
}

const title = document.querySelector('#title');
const year = document.querySelector('#year');
const read = document.querySelector('#read');
const submit = document.querySelector('#submit');
const popup = document.querySelector('.popup-form');
const addBtn = document.querySelector('#addBtn');
const bookArea = document.querySelector('.book-area')
let i = 0;
submit.addEventListener('click',(event) =>{
    event.preventDefault()
    titleValue = title.value;
    yearValue = year.value;
    readValue = read.checked;
    addBookToLibrary(titleValue,yearValue,readValue);
    title.value = '';
    year.value = '';
    read.checked = false;
    popup.classList.toggle('open-popup-form');
    bookArea.appendChild(appendBook(myLibrary[i]));

   i++
})
addBtn.addEventListener('click', () => {
    popup.classList.add('open-popup-form');
});