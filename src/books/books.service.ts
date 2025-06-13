// Description: Service for managing books in a library system.
// File: src/books/books.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  // findAll(): any {
  //   return 'findAll funcionando';
  // }

  findBook(bookId: string) {
    return `findBook funcionando con bookId: ${bookId}`;
  }

  findAll(params): any {
    return params.length > 0
      ? `findAll funcionando con ${params}`
      : 'findAll funcionando';
  }

  createBook(newBook: any) {
    return newBook;
  }
}
