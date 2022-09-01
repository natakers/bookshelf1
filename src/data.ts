export const books = [
  {
    author: "Tolstoy",
    books: [
      {
        name: "Fathers and sons",
        shelf: 1,
        place: 2,
        author: "Tolstoy"},
      {
        name: "War and peace",
        shelf: 3,
        place: 5,
        author: "Tolstoy"
      }
    ]
  },
  {
    author: "Edgar Allan Poe",
    books: [
      {
        name: "Raven",
        shelf: 0,
        place: 8,
        author: "Tolstoy"
      }
    ]
  },
  {
    author: "Bram Stoker",
    books: [
      {
        name: "Dracula",
        shelf: 3,
        place: 3,
        author: "Tolstoy"
      }
    ]
  }
]

export const authors = {
  0: {
    author: "Tolstoy",
    books: ["Fathers and sons", "War and peace"]
  },
  1: {
    author: "Edgar Allan Poe",
    books: ["Raven"]
  },
  2: {
    author: "Bram Stoker",
    books: ["Dracula"]
  }
  
}

export const authorsList = [ "Tolstoy", "Edgar Allan Poe", "Bram Stoker" ]

export const shelfs = {
  0: [{0: 0},{1: 0},{2: 0},{3: 0},{4: 0},{5: 0},{6: 0},{7: 0},{8: 1},{9: 0}],
  1: [{0: 0},{1: 0},{2: 1},{3: 0},{4: 0},{5: 0},{6: 0},{7: 0},{8: 0},{9: 0}],
  2: [{0: 0},{1: 0},{2: 0},{3: 0},{4: 0},{5: 0},{6: 0},{7: 0},{8: 0},{9: 0}],
  3: [{0: 0},{1: 0},{2: 0},{3: 1},{4: 0},{5: 1},{6: 0},{7: 0},{8: 0},{9: 0}],
}