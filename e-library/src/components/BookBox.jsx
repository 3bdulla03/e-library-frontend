import React from "react"

const BookBox = ({ book }) => {
  return (
    <>
      <div className="card book-card" onClick={book.onClick}>
        <div className="img-wrapper">
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        </div>
        <div className="info-wrapper flex-col">
          <h3>{book.name}</h3>
          <p>{book.volumeInfo.authors?.join(", ")}</p>
        </div>
      </div>
    </>
  )
}

export default BookBox
