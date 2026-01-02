import Client from './api'

export const GetReviews = async (bookId) => {
  try {
    const res = await Client.get(`/reviews/${bookId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddReview = async (bookId, content) => {
  try {
console.log("Adding review for book:", bookId)
    console.log("Review content:", content)
    

    const res = await Client.post(`/reviews/${bookId}`, { message:content })
    // const res = await Client.post(`/reviews/${bookId}`, content)
    return res.data
  } catch (error) {
    throw error
  }
}