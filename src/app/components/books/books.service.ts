import { Injectable } from '@angular/core';
import { Books } from './book.model';
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  private booklist: Books[] = [
    {
      bookID: 1,
      bookTitle: 'To Kill a Mockingbird',
      genre: 'Fiction',
      author: 'Harper Lee',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS68RY84hFCFEv79YFlT9_dhetWuxhIO9Un6w&s',
    },

    {
      bookID: 2,
      bookTitle: 'The catcher in the rye',
      genre: 'Fiction',
      author: 'J.D Salinger',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmaay9kLmr69JLsXnSzLtEIdw6v0pNMQARg&s',
    },
    {
      bookID: 3,
      bookTitle: 'Pride and Prejudice',
      genre: 'Fiction',
      author: 'J.D Salinger',
      image:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg',
    },
    {
      bookID: 4,
      bookTitle: 'Romeo and Juliet',
      genre: 'Fiction',
      author: 'William Shakespear',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9CwLCGNtv7Ywx_Rr3slD_oE190A2KvGvng&s',
    },
    {
      bookID: 5,
      bookTitle: '1984',
      genre: 'Fiction',
      author: 'George Orwell',
      image:
        'https://d3525k1ryd2155.cloudfront.net/f/935/524/9780451524935.RH.0.m.jpg',
    },
    {
      bookID: 6,
      bookTitle: 'Hamlet',
      genre: 'Fiction',
      author: 'William Shakespear',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHjZWUiPR-paryJXkATaigCJhhFrZrys4XA&s',
    },
    {
      bookID: 7,
      bookTitle: 'Brave New World',
      genre: 'Fiction',
      author: 'Aldous Leonard Huxley',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKGL7JRnlQuFYM59VIpLa20kjhjpvfJawMA&s',
    },
    {
      bookID: 8,
      bookTitle: 'The fellowship of the Ring',
      genre: 'Fiction',
      author: 'J.R.R Tolkien',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT8GXFdSmDSwqZPCEvkBryTncntoVBJUe_A&s',
    },
  ];

  getBooks(): Books[] {
    return this.booklist;
  }
}
