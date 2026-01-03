import { useState, useEffect } from "react"
import { getBookStatus, setReadingStatus } from "../services/readingStatus.js"

const ReadingStatus = ({ bookId, user }) => {

  const [currentStatus, setCurrentStatus] = useState(null)
  const [selectedStatus, setSelectedStatus] =  useState("")

  useEffect(() => {
    if (user && bookId) {
      fetchStatus()
    }
  }, [user, bookId] )

  const fetchStatus = async () => {
    try {
      const data = await getBookStatus(bookId)
      if (data) {
        setCurrentStatus(data.status)
        setSelectedStatus(data.status)
      }
    } catch (error) {
      throw error
    }
  }

  const handleSave = async () => {
    if (!selectedStatus) {
      alert("Please select a status!")
      return
    }

    try {
      await setReadingStatus(bookId, selectedStatus)
      setCurrentStatus(selectedStatus)
      alert("Status saved!")
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Please sign in!")
      } else {
        alert("Error saving status")
      }
    }
  }


  return (
    <div className="reading-status">
      <h3>Status: {currentStatus || "Not set yet"}</h3>

      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}

      >
        <option value="">Select Status</option>
        <option value="ToRead">To Read</option>
        <option value="Reading">Reading</option>
        <option value="Finished">Finished</option>
      </select>

      <button onClick = {handleSave}>Save!</button>
    </div>
  )
}

export default ReadingStatus
