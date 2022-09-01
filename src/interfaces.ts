// import { BoardProps } from '../../components/interfaces';

export interface IBook {
  name: string,
  shelf: number | null,
  place: number | null,
}

export interface BookAddProps {
  name: string,
  shelf: number | null,
  place: number | null,
  author: string,
}

export interface BookProps {
  name: string,
  shelf: number | null,
  place: number | null,
  author_id: string,
  shelf_id: string,
  id: string,
}

export interface BookState {
  authors: string;
  books: Array<BookProps>;
  loading: boolean;
  error: boolean;
  authorId: string;
  bookId: string;
  newAuthor: AuthorProps;
  newBook: BookProps | null;
  message: string | undefined;
}

export const initialState: BookState = {
  authors: '',
  books: [],
  loading: false,
  error: false,
  authorId: '',
  bookId: '',
  newAuthor: {
    name: '',
    id: '',
  },
  newBook: {
    name: '',
    shelf: null,
    place: null,
    author_id: '',
    id: '',
    shelf_id: '',
  },
  message: undefined,
};

export interface IError {
  message: string;
}

export interface AuthorProps {
  name: string,
  id: string,
}

export interface AuthorAddProps {
  name: string,
}

export interface BookSearch {
  id: string,
  idBook: string,
}


// export interface BoardProps {
//   id?: string;
//   title: string;
//   description: string;
//   toggleWindow?: () => void;
// }