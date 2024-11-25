//book.component.ts

import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Books } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {


  books: Books[] = [];

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }

}
