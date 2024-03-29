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

let books = [
    new Book("O Hobbit", "J.R.R. Tolkien", 1996, "Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos.\nEsta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, como os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler para descobrir.", 295, false),
    new Book("Recursão", "Blake Crouch", 2020, "Barry Sutton é policial em Nova York e convive com a tristeza da morte da filha. Ao ser acionado para intervir em uma tentativa de suicídio, ele se depara com uma mulher que sofre da Síndrome da Falsa Memória, uma doença misteriosa que planta na cabeça de suas vítimas lembranças de vidas que elas nunca tiveram.\nA neurocientista Helena Smith está desenvolvendo uma tecnologia para a cura do Alzheimer. Inesperadamente, um dos homens mais ricos do mundo se oferece para financiar sua pesquisa. Helena vê surgir a chance de propiciar um grande bem para a humanidade. No entanto, não poderia estar mais enganada...", 320, false),
    new Book("A Máquina do Tempo", "H.G. Wells", 200, "Um cientista inventa uma máquina do tempo e viaja para o futuro.", 1895, true),
    new Book("Dom Quixote", "Miguel de Cervantes", 400, "As aventuras de um cavaleiro que confunde a realidade com a fantasia.", 1605, false),
    new Book("1984", "George Orwell", 300, "Em um mundo totalitário, um homem luta contra o controle do Estado.", 1949, true),
    new Book("Cem Anos de Solidão", "Gabriel García Márquez", 350, "A história da família Buendía em Macondo, uma cidade fictícia.", 1967, false),
    new Book("O Senhor dos Anéis", "J.R.R. Tolkien", 500, "Uma jornada épica para destruir um anel maligno e salvar a Terra-média.", 1954, true),
    new Book("Crime e Castigo", "Fiódor Dostoiévski", 250, "Um ex-estudante comete um assassinato e enfrenta as consequências psicológicas.", 1866, false)
]

books.forEach(book => {
    addBookToLibrary(book)
})

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

function removeBook(index){
    myLibrary.splice(index, 1)
    createGrid()
}

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
        let excluir = document.createElement('img');
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
        //Lixeira
        excluir.src = "./imgs/trash.png"
        excluir.width = "35"
        excluir.height = "35"
        excluir.className = "remove-book"
        excluir.setAttribute("remove-index", index)
        excluir.addEventListener("click", (e => removeBook(e.target.getAttribute("remove-index"))))
        gridItem.append(excluir)
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