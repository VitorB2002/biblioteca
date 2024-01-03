const myLibrary = [];
const gridContainer = document.getElementsByTagName("main")[0];
const modal = document.querySelector("dialog");

//Construtor do objeto livro
function Book(nome, autor, ano, sinopse, pages, read){
    this.nome = nome;
    this.autor = autor;
    this.ano = ano;
    this.sinopse = sinopse;
    this.pages = pages;
    this.read = read;
    this.info =  "\tEscrito por " + this.autor + ", " + this.pages + " páginas, " + (this.read ? "<b>lido</b>" : "<b>não lido</b>");
}

let theHobbit = new Book("O Hobbit", "J.R.R. Tolkien", 1996, "Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos.\nEsta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, como os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler para descobrir.", 295, false)
let recursao = new Book("Recursão", "Blake Crouch", 2020, "Barry Sutton é policial em Nova York e convive com a tristeza da morte da filha. Ao ser acionado para intervir em uma tentativa de suicídio, ele se depara com uma mulher que sofre da Síndrome da Falsa Memória, uma doença misteriosa que planta na cabeça de suas vítimas lembranças de vidas que elas nunca tiveram.\nA neurocientista Helena Smith está desenvolvendo uma tecnologia para a cura do Alzheimer. Inesperadamente, um dos homens mais ricos do mundo se oferece para financiar sua pesquisa. Helena vê surgir a chance de propiciar um grande bem para a humanidade. No entanto, não poderia estar mais enganada...", 320, false)

function addBookToLibrary(book){
    myLibrary.push(book)
    createGrid()
}

function newBook(){
    // Get form values
    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let synopsis = document.getElementById("synopsis").value;
    let year = document.getElementById("year").value;
    let read = document.getElementById("read").checked;

    // Validation
    if (bookName === "" || author === "" || pages === "" || synopsis === "" || year === "") {
        document.getElementById("errorMessage").textContent = "Todos os campos precisam ser preenchidos";
        return;
    } else {
        document.getElementById("errorMessage").textContent = "";
    }

    // Display or process the data as needed
    let book = new Book(bookName, author, year, synopsis, pages, read)
    addBookToLibrary(book)
}

addBookToLibrary(theHobbit)
addBookToLibrary(recursao)
addBookToLibrary(theHobbit)
addBookToLibrary(recursao)
addBookToLibrary(theHobbit)
addBookToLibrary(recursao)

function createGrid(){
    //removendo todos os livros para atualizar a lista
    while(gridContainer.hasChildNodes())
        gridContainer.removeChild(gridContainer.firstChild)
    
    myLibrary.forEach((book, index) => {
        let gridItem = document.createElement('div');
        let titulo = document.createElement('h3');
        let info = document.createElement('p');
        let bookHeader = document.createElement('div')
        let sinopse = document.createElement('p');
        //Setando informações
        titulo.innerHTML = book.nome
        info.innerHTML = book.info
        sinopse.innerHTML = "<b>Sinopse:</b> <br>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + book.sinopse
        //Adicionando filhos ao gridItem
        bookHeader.append(titulo)
        bookHeader.append(info)
        gridItem.append(bookHeader)
        gridItem.append(sinopse)
        //Nomeando classe para estilização
        bookHeader.className = 'book-header'
        sinopse.className = 'book-text'
        gridItem.className = 'book'
        gridItem.id = index
        gridContainer.appendChild(gridItem)
    })

    closeModal()
}

function handleClick(){
    modal.showModal()
}

function closeModal(){
    modal.close()
}