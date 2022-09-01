import { Button, Container, Grid, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import React, { useEffect, useState } from "react"
// import { books } from "../data"
import { AuthorProps, BookProps, BookState, IBook } from "../interfaces";
import { getAuthors } from "../store/board/boardsSlice";
import { getBook, getBooks } from "../store/book/bookSlice";
import { getShelf } from "../store/shelf/shelfSlice";
// import { getAuthors } from "../store/book/bookSlice";
import {
  AppState,
  useAppDispatch,
  useAppSelector,
} from '../store/store';
import Bookshelf from "./bookshelf";

const Header = () =>  {
  const authors = useAppSelector(
    (state: AppState) => state.boards.authors
  );
  const { books, currentBook } = useAppSelector(
    (state: AppState) => state.book
  );

  const shelfs = useAppSelector(
    (state: AppState) => state.shelf.shelfs
  );
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const [cookie] = useCookies(['user']);
  // // const navigate = useNavigate();
  // // const [cookie] = useCookies(['user']);

  // useEffect(() => {
  //   // cookie.user === undefined && navigate('/');
  //   // if (cookie.user) {
  //     dispatch(getAuthors());
  //   // }
  // }, []);
  const [choosenAuthor, setAuthor] = useState('');
  const [choosenAuthorId, setAuthorId] = useState('');
  const [isAuthor, setIsAuthor] = useState(false);
  const [isBook, setIsBook] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [choosenBooks, setBooks] = useState<BookProps[]>([]);
  const [choosenBook, setBook] = useState('');
  const [choosenBookId, setBookId] = useState('');
  // const dispatch = useAppDispatch();
  // const { authors } = useAppSelector(
  //   (state: AppState) => state.book
  // );
  // const { loading } = useAppSelector(
  //   (state: AppState) => state.book
  // );
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const [cookie] = useCookies(['user']);

  // useEffect(() => {
  //   // cookie.user === undefined && navigate('/');
  //   // if (cookie.user) {
  //     dispatch(getAuthors());
  //   // }
  // }, [dispatch]);

  
  // console.log(authors);
  
  const handlerSelectAuthor = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setAuthor(event.target.value);
      console.log(choosenAuthor);
      setIsSearch(false)
      

  }
  const handlerSelectBook = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setBook(event.target.value);
    setIsSearch(false)
}
const handlerSearch = () => {
  setIsSearch(true)
  
  console.log(currentBook);
  console.log(currentBook.shelf);
  console.log(currentBook.shelf_id);
  
  // const href = `author/${choosenAuthorId}/book/${choosenBookId}`;
}
  useEffect(() => {
    dispatch(getAuthors());
    dispatch(getShelf());
    dispatch(getBook({id: choosenAuthorId, idBook: choosenBookId}))
    authors.forEach((el) => {
      if(el.name === choosenAuthor) {
        dispatch(getBooks(el.id));
}
    })
    if (choosenAuthor !== '') {
      setIsAuthor(true)
      authors.forEach((el) => {
        if(el.name === choosenAuthor) {
          setAuthorId(el.id)
        }
      })
    } 
    if (choosenBook !== '') {
      setIsAuthor(false)
      setIsBook(true)
      console.log(choosenBook);
      
      books.forEach((el) => {
        if(el.name === choosenBook) {
          setBookId(el.id)
        }
      })
    }
  }, [dispatch, choosenAuthor, choosenBook, choosenAuthorId, choosenBookId])
  return (
    <Container >
    <Stack direction="row" spacing={2} alignItems="center">
    <Stack spacing={5}>
      <Stack spacing={5}></Stack>
      <Stack direction="row" spacing={5}>
        <InputLabel id="demo-simple-select-label1">Author</InputLabel>
        <Select
          sx={{ m: 1, minWidth: 120 }}
          labelId="demo-simple-select-helper-label1"
          id="demo-simple-select-helper1"
          value={choosenAuthor}
          label="Author"
          onChange={handlerSelectAuthor}
        >
        <option value=''></option>
        {authors &&
          authors.map((el) => (
            <MenuItem key={el.id} value={el.name}>{el.name}</MenuItem>
          ))}         
        </Select>
        <InputLabel id="demo-simple-select-label">Book</InputLabel>
        <Select
        sx={{ m: 1, minWidth: 120 }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={choosenBook}
          label="Book"
          onChange={handlerSelectBook}
        >
        <option value=''></option>
        { books.map((el) => (
            <MenuItem key={el.id} value={el.name}>{el.name}</MenuItem> ))} 
        </Select>
      </Stack>
      <Button variant="contained" size="medium" onClick={handlerSearch}>Find</Button>
    </Stack>
    <Stack spacing={2}>
      <Button variant="contained" size="medium" onClick={() => {alert('clicked')}}>Add</Button>
    </Stack>
    </Stack>
    {
      isSearch && 
      <div className="bookshelf">
      <div className="shelf" id='0'>
        {shelfs.map((el) => (el.shelf === 0) ? (el.isTaken)? ((el.id === currentBook.shelf_id ) ? <div key={el.id} className={`place place_current`}>{currentBook.name}</div> : <div key={el.id} className={`place place_active`}>Book</div>) : <div key={el.id} className={`place`}></div> : '')}
      </div>
      <div className="shelf" id='1'>
        {shelfs.map((el) => (el.shelf === 1) ? (el.isTaken)? ((el.id === currentBook.shelf_id) ? <div key={el.id} className={`place place_current`}>{currentBook.name}</div> : <div key={el.id} className={`place place_active`}>Book</div>) : <div key={el.id} className={`place`}></div> : '')}
      </div>
      <div className="shelf" id='2'>
        {shelfs.map((el) => (el.shelf === 2) ? (el.isTaken)? ((el.id === currentBook.shelf_id) ? <div key={el.id} className={`place place_current`}>{currentBook.name}</div> : <div key={el.id} className={`place place_active`}>Book</div>) : <div key={el.id} className={`place`}></div> : '')}
      </div>
      <div className="shelf" id='3'>
        {shelfs.map((el) => (el.shelf === 3) ? (el.isTaken)? ((el.id === currentBook.shelf_id) ? <div key={el.id} className={`place place_current`}>{currentBook.name}</div> : <div key={el.id} className={`place place_active`}>Book</div>) : <div key={el.id} className={`place`}></div> : '')}
      </div>
    </div>
    }
    
    {/* <Bookshelf></Bookshelf> */}
    </Container>
  )
}

export default Header