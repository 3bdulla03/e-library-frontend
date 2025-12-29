import React from "react"
import Nav from "../components/Nav"
import { useState, useEffect } from "react"
import { GetFavorites } from "../services/Favorites"
import { getBookDetails } from "../services/googleBooks"

const Favorites = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchUserFavorites = async () => {
      try {
        const favoriteDocs = await GetFavorites()
        const loadedBooks = []

        for (let i = 0; i < favoriteDocs.length; i++) {
          const fav = favoriteDocs[i]
          const data = await getBookDetails(fav.bookId)
          if (data) {
            loadedBooks.push({ ...data, favoriteId: fav._id })
          }
        }
        
        setBooks(loadedBooks)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUserFavorites()
  }, [])

  return (
    <>
      <div>
        {books.map((book) => (
          <div key={book.favoriteId}>
            <h3>{book.volumeInfo?.title}</h3>
            <p>{book.volumeInfo?.authors?.join(", ")}</p>
            {book.volumeInfo?.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Favorites