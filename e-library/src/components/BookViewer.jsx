import { useEffect, useRef } from "react"
import "../App.css"
const BookViewer = ({ googleBookId }) => {
  const viewerRef = useRef(null)
  const [hasPreview, setHasPreview] = useState(true)

  useEffect(() => {
    if (!googleBookId) return
    if (!window.google || !window.google.books) return
    window.google.books.load()

    window.google.books.setOnLoadCallback(() => {
      const viewer = new window.google.books.DefaultViewer(viewerRef.current)

      viewer.load(
        googleBookId,
        () => {
          console.log("Preview loaded")
          setHasPreview(true)
        },
        () => {
          console.log("Preview not available")
          setHasPreview(false)
        }
      )
    })
  }, [googleBookId])

  return (
    <>
      {!hasPreview ? (
        <p>Preview not available for this book.</p>
      ) : (
        <div ref={viewerRef} style={{ width: "100%", height: "600px" }} />
      )}
    </>
  )
}

export default BookViewer
