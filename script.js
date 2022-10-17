var id = 0;


let myLibrary = [];



function Book (Title, Author, Pages, Read) {
    this.Title = Title,
    this.Author = Author,
    this.Pages = Pages,
    this.Read = Read
}

function addBooktoLibrary () {
    var bookTitle = prompt('Title of the book');
    // myLibrary.push(title);
    var bookAuthor = prompt('Author of the book');
    // myLibrary.push(author);
    var bookPages = prompt('Pages of the book');
    // myLibrary.push(pages);
    var bookRead = prompt('Read the book?');
    // myLibrary.push(read);
    const newBook = new Book (bookTitle, bookAuthor, bookPages, bookRead);

    Object.assign(myLibrary, newBook);

    const cardCreator = document.createElement('div');
    cardCreator.classList.add('book-card');
    cardCreator.setAttribute('id',id);

    document.body.appendChild(cardCreator);
    
    

    var card = document.getElementById(id);

    for (const element in myLibrary){
        var elementCreator = document.createElement('p');
        elementCreator.textContent = `${element}: ${myLibrary[element]}`;
        card.appendChild(elementCreator);
    }

    id++;

}



const currentLibrary = () => {
    return myLibrary;
}

function LoopArray () {
    // for (let index = 0; index < myLibrary.length; index++) {
        // const element = myLibrary[index];
      
        // var newParagraph = document.createElement('p');

        // newParagraph.innerText = element;

        // containerSelector.appendChild(newParagraph);
    // }

    myLibrary = [];
}

const containerSelector = 
document.querySelector('.book-container');

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }