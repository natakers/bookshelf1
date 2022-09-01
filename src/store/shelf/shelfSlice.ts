import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthorProps, BookProps } from '../../interfaces';
// import { BoardProps } from '../../components/interfaces';
// import { getCookie } from '../../helpers/cookie';
// import { API_URL } from '../auth/authService';
const API_URL = 'http://localhost/bookshelf/api'
import { IError } from '../config';

export const getShelf = createAsyncThunk<
  ShelfProps[],
  undefined,
  { rejectValue: string }
>('shelf/getShelf', async function (_, { rejectWithValue }) {
  try {
    // const token = getCookie('user') || null;
    const response = await fetch(`${API_URL}/shelf`, {
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

export interface ShelfProps {
  shelf: number,
  place: number,
  isTaken: boolean,
  id: string,
}

export interface ShelfState {
  shelfs: Array<ShelfProps>;
  error: boolean;
  loading: boolean,
  currentId: string;
  message: string | undefined;
}

const initialState: ShelfState = {
  shelfs: [],
  loading: false,
  error: false,
  currentId: '',
  message: undefined,
};

const shelfSlice = createSlice({
  name: 'shelf',
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
      .addCase(getShelf.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getShelf.fulfilled, (state, action) => {
        state.shelfs = action.payload;
        state.loading = false;
      })
      .addCase(getShelf.rejected, (state, action) => {
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

export default shelfSlice.reducer;
