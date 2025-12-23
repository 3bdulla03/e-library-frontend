import React from "react"

const BookBox = ({ book }) => {
  return (
    <>
      <div className="card book-card" onClick={book.onClick}>
        <div className="img-wrapper">
          <img src={book.background_image} alt={book.name} />
        </div>
        <div className="info-wrapper flex-col">
          <h3>{book.name}</h3>
          <p>{book.author}</p>
        </div>
      </div>
    </>
  )
}

export default BookBox
