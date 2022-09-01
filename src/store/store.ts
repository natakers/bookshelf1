import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import boardReducer from './board/boardsSlice';
import bookReducer from './book/bookSlice';
import shelfReducer from './shelf/shelfSlice';


export const store = configureStore({
  reducer: {
    boards: boardReducer,
    shelf: shelfReducer,
    book: bookReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> =
  useSelector;
