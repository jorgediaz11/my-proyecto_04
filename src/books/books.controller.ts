// This file is part of the Bookstore API project.
// This file defines the BooksController for handling book-related requests.
// src/books/books.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { Query } from '@nestjs/common';
import { Request } from 'express';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  // findAll(@Query('order') order?: string) {
  //   let params = [];

  //   if (order !== undefined) {
  //      params.push(`'${order}'`);
  //   }

  //   return this.booksService.findAll(params);
  // }
  findAll(params: { order?: string; limit?: number }): any {
    let msg = `findAll funcionando. Parámetros:`;

    if (params.order !== undefined) {
      msg = msg + ` order: ${params.order}`;
    }

    if (params.limit !== undefined) {
      msg = msg + ` limit: ${params.limit}`;
    }

    return msg;
  }

  @Get(':bookId')
  findBook(@Param('bookId') bookId: string) {
    return this.booksService.findBook(bookId);
  }

  @Post()
  createBook(@Body() body) {
    let newBook: any = body;
    return this.booksService.createBook(newBook);
  }
}
