import { Container, Stack, Button } from "@mui/material"
import { books } from '../data'
import React from "react"
const BookInfo = () => {
  return (
    <Container >
    <Stack  direction="row" spacing={2} alignItems="center">
      <div>{books[0].author}</div>
      <Stack spacing={2}>
      <div>Book: {books[0].books[0].name}</div>
      <div>Shelf: {books[0].books[0].shelf}</div>
      <div>Place: {books[0].books[0].place}</div>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="contained" size="medium" onClick={() => {alert('clicked')}}>Remove book</Button> 
        <Button variant="contained" size="medium" onClick={() => {alert('clicked')}}>Delete book</Button>
      </Stack>
      
      </Stack>
    </Stack>
  </Container>
  )
}

export default BookInfo