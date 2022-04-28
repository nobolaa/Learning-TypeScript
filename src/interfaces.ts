interface Book{
    id: number;
    title: string;
    author?: string;
}

const book: Book = {
    id: 1,
    title: 'Mi titulo',
    author: 'Mi autor'
};
const book2: Book = { id: 1, title: 'Mi titulo' };

const books: Book[] = [
    { id: 1, title: 'Mi titulo', author: 'Mi autor'},
    { id: 2, title: 'Mi titulo 2', author: 'Mi autor 2'}
]

function getBook(): Book{
    return { id: 1, title: 'My title', author: 'Bezael'};
}
const myBook = getBook();

function createBook(book: Book): Book{
    return book;
};
createBook(book);

interface Book_withFunction{
    id: number;
    title: string;
    author?: string;
    isLoan: (id: number) => number
}

const book_withFunction: Book_withFunction = {
    id: 1,
    title: 'Mi titulo',
    author: 'Mi autor',
    isLoan: function(id:number){
        return id+1;
    }
};
console.log(book_withFunction.isLoan(5));