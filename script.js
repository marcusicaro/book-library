var id = 0;

var bookRead = '';

let myLibrary = [];

function ChangeReadStatus(read) {
    // console.log(read.parentNode.querySelector('.book-card :nth-child(4)').textContent);

    if (read.parentNode.querySelector('.book-card :nth-child(4)').textContent == 'Read: No') {
        // console.log('hauhauahauhau');
        read.parentNode.querySelector('.book-card :nth-child(4)').textContent = 'Read: Yes';        
    } else if (read.parentNode.querySelector('.book-card :nth-child(4)').textContent == 'Read: Yes') {
        read.parentNode.querySelector('.book-card :nth-child(4)').textContent = 'Read: No';
        // console.log('HUHEUHEUEHEU');
    }
}

function remove(el) {
    // console.log(el);
    var element = el;
    element.parentNode.remove();
  }


function Book (Title, Author, Pages, Read) {
    this.Title = Title,
    this.Author = Author,
    this.Pages = Pages,
    this.Read = Read
}

function readCheck () {
    if (document.getElementById("read").checked == false){
        bookRead = 'No';
    } else if (document.getElementById("read").checked == true) {
        bookRead = 'Yes';
    }
}

function addBooktoLibrary() {

    // find corresponding value from the user input 
    var bookTitle = document.getElementById('title').value;
    var bookAuthor = document.getElementById('author').value;
    var bookPages = document.getElementById('pages').value;

    // find correspondig value to the read status 
    readCheck ();

    // creates a card with the user input values 
    const newBook = new Book (bookTitle, bookAuthor, bookPages, bookRead);

    Object.assign(myLibrary, newBook);


    // gives each book an unique id 
    const cardCreator = document.createElement('div');
    cardCreator.classList.add('book-card');
    cardCreator.setAttribute('id',id);
    document.body.appendChild(cardCreator);
    var card = document.getElementById(id);


    // add a display each element on book card
    for (const element in myLibrary){
        var elementCreator = document.createElement('p');
        elementCreator.textContent = `${element}: ${myLibrary[element]}`;
        card.appendChild(elementCreator);
    }


    // create trash can 
    const bookDelete = document.createElement('i');
    bookDelete.classList.add('fa');
    bookDelete.classList.add('fa-trash');
    bookDelete.setAttribute('aria-hidden','true');

    bookDelete.setAttribute('onclick','remove(this)');

    card.appendChild(bookDelete);

    // read status change
    const changeRead = document.createElement('input');
    changeRead.setAttribute('type', 'button');
    changeRead.setAttribute('value', 'change read status');
    changeRead.setAttribute('onclick','ChangeReadStatus(this)');

    card.appendChild(changeRead);




    
    id++;

    // var bookDeleteExecution = document.getElementById(idTrash);
    // bookDeleteExecution.onclick = clickDelete ();
    // function clickDelete () {
        // console.log(card);
        // console.log(bookDeleteExecution)
        // card.remove();
    // }

    // idTrash++;
    
}



const currentLibrary = () => {
    return myLibrary;
}

function LoopArray () {
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