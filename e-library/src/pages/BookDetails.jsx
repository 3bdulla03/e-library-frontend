import React from "react"
import Nav from "../components/Nav"
import { useState, useEffect } from "react"
import { GetFavorites } from "../services/Favorites"
import { getBookDetails } from "../services/googleBooks"
import "../App.css"
import ReadingStatus from "../components/ReadingStatus"
import { AddFavorite } from "../services/Favorites"

const BookDetails = ({ bookData, user }) => {
  const info = bookData.volumeInfo

  const handleAddFavorite = async (bookId) => {
    try {
      await AddFavorite(bookId)
      alert("Book added to favorites")
    } catch (error) {
      console.log(error)
      alert("can't add to favorites")
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
      <button onClick={() => handleAddFavorite(bookData.id)}>
        Add to favorites
      </button>
    </div>
  )
}

export default BookDetails
