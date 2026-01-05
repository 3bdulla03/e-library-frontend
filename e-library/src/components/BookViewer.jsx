import "../App.css"
const BookViewer = ({ googleBookId }) => {

  if (!googleBookId) return null
  const src = `https://books.google.com/books?id=${googleBookId}&pg=PP1&output=embed`

  return (
    <div className="book">
      <iframe
        title="Google Books Preview"
        src={src}
        width="100%"
        height="100%"
        referrerPolicy="no-referrer"
        allowFullScreen
      />
    </div>
  )
}

export default BookViewer
