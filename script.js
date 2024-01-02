const myLibrary = [];

//Construtor do objeto livro
function Book(nome, autor, ano, sinopse, pages, read){
    this.nome = nome;
    this.autor = autor;
    this.ano = ano;
    this.sinopse = sinopse;
    this.pages = pages;
    this.read = read;
    this.info = this.nome + " escrito por " + this.autor + ", " + this.pages + " páginas, " + (this.read ? "lido" : "não lido");
}

let theHobbit = new Book("O Hobbit", "J.R.R. Tolkien", 1996, "Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos.\nEsta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, como os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler para descobrir.", 295, false)
let recursao = new Book("Recursão", "Blake Crouch", 2020, "Barry Sutton é policial em Nova York e convive com a tristeza da morte da filha. Ao ser acionado para intervir em uma tentativa de suicídio, ele se depara com uma mulher que sofre da Síndrome da Falsa Memória, uma doença misteriosa que planta na cabeça de suas vítimas lembranças de vidas que elas nunca tiveram.\nA neurocientista Helena Smith está desenvolvendo uma tecnologia para a cura do Alzheimer. Inesperadamente, um dos homens mais ricos do mundo se oferece para financiar sua pesquisa. Helena vê surgir a chance de propiciar um grande bem para a humanidade. No entanto, não poderia estar mais enganada...", 320, false)

function addBookToLibrary(book) {
    myLibrary.push(book)
}

addBookToLibrary(theHobbit)
addBookToLibrary(recursao)

console.log(myLibrary)