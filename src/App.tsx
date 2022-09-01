import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import BookList from './components/bookList';
import BookInfo from './components/bookIfo';
import Header from './components/header';
import EditBook from './components/editBook';
import CreateBook from './components/createBook';

function App() {
  return (
    <Header/>
  );
}

export default App;
