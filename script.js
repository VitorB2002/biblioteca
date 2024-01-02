//Construtor do objeto livro
function Book(nome, autor, ano, sinopse, pages, read){
    this.nome = nome;
    this.autor = autor;
    this.ano = ano;
    this.sinopse = sinopse;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let info = this.nome + " escrito por " + 
        this.autor + ", " + this.pages + 
        " páginas, " + 
        (this.read ? "lido" : "não lido");
        
        return info;
    }
}

let book = new Book("The hobbit", "J.R.R Tolkien", 2002, "Livro legal", 295, false)
console.log(book.info())