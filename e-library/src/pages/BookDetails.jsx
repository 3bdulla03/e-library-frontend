import React from "react"
import Nav from "../components/Nav"
import { useState, useEffect } from "react"
import { GetFavorites } from "../services/Favorites"
import { getBookDetails } from "../services/googleBooks"
import "../App.css"
import ReadingStatus from "../components/ReadingStatus"
import { AddFavorite, RemoveFavorite } from "../services/Favorites"

const BookDetails = ({ bookData, user }) => {
  const [alreadyFav, setAlreadyFav] = useState(false)
  const info = bookData.volumeInfo

  useEffect(() => {
    checkIfFav()
  }, [])

  const checkIfFav = async () => {
    const allFav = await GetFavorites()
    console.log("all fav: ", allFav)
    const foundMach = allFav.some(
      (fav) => String(fav.bookId).trim() === String(bookData.id).trim()
    )
    console.log("already fav? : ", foundMach)
    foundMach ? setAlreadyFav(true) : setAlreadyFav(false)
  }

  const handleAddFavorite = async (bookId) => {
    try {
      await AddFavorite(bookId)
      alert("Book added to favorites")
      setAlreadyFav(true)
    } catch (error) {
      console.log(error)
      alert("can't add to favorites")
    }
  }

  const handleRemoveFromFav = async (bookId) => {
    try {
      RemoveFavorite(bookId)
      alert("Removed successful")
      setAlreadyFav(false)
    } catch (error) {
      console.log(error)
      alert("can't remove favorites")
    }
  }

  return (
    <div className="book-view">
      <img
        src={info.imageLinks?.thumbnail}
        alt={info.title}
        className="book-thumbnail"
      />

      <div className="book-info">
        <h2 className="book-title">{info.title || "No title available"}</h2>

        <p className="book-authors">
          <strong>Author:</strong> {info.authors}
        </p>

        <p className="book-category">
          <strong>Category:</strong> {info.categories}
        </p>

        <p className="book-summary">
          <strong>Summary:</strong>
          <br />
          {info.description}
        </p>
      </div>
      <ReadingStatus bookId={bookData.id} user={user} />
      {alreadyFav ? (
        <button onClick={() => handleRemoveFromFav(bookData.id)}>
          remove from fav
        </button>
      ) : (
        <button onClick={() => handleAddFavorite(bookData.id)}>
          Add to favorites
        </button>
      )}
    </div>
  )
}

export default BookDetails
