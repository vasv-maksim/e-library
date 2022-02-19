import { Book } from "./book.interface";

export const books: Book[] = [
  {
    id: '1', 
    name: 'Гарри Поттер и философский камень',  
    authorId: '1',
    year: 1997,
    pages: 400,
  },
  {
    id: '2', 
    name: 'Гарри Поттер и тайная комната',  
    authorId: '1',
    year: 1998,
    pages: 422,
  },
  {
    id: '3', 
    name: 'Гарри Поттер и узник Азкабана',  
    authorId: '1',
    year: 1999,
    pages: 451,
  },
  {
    id: '4', 
    name: 'Остров сокровищ',  
    authorId: '2',
    year: 1883,
    pages: 488,
  },
];
