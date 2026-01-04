import React from "react"
import { Link } from "react-router-dom"
const BookBox = ({ book, clicked }) => {
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail

  return (
    <div className="book-card" onClick={() => clicked(book.id)}>
      <div className="book-image-container">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={book.volumeInfo.title}
            className="book-image"
          />
        ) : (
          <div className="book-no-image">
            <span>No Image</span>
          </div>
        )}
      </div>

      <div className="book-details">
        <h3 className="book-title" title={book.volumeInfo.title}>
          {book.volumeInfo.title}
        </h3>
        <p className="book-authors">
          {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author"}
        </p>
      </div>
    </div>
  )
}

export default BookBox
