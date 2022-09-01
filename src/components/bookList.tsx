import { Container, Stack } from "@mui/material"
import { books } from '../data'
import React from "react"

const BookList = () => {
  return (
    <Container >
      <Stack  direction="row" spacing={2} alignItems="center">
        <div>{books[0].author}</div>
        <Stack spacing={2}>
          {books[0].books.map((book) => (
            <div key={book.name}>{book.name}</div>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export default BookList