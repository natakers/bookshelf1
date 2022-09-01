import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthorProps } from '../../interfaces';
// import { BoardProps } from '../../components/interfaces';
// import { getCookie } from '../../helpers/cookie';
// import { API_URL } from '../auth/authService';
const API_URL = 'http://localhost/bookshelf/api'
import { IError } from '../config';

export const getAuthors= createAsyncThunk<
  AuthorProps[],
  undefined,
  { rejectValue: string }
>('books/getAuthors', async function (_, { rejectWithValue }) {
  try {
    // const token = getCookie('user') || null;
    const response = await fetch(`${API_URL}/authors`, {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    const errorMassage = (error as IError).message;
    return rejectWithValue(errorMassage);
  }
});

// export const createBoard = createAsyncThunk<
//   BoardProps,
//   BoardProps,
//   { rejectValue: string }
// >(
//   'boards/createBoard',
//   async function (board, { rejectWithValue, dispatch }) {
//     try {
//       const token = getCookie('user') || null;

//       const response = await fetch(`${API_URL}/boards`, {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(board),
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       const errorMassage = (error as IError).message;
//       return rejectWithValue(errorMassage);
//     }
//   }
// );

// export const deleteBoard = createAsyncThunk<
//   string,
//   string,
//   { rejectValue: string }
// >(
//   'boards/deleteBoard',
//   async function (id, { rejectWithValue, dispatch }) {
//     try {
//       const token = getCookie('user') || null;

//       await fetch(`${API_URL}/boards/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return id;
//     } catch (error) {
//       const errorMassage = (error as IError).message;
//       return rejectWithValue(errorMassage);
//     }
//   }
// );

export interface BoardState {
  authors: Array<AuthorProps>;
  loading: boolean;
  error: boolean;
  currentId: string;
  // newBoard: BoardProps | null;
  message: string | undefined;
}

const initialState: BoardState = {
  authors: [{name:'eee', id:'ww', }],
  loading: false,
  error: false,
  currentId: '',
  // newBoard: {
  //   title: '',
  //   description: '',
  // },
  message: undefined,
};

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    // openboard(state, action) {
    //   state.currentId = action.payload;
    // },
    // chooseBoardId(state, action) {
    //   state.currentId = action.payload;
    // },
    // resetBoard(state, action) {
    //   state.newBoard = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAuthors.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAuthors.fulfilled, (state, action) => {
        state.authors = action.payload;
        state.loading = false;
      })
      .addCase(getAuthors.rejected, (state, action) => {
        state.error = true;
        state.message = action.payload;
      })
      // .addCase(deleteBoard.fulfilled, (state, action) => {
      //   state.boards = state.boards.filter(
      //     (board) => board.id !== action.payload
      //   );
      // })
      // .addCase(createBoard.pending, (state) => {
      //   state.loading = true;
      //   state.error = false;
      // })
      // .addCase(createBoard.fulfilled, (state, action) => {
      //   state.newBoard = action.payload;
      //   state.loading = false;
      //   state.boards.push(state.newBoard);
      // })
      // .addCase(createBoard.rejected, (state, action) => {
      //   state.error = true;
      //   state.message = action.payload;
      // });
  },
});

// export const { openboard, chooseBoardId, resetBoard } =
//   boardSlice.actions;

export default boardSlice.reducer;
